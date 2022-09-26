import mysql.connector
from mysql.connector import errorcode
from sqlalchemy import create_engine
import pandas as pd
import config

db_name = "RealTime"
table_name = "Jpk_RT_tuesday"

engine = create_engine(config.instance_url + db_name)
engine.connect()

q = f"""
SELECT *
FROM {db_name}.{table_name}
"""

engine = create_engine(config.instance_url + db_name)
df_db = pd.read_sql(q, con=engine)

print (df_db.columns)
