#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <assert.h>
#include "extratypes.h"
#include "extrafuns.h"

//Crossword solver
int solve_crossword(char** crossword, Dictionary* bigdict, Word** words, int wordnode_count, Map*** bitmaps) {
    
    // Allocating sets for CBJ 
    for (int i = 0 ; i < wordnode_count ; ++i) {
        words[i]->conf_set = calloc(wordnode_count, sizeof(int));
        mallerr(words[i]->conf_set);
        words[i]->past_fc = calloc(wordnode_count, sizeof(int));
        mallerr(words[i]->past_fc);
    }

    // Initializing map_stack (for backtrack) 
    int max_map_size = 0; // Map stack will be at most the sum of insecc in words 
    int map_stack_size = wordnode_count;
    for (int i = 0 ; i < wordnode_count ; ++i) {
        map_stack_size += words[i]->insecc;
        if (words[i]->map->size > max_map_size) {
            max_map_size = words[i]->map->size;
        }
    }
    Map* map_stack = calloc(map_stack_size, sizeof(Map));
    mallerr(map_stack);
    for (int i = 0 ; i < map_stack_size ; ++i) {
        map_stack[i].array = malloc(max_map_size * sizeof(unsigned long long));
        mallerr(map_stack[i].array);
    }
    int map_stack_index = 0;

    int index = 0; // Words index 
    int prune_flag = 0; // Flag for forward checking 
    prop_word(words, wordnode_count, index); // Initial DVO 
    while (index < wordnode_count) {
        prune_flag = 0;
        // Find word in bigdict 
        char* word_found = NULL;
        if ((word_found = find_word(bigdict[words[index]->size - 1], words[index])) == NULL) {
            if (index == 0) { // Cannot backtrack from zero 
                fprintf(stderr, "Couldn\'t solve crossword (extra sad) :(\n");
                return 1;
            }
            int* curr_conf_set = words[index]->conf_set;
            int* curr_past_fc = words[index]->past_fc;
            // h <- max(max-list(conf-set[i], max-list(past-fc[i]))) 
            int jump_to = index - 1;
            for (int i = index - 1 ; i >= 0 ; --i) {
                if (curr_conf_set[i] || curr_past_fc[i]) {
                    jump_to = i;
                    break;
                }
            }
            // past-fc union, conf_set union 
            for (int i = jump_to ; i >= 0 ; --i) {
                words[jump_to]->conf_set[i] |= curr_conf_set[i] | curr_past_fc[i];
            }
            // remove h 
            words[jump_to]->conf_set[jump_to] = 0;
            // backtrack to jump_to 
            do {
                --map_stack_index;
                words[index]->map->sum = map_stack[map_stack_index].sum;
                memcpy(words[index]->map->array, map_stack[map_stack_index].array, words[index]->map->size * sizeof(unsigned long long));
                memset(words[index]->conf_set, 0, wordnode_count * sizeof(int));
                --index;
                // Fixing back all maps that got ruined from the word put 
                for (int i = words[index]->insecc - 1 ; i >= 0 ; --i) {
                    Word* word_b = words[index]->insecs[i].word;
                    if (word_b->in_use == 0) {
                        word_b->past_fc[index] = 0;
                        --map_stack_index;
                        word_b->map->sum = map_stack[map_stack_index].sum;
                        memcpy(word_b->map->array, map_stack[map_stack_index].array, word_b->map->size * sizeof(unsigned long long));
                    }
                }
                words[index]->in_use = 0;
            } while (index > jump_to);
            continue;
        }
        // Forward checking 
        int emc_index = index - 1;
        int* emc_past_fc = NULL;
        for (int i = 0 ; i < words[index]->insecc ; ++i) {
            Intersection insec = words[index]->insecs[i];
            Word* word = insec.word;
            if (word->in_use == 0) {
                if (fc_check(word->map, &bitmaps[word->size - 1][insec.pos][(int)word_found[insec.pos_l]])) {
                    // conf-set[i] <- union(conf-set[i], past-fc[j]) 
                    if (!emc_past_fc) {
                        emc_past_fc = word->past_fc;
                        prune_flag = 1;
                    }
                    int k = index;
                    while (--k >= 0 && word->past_fc[k] == 0);
                    if (k >= 0 && emc_index > k) {
                        emc_index = k;
                        emc_past_fc = word->past_fc;
                    }
                    // Remove all words that will cause the same conflict 
                    remove_map(words[index]->map, &bitmaps[words[index]->size - 1][insec.pos_l][(int)word_found[insec.pos_l]]);
                }
            }
        }
        if (prune_flag) {
            for (int i = emc_index ; i >= 0 ; --i) {
                words[index]->conf_set[i] |= emc_past_fc[i];
            }
        }
        else {
            // For every intersection in word update its map with the changed letter 
            for (int i = 0 ; i < words[index]->insecc ; ++i) {
                Intersection insec = words[index]->insecs[i];
                Word* word = insec.word;
                if (word->in_use == 0) {
                    // Saving maps in case of backtracking 
                    map_stack[map_stack_index].sum = word->map->sum;
                    memcpy(map_stack[map_stack_index].array, word->map->array, word->map->size * sizeof(unsigned long long));
                    ++map_stack_index;
                    join_map(word->map, &bitmaps[word->size - 1][insec.pos][(int)word_found[insec.pos_l]]);
                    int past_sum = word->map->sum;
                    if (past_sum != sum_bit(word->map)) word->past_fc[index] = 1;
                }
            }
            ++index;
            // Label word used 
            words[index - 1]->in_use = 1;
            words[index - 1]->word_put = word_found;
            if (index == wordnode_count) break;
            prop_word(words, wordnode_count, index); // DVO 
            map_stack[map_stack_index].sum = words[index]->map->sum;
            memcpy(map_stack[map_stack_index].array, words[index]->map->array, words[index]->map->size * sizeof(unsigned long long));
            ++map_stack_index;
        }
    }
    // Updating crossword after a solution is found 
    for (int i = 0 ; i < wordnode_count ; ++i) {
        write_word(crossword, words[i], words[i]->word_put);
    }
    // Cleanup 
    for (int i = 0 ; i < map_stack_size ; ++i) {
        free(map_stack[i].array);
    }
    free(map_stack);
    return 0;
}