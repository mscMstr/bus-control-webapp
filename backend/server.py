# Imports
from flask import Flask
import test
import pendulum
import pandas as pd

  
# Initializes flask app
app = Flask(__name__)


t = pendulum.now('America/Chicago').replace(tzinfo=None)
df = test.df_db
df['t_diff'] = (pd.Timestamp(t) - df['s_time_dt']).abs()
idx_closest = df['t_diff'].argmin()
df_display = df.iloc[idx_closest-5:idx_closest+5]
data = df_display.to_json(path_or_buf='../bus-control-webapp/src/components/data/data.json', orient='records')

# Route for seeing data
@app.route('/data', methods={'GET'})
def returnJSON():
    return data

      
# Runs app
if __name__ == '__main__':
    app.run(debug=True)