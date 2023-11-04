EXECUTABLE := crosswordsolver

BUILD_DIR := ./target
SRC_DIRS := ./src
$(shell mkdir -p $(BUILD_DIR))

# Use wildcard to automatically find source files in SRC_DIRS
SRCS := $(wildcard $(SRC_DIRS)/*.c)
# Generate object file names by replacing .c with .o
OBJS := $(SRCS:$(SRC_DIRS)/%.c=$(BUILD_DIR)/%.o)

CC = gcc
CFLAGS = -O2 -Wall -Wextra

# Targets
all: $(EXECUTABLE)

$(EXECUTABLE): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^

# Use pattern rule to compile .c files to .o files
$(BUILD_DIR)/%.o: $(SRC_DIRS)/%.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -f $(OBJS) $(EXECUTABLE)

.PHONY: all clean
