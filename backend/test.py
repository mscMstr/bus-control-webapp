import pandas as pd
import config
import pendulum

db_name = "real_time_joseph"
date_str = pendulum.now('America/Chicago').strftime('%m%d')
table_name = "Jpk_RT_" + date_str

q = f"""
SELECT *
FROM {db_name}.{table_name}
"""

df_db = pd.read_sql(q, config.instance_url + db_name)

# print ('fetched!')
