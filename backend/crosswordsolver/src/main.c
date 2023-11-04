#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <limits.h>
#include "extratypes.h"
#include "extrafuns.h"

int main(int argc, char* argv[]) {
    printf("Start\n");

    // Argument check
    if (argc < 3) {
        fprintf(stderr, "Not enough arguments. Do dict_path, crossword_path, SEED, OMIT\n");
        return 1;
    }

    printf("Initializing arguments\n");
    // Initiliazing arguments to default values
    char* dictionary_path = argv[1];
    char* crossword_path = argv[2];
    int SEED = 1, OMIT = 3;
    if(argc >=4) SEED = atoi(argv[3]);
    if(argc >=5) OMIT = atoi(argv[4]);


    printf("Initializing Crossword Grid\n");
    // Intialize the crossword grid 
    char** crossword = NULL; int** crossword_nums = NULL;
    int max_word_size, crossword_size;
    init_crossword(crossword_path, &crossword, &crossword_size, &max_word_size);
    number_crossword(crossword, crossword_size, &crossword_nums);

    printf("Markers\n");
    // These markers will lessen the work and memory before solve
    int* lengths_on_grid = calloc(max_word_size, sizeof(int));
    mallerr(lengths_on_grid);
    int* ascii_on_dict = calloc(256, sizeof(int));
    mallerr(ascii_on_dict);

    printf("Map Crossword\n");
    // Map the crossword
    int grid_count = count_words_on_grid(crossword, crossword_size, lengths_on_grid);
    Word** grid_words = map_words_on_grid(crossword, crossword_size, grid_count);

    printf("Initialize Dict\n");
    // Initialize dictionaries
    int* dict_count = NULL; // Counts words in each dictionary
    char* all_of_dict = NULL; // Points to the memory block that has all of dict
    Dictionary* bigdict = init_dictionary(dictionary_path, max_word_size, &all_of_dict, &dict_count, lengths_on_grid, ascii_on_dict, SEED, OMIT);

    printf("Initializing Dict Maps\n");
    /* Initialize dict_maps */
    Map*** dict_maps = init_dict_maps(bigdict, max_word_size, dict_count, lengths_on_grid, ascii_on_dict);

    printf("Initialize Maps\n");
    /* Initializing maps for all words */
    for (int i = 0 ; i < grid_count ; ++i) {
        Map* src = dict_maps[grid_words[i]->size - 1][grid_words[i]->size];
        grid_words[i]->map = malloc(sizeof(Map));
        mallerr(grid_words[i]->map);
        grid_words[i]->map->size = src->size;
        grid_words[i]->map->array = malloc(src->size * sizeof(unsigned long long));
        mallerr(grid_words[i]->map->array);
        /* Copying the map with 1s (full domain) */
        memcpy(grid_words[i]->map->array, src->array, src->size * sizeof(unsigned long long));
        sum_bit(grid_words[i]->map);
    }

    // Making an array of words thats in the proper order for check and print
    Word** ord_words = malloc(grid_count * sizeof(Word*));
    mallerr(ord_words);
    int ord_i = 0; // index
    for (int i = 0 ; i < grid_count ; ++i) {
        if (grid_words[i]->orientation == Horizontal) {
            ord_words[ord_i++] = grid_words[i];
        }
    }
    for (int i = 0 ; i < grid_count ; ++i) {
        if (grid_words[i]->orientation == Vertical) {
            ord_words[ord_i++] = grid_words[i];
        }
    }

    printf("Doing\n");
    int success = solve_crossword(crossword, bigdict, grid_words, grid_count, dict_maps);
    printf("SUCCESS: %d\n",success);
    draw_crossword(crossword, crossword_size);
    print_solution(crossword, ord_words, crossword_nums, grid_count);

    printf("Done. Cleaning up.\n");
    // Cleanup
    free(ord_words);
    free_dictionary(bigdict, max_word_size, all_of_dict);
    free(dict_count);
    free_maps(dict_maps, max_word_size);
    free(lengths_on_grid);
    free(ascii_on_dict);
    free_words(grid_words, grid_count);
    free(*crossword);
    free(crossword);
    free(*crossword_nums);
    free(crossword_nums);
    return 0;
}