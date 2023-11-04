import sqlite3
import requests
import csv
import json
import pandas as pd
from flask import Flask
app = Flask(__name__)

@app.route("/getCross")
def getCross():
    pass
# df = pd.read_parquet("0000.parquet")
# df = df[df['clue'].notnull() & df["answer"].notnull()]
# df = df[df["clue"].str.len() < 2000]

con = sqlite3.connect("crossword")

# df.to_sql(name="words", con = con)
s = pd.read_sql("select * from words", con).clue
