#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <assert.h>
#include "extratypes.h"
#include "extrafuns.h"

/*
 *  Reads the crossword file and produces the grid based on the data.
 *  It also returns the maximum word size on the grid and the size of the grid.
 */
void init_crossword(char* crossword_path, char*** crossword_ret, int* crossword_size_ret, int* max_word_size_ret) {
    char** crossword = NULL;
    int crossword_size = 0;
    int max_word_size = 0;

    FILE* crossword_file = fopen(crossword_path, "r");
    if (crossword_file == NULL) { // File error handling 
        error("Error while handling crossword");
    }
    if (fscanf(crossword_file, "%d\n", &crossword_size) != 1) // Check failed size scan 
        error("Error while reading size of crossword");

    if (crossword_size <= 0) {
        fprintf(stderr, "Invalid grid size of %d cannot proceed\n", crossword_size);
        exit(1);
    }
    
    // Allocating memory block for the grid 
    crossword = malloc(crossword_size * sizeof(char*));
    mallerr(crossword);
    // Setting every character with '\0' to begin 
    crossword[0] = calloc(crossword_size * crossword_size, sizeof(char));
    mallerr(crossword[0]);
    // Fixing the pointers in the right spot 
    for (int i = 0 ; i < crossword_size - 1 ; ++i) {
        crossword[i + 1] = crossword[i] + crossword_size;
    }

    //Reading crossword
    for(int i = 0; i<crossword_size; i++){
        for(int j = 0; j<crossword_size; j++){
            char gridCharacter;
            fscanf(crossword_file, "%c",&gridCharacter);
            if(gridCharacter==' ') crossword[i][j] = '\r';
        }
        fscanf(crossword_file, "%*c");
    }

    // Biggest word finder 
    for (int i = 0 ; i < crossword_size ; ++i) {
        int len_row = 0, len_col = 0;
        for (int j = 0 ; j < crossword_size ; ++j) {
            // Row section 
            if (crossword[i][j] == '\r') {
                if (len_row > max_word_size) max_word_size = len_row;
                len_row = 0;
            }
            if (crossword[i][j] == '\0') ++len_row;
            // Column section 
            if (crossword[j][i] == '\r') {
                if (len_col > max_word_size) max_word_size = len_col;
                len_col = 0;
            }
            if (crossword[j][i] == '\0') ++len_col;
        }
        if (len_row > max_word_size) max_word_size = len_row;
        if (len_col > max_word_size) max_word_size = len_col;
    }

    // Returning the values 
    *crossword_ret = crossword;
    *crossword_size_ret = crossword_size;
    *max_word_size_ret = max_word_size;
    // Cleanup 
    fclose(crossword_file);
}

// Drawing the crossword
void draw_crossword(char** crossword, int crossword_size) {
    for (int i = 0 ; i < crossword_size ; ++i) {
        for (int j = 0 ; j < crossword_size ; ++j) {
            if (crossword[i][j] == '\r') {
                printf("###");
            } else {
                // In case of cut off cell 
                printf(" %c ", crossword[i][j] == '\0' ? ' ' : crossword[i][j]);
            }
        }
        putchar('\n');
    }
}

//Create crossword numbers
void number_crossword(char** crossword, int crossword_size, int*** crossword_num_ret) {
    int** crossword_num = NULL;
    // Allocating memory block for the number grind 
    crossword_num = malloc(crossword_size * sizeof(int*));
    mallerr(crossword_num);
    // Setting every character with '\0' to begin 
    crossword_num[0] = calloc(crossword_size * crossword_size, sizeof(int));
    mallerr(crossword_num[0]);
    // Fixing the pointers in the right spot 
    for (int i = 0 ; i < crossword_size - 1 ; ++i) {
        crossword_num[i + 1] = crossword_num[i] + crossword_size;
    }

    int current_num = 1;
    for (int i = 0; i<crossword_size; ++i){
        for(int j = 0; j<crossword_size; ++j){
            if((j==0 || crossword[i][j-1]=='\r') || (i==0 || crossword[i-1][j]=='\r')){
                crossword_num[i][j] = current_num;
                current_num++;
            }
        }
    }
    *crossword_num_ret = crossword_num;
}