import pandas as pd
import sqlite3

df = pd.read_parquet("0000.parquet")
df = df[df['clue'].notnull() & df["answer"].notnull()]
df.answer = df.answer.apply(lambda x: x.upper().replace(" ", ""))
df = df[df["clue"].str.len() < 2000]
con = sqlite3.connect("crossword")
df.to_sql(name="words", con = con)
files = ["test", "train", "val"]
cur = con.cursor()
ids = 10 ** 8
for i in files:
    fsource = open(i + ".source")
    ftarget = open(i+ ".target")
    while line := fsource.readline():
         line2 = ftarget.readline()
         cur.execute(f"""INSERT INTO words(id, clue, answer) VALUES ({ids},{fsource},{ftarget})""" )
         ids += 1

cur.execute("""CREATE INDEX word_idx ON words(answer)""")
cur.close()
