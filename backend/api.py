import sqlite3
import requests
import csv
import json
from flask import Flask, request, jsonify
import os
import subprocess
import random
app = Flask(__name__)


def parseProgramOutput(input_string, con):
    entries = []
    con = sqlite3.connect("crossword")
    lines = input_string.strip().split(b'\n')
    for line in lines:
        parts = line.strip().split(b', ')
        direction, y, x, answer = parts[0].decode('utf-8'), int(parts[2]), int(parts[3]), parts[4].decode('utf-8')
        entry = {
            "answer": answer,
            "direction": direction.lower(),
            "clue": getClue(answer, con),
            "x": x,
            "y": y
        }
        entries.append(entry)
    con.close()
    return entries

def getClue(answer, con):
    # print(answer)
    cur = con.cursor()
    query = cur.execute(f"""SELECT clue FROM words WHERE answer = '{answer}'""").fetchall()
    return random.choice(query)[0]
@app.route("/getCross", methods=["GET"])
def getCross():
    diff = request.args["difficulty"]
    seed = request.args["seed"]
    # diff = "Hard"
    # seed = 3
    random.seed(seed)
    l = [i for i in os.listdir(f"./Structures/{diff}/")]
    p = subprocess.Popen(["./cwsolver", "./wordlist.txt", f"./Structures/{diff}/{random.choice(l)}",f"{seed}"], stdout=subprocess.PIPE)
    stdout = p.communicate()[0]
    #parse
    data = parseProgramOutput(stdout)
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

# print(getCross())

