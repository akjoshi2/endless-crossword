<div align="center">
  
# Endless Crossword
_unlimited reproducible crossword generation and playability_

</div>

Created in less than 24 hours by [Akshay Joshi](https://github.com/akjoshi2), [Joseph Cai](https://github.com/jcai0791), [Aiden Cohen](https://github.com/aidencohen31), and [Sriram Bharadwaj](https://github.com/srirambh) for CheeseHacks 2023

## Description

Endless Crossword is your ticket to a world of limitless, procedurally-generated crosswords, featuring clues sourced from prestigious publications like the New York Times and more!

Endless Crossword has many exciting features, including:
+ Revolutionary Puzzles: Our algorithm conjures up crossword puzzles that are always new and one-of-a-kind.
+ Unlimited Play: Say goodbye to waiting every day for a new crossword. With just a click of the Generate Button, a new puzzle is instantly created. 
+ Tailored Challenge: Endless Crossword lets you choose from a spectrum of difficulty levels. 
+ Easily Share: Send your generated crossword to your friends using the unique seed found right on the webpage.
+ Solve Like a Pro: Stuck on a tricky clue? Endless Crossword has a range of tools to assist you when you get stuck, including Generative AI to substitute clues on the fly.

## Live Project Site

![image](https://github.com/user-attachments/assets/4dcadf21-fc0e-406d-95e1-7d7d0ba452ce)

UPDATE 7/28/24 - Endless Crossword is no longer live.
Endless Crossword is live at [https://endless-crossword.onrender.com/](https://endless-crossword.onrender.com/). 

## Design
### Frontend
We created an application using Vite and Svelte for the frontend. We also used ReactAdapter to integrate React components within our Svelte application. JavaScript eventBus was used to communicate between the React and Svelte components. 

### Backend
Endless Crossword's backend is made using Python, Flask, SQLite, Docker deployed to Render.

### Algorithm

Our crossword generating algorithm implements the methods described in [this paper](https://web.stanford.edu/~jduchi/projects/crossword_writeup.pdf)
Crossword generating and solving is a form of a Constraint Satisfaction Problem (CSP), which is NP-Complete. A naive backtracking solution would take immense amount of computation to yield a valid grid. However, we can use several heuristics to make the search much faster.

1. Forward checking: use current instantiations of variables to prune domains of variables that have not yet been instantiated.
2. Dynamic variable ordering (DVO): attempts to select the best variables to explore at every point in the search. In our implementations, we used the minimum remaining values (MRV) heuristic, which selects variables to instantiate whose remaining domains of possible values are smallest. 
3. Conflict-directed backjumping (CBJ): maintains a list of the levels in the search with which every variable conflicts.

We wrote the algorithm in C and used bit maps to massively speed up the algorithm. The algorithm uses the wordlist from [this dataset](https://huggingface.co/datasets/albertxu/CrosswordQA) which has over 6 million clues and 400k unique words. We found that a large dictionary is critical to the runtime of the algorithm.

## Developed Using
- [React](https://reactjs.org/)
- [Svelte](https://svelte.dev/)
- [JavaScript](https://www.javascript.com)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [Render](https://render.com/)
- [Python](https://www.python.org)
- [C](https://www.cprogramming.com/)
- [Docker](https://www.docker.com/)
- [SQLite](https://www.sqlite.org/index.html)

