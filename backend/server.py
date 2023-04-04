# Imports
from flask import Flask, request
import test
import pendulum
import pandas as pd
import os
import json
  
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

# currently using trip number as id value - change to use something else if needed
# need to add connection to db in order to modify and extract values instead of writing/extracting from data.json

#@app.route('/data/bus', methods={'GET'})
def getBusInfo():
    #key = request.args.get('trip')
    key = 23562020

    with open('src/components/data/data.json', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['trip'] == key:
                print(record)
                return record
        #return jsonify({'error': 'data not found'})

@app.route('/edit', methods=['PUT'])
def toggleOff():
    key = request.args.get('trip')

    # connect to db table - but file for now
    with open('src/components/data/data.json', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['trip'] == key:
                if record['off']:
                    toggle = 0
                    print("changed to 0")
                else:
                    toggle = 1
                    print("changed to 1")
                record["off"] = toggle
                print('successfully changed off')
    with open('src/components/data/data.json', "w") as f:
        json.dump(records, f)
      
# Runs app
if __name__ == '__main__':
    app.run(debug=True)
    # getBusInfo()
    # toggleOff()