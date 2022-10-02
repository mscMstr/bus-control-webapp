import mysql.connector
from mysql.connector import errorcode
from sqlalchemy import create_engine
import pandas as pd
import config

db_name = "real_time_dingyi"
table_name = "Jpk_RT_1002"

q = f"""
SELECT *
FROM {db_name}.{table_name}
"""

df_db = pd.read_sql(q, config.instance_url + db_name)

print ('fetched!')
