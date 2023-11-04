import pandas as pd
import sqlite3

df = pd.read_parquet("0000.parquet")
df.answer = df.answer.apply(lambda x: x.upper().replace(" ", ""))
df = df[df['clue'].notnull() & df["answer"].notnull()]
df = df[df["clue"].str.len() < 2000]
con = sqlite3.connect("crossword")
df.to_sql(name="words", con = con)
