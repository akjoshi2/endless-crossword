#ifndef EXTRAFUNS_H_
#define EXTRAFUNS_H_
#include <stdio.h>
#include <stddef.h>
#include <errno.h>
#include "extratypes.h"

// Generic error thrower with errno 
#define error(x) {  \
    perror((x));    \
    exit((errno));  \
}

#define mallerr_xstr(s) mallerr_str(s)
#define mallerr_str(s) #s

/* Malloc error handling */
#define mallerr(x) {                                             \
    if ((x) == NULL) {                                           \
        perror("malloc@" __FILE__ ":" mallerr_xstr(__LINE__) );  \
        exit(errno);                                             \
    }                                                            \
}

// solver.c functions 
int solve_crossword(char** crossword, Dictionary* bigdict, Word** words, int wordnode_count, Map*** bitmaps);

// crossword.c functions
void init_crossword(char* crossword_path, char*** crossword_ret, int* crossword_size_ret, int* max_word_size_ret);
void draw_crossword(char** crossword, int crossword_size);
void number_crossword(char** crossword, int crossword_size, int*** crossword_num_ret);

// dict.c functions 
Dictionary* init_dictionary(char* dictionary_path, int max_word_size, char** all_of_dict_ret,
                            int** dict_count_ret, int* lengths_on_grid, int* ascii_on_dict, int SEED, int OMIT);
void free_dictionary(Dictionary* bigdict, int max_word_size, char* all_of_dict);
char* find_word(Dictionary dictionary, Word* word);
int word_val(char* word, int* worth);
void sort_dictionary(Dictionary dictionary, int* dictnode_values, int first, int last);

// words.c functions 
void write_word(char** crossword, Word* node, char* word);
int count_words_on_grid(char** crossword, int crossword_size, int* lengths_on_grid);
Word** map_words_on_grid(char** crossword, int crossword_size, int count);
void prop_word(Word** words, int wordnode_count, int last);
void print_solution(char** crossword, Word** ord_words, int ** crossword_nums, int count);
void free_words(Word** words, int wordnode_count);

// maps.c functions 
int fc_check(Map* map1, Map* map2);
Map*** init_dict_maps(Dictionary* bigdict, int max_word_size, int* words_count,
                      int* lengths_on_grid, int* ascii_on_dict);
void free_maps(Map*** maps, int max_word_size);
void remove_map(Map* map1, Map* map2);
void join_map(Map* map1, Map* map2);
int sum_bit(Map* map);

#endif