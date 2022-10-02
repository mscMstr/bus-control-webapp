import pandas as pd

df = pd.read_csv (r'../res/Jpk_RT_test.csv')
df.to_json (r'../scr/components/data/mock-data.json')