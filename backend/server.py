# Imports
from flask import Flask
import test
import pendulum
import pandas as pd
import os
  
# Initializes flask app
app = Flask(__name__)


t = pendulum.now('America/Chicago').replace(tzinfo=None)
df = test.df_db
df['t_diff'] = (pd.Timestamp(t) - df['s_time_dt']).abs()
idx_closest = df['t_diff'].argmin()
df_display = df.iloc[idx_closest-6:idx_closest+5]

# using global path so we can run this from terminal!
dir_path = os.path.dirname(os.path.realpath(__file__))
pth_data = os.path.abspath(os.path.join(dir_path, os.pardir,'src/components/data/data.json'))


data = df_display.to_json(path_or_buf=pth_data, orient='records')

# Route for seeing data
@app.route('/data', methods={'GET'})
def returnJSON():
    return data

      
# Runs app
if __name__ == '__main__':
    app.run(debug=True)