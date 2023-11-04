import sqlite3
import requests
import csv
import json
from flask import Flask, request
import os
import subprocess
import random
app = Flask(__name__)

@app.route("/getCross", methods=["GET"])
def getCross():
    diff = request.args["difficulty"]
    l = [i for i in os.path.walk(f"crosswordsolver/Structures/{diff}")]
    p = subprocess.Popen(["./crosswordsolver", "wordlist.txt", random.choice(l) ], stdout=subprocess.PIPE)
    stdout = p.communicate()
    #parse

@app.route("/")
def hello():
    print("HELLO WORLD")
    return {"hello" : "mate"}



