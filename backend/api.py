import sqlite3
import requests
import csv
import json
from flask import Flask, request
import os
import subprocess
import random
app = Flask(__name__)


def parseProgramOutput(input_string, con):
    entries = []

    lines = input_string.strip().split(b'\n')
    for line in lines:
        parts = line.strip().split(b', ')
        direction, x, y, answer = parts[0].decode('utf-8'), int(parts[1]), int(parts[2]), parts[4].decode('utf-8')
        entry = {
            "answer": answer,
            "direction": direction.lower(),
            "clue": getClue(answer, con),
            "x": x,
            "y": y
        }
        entries.append(entry)

    return entries

def getClue(answer, con):
    cur = con.cursor()
    query = cur.execute(f"""SELECT clue FROM words WHERE answer LIKE '{answer}'""").fetchall()
    return random.choice(query)
@app.route("/getCross", methods=["GET"])
def getCross():
    con = sqlite3.connect("crossword")
    diff = request.args["difficulty"]
    l = [i for i in os.listdir(f"./Structures/{diff}/")]
    p = subprocess.Popen(["./cwsolver", "./wordlist.txt", f"./Structures/{diff}/{random.choice(l)}"], stdout=subprocess.PIPE)
    stdout = p.communicate()[0]
    #parse
    data = parseProgramOutput(stdout, con)
    con.close()
    return json.dumps(data)

getCross()

