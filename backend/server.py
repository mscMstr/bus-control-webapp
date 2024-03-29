# Imports
from flask import Flask, request, jsonify
#import test
#import pendulum
import pandas as pd
import os
import json

  
# Initializes flask app
app = Flask(__name__)


# t = pendulum.now('America/Chicago').replace(tzinfo=None)
# df = test.df_db
# df['t_diff'] = (pd.Timestamp(t) - df['s_time_dt']).abs()
# idx_closest = df['t_diff'].argmin()
# df_display = df.iloc[idx_closest-6:idx_closest+5]

# using global path so we can run this from terminal!
dir_path = os.path.dirname(os.path.realpath(__file__))
pth_data = os.path.abspath(os.path.join(dir_path, os.pardir,'src/components/data/data.json'))


# data = df_display.to_json(path_or_buf=pth_data, orient='records')
data = [{"run": "F128", "trip": 23562020, "s_time_dt": 1666366230000, "s_time": "15:30", "s_hws": "9/9", "s_hw": 9.0, "s_fhw": 9.0, "off": 1, "bus_id": "1390", "op_id": "64771", "pa_time_dt": 1666365777000, "p_time_dt": 1666366230000, "p_time": "15:30", "p_hw": 10.0666666667, "p_fhw": 9.0, "p_hws": "10/9", "p_dev": 0, "r_act": 0, "r_time_dt": 1666366198000, "r_time": "15:29", "r_hw": 9.5333333333, "r_fhw": 14.0166666667, "r_hws": "9/14", "r_dev": 0, "a_act": 0, "a_time_dt": 1666366200000, "a_time": "15:30", "a_hw": 10.0666666667, "a_fhw": 9.0, "a_hws": "10/9", "a_dev": 0, "rl_time_dt": 1666366290000, "rl_time": "15:31", "p_board": 39, "r_board": 37, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 231.7798603162, "t_diff": 3273717, "23562020": 1}, {"run": "F111", "trip": 46314020, "s_time_dt": 1666366770000, "s_time": "15:39", "s_hws": "9/9", "s_hw": 9.0, "s_fhw": 9.0, "off": 0, "bus_id": "8389", "op_id": "62147", "pa_time_dt": 1666366034000, "p_time_dt": 1666366990000, "p_time": "15:43", "p_hw": 13.1666666667, "p_fhw": 14.8333333333, "p_hws": "13/14", "p_dev": 3, "r_act": 4, "r_time_dt": 1666367040000, "r_time": "15:44", "r_hw": 14.0, "r_fhw": 11.75, "r_hws": "14/11", "r_dev": 4, "a_act": 0, "a_time_dt": 1666366999000, "a_time": "15:43", "a_hw": 13.1666666667, "a_fhw": 14.8333333333, "a_hws": "13/14", "a_dev": 3, "rl_time_dt": 1666366830000, "rl_time": "15:40", "p_board": 51, "r_board": 54, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 231.7798603162, "t_diff": 2733717}, {"run": "F117", "trip": 21204020, "s_time_dt": 1666367310000, "s_time": "15:48", "s_hws": "9/9", "s_hw": 9.0, "s_fhw": 9.5, "off": 1, "bus_id": "9999", "op_id": "9999", "pa_time_dt": 1666310400000, "p_time_dt": 1666310400000, "p_time": "00:00", "p_hw": 0.0, "p_fhw": 0.0, "p_hws": "0/0", "p_dev": 0, "r_act": 0, "r_time_dt": 1666310400000, "r_time": "00:00", "r_hw": 0.0, "r_fhw": 0.0, "r_hws": "0/0", "r_dev": 0, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666310400000, "rl_time": "00:00", "p_board": 0, "r_board": 0, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 223.9913810352, "t_diff": 2193717}, {"run": "F112", "trip": 26422020, "s_time_dt": 1666367880000, "s_time": "15:58", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "8283", "op_id": "52581", "pa_time_dt": 1666366995000, "p_time_dt": 1666367880000, "p_time": "15:58", "p_hw": 14.6833333333, "p_fhw": 9.5, "p_hws": "14/9", "p_dev": 0, "r_act": -2, "r_time_dt": 1666367725000, "r_time": "15:55", "r_hw": 12.0916666667, "r_fhw": 10.7958333333, "r_hws": "12/10", "r_dev": -2, "a_act": -3, "a_time_dt": 1666367680000, "a_time": "15:54", "a_hw": 11.6833333333, "a_fhw": 12.5, "a_hws": "11/12", "a_dev": -3, "rl_time_dt": 1666367940000, "rl_time": "15:59", "p_board": 55, "r_board": 45, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 223.9913810352, "t_diff": 1623717}, {"run": "F118", "trip": 17297020, "s_time_dt": 1666368450000, "s_time": "16:07", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "8273", "op_id": "44289", "pa_time_dt": 1666367710000, "p_time_dt": 1666368450000, "p_time": "16:07", "p_hw": 12.8333333333, "p_fhw": 9.5, "p_hws": "12/9", "p_dev": 0, "r_act": -1, "r_time_dt": 1666368350000, "r_time": "16:05", "r_hw": 11.1666666667, "r_fhw": 10.3333333333, "r_hws": "11/10", "r_dev": -1, "a_act": 0, "a_time_dt": 1666368450000, "a_time": "16:07", "a_hw": 12.8333333333, "a_fhw": 9.5, "a_hws": "12/9", "a_dev": 0, "rl_time_dt": 1666368450000, "rl_time": "16:07", "p_board": 48, "r_board": 42, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 223.9913810352, "t_diff": 1053717}, {"run": "F123", "trip": 34199020, "s_time_dt": 1666369020000, "s_time": "16:17", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "1403", "op_id": "49992", "pa_time_dt": 1666368497000, "p_time_dt": 1666369020000, "p_time": "16:17", "p_hw": 9.5, "p_fhw": 9.5, "p_hws": "9/9", "p_dev": 0, "r_act": 0, "r_time_dt": 1666369020000, "r_time": "16:17", "r_hw": 9.5, "r_fhw": 9.5, "r_hws": "9/9", "r_dev": 0, "a_act": 2, "a_time_dt": 1666369140000, "a_time": "16:19", "a_hw": 11.5, "a_fhw": 7.5, "a_hws": "11/7", "a_dev": 2, "rl_time_dt": 1666369080000, "rl_time": "16:18", "p_board": 33, "r_board": 33, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 206.6387501349, "t_diff": 483717}, {"run": "F119", "trip": 4957020, "s_time_dt": 1666369590000, "s_time": "16:26", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "8240", "op_id": "51857", "pa_time_dt": 1666369087000, "p_time_dt": 1666369590000, "p_time": "16:26", "p_hw": 7.5, "p_fhw": 9.5, "p_hws": "7/9", "p_dev": 0, "r_act": 1, "r_time_dt": 1666369650000, "r_time": "16:27", "r_hw": 8.5, "r_fhw": 9.0, "r_hws": "8/9", "r_dev": 1, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666369650000, "rl_time": "16:27", "p_board": 26, "r_board": 29, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 206.6387501349, "t_diff": 86282}, {"run": "F120", "trip": 27298020, "s_time_dt": 1666370160000, "s_time": "16:36", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "8254", "op_id": "9999", "pa_time_dt": 1666369655000, "p_time_dt": 1666370160000, "p_time": "16:36", "p_hw": 9.5, "p_fhw": 9.5, "p_hws": "9/9", "p_dev": 0, "r_act": 0, "r_time_dt": 1666370190000, "r_time": "16:36", "r_hw": 9.0, "r_fhw": 9.25, "r_hws": "9/9", "r_dev": 0, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666370280000, "rl_time": "16:38", "p_board": 33, "r_board": 31, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 206.6387501349, "t_diff": 656282}, {"run": "F114", "trip": 17487020, "s_time_dt": 1666370730000, "s_time": "16:45", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "8211", "op_id": "37227", "pa_time_dt": 1666370493000, "p_time_dt": 1666370730000, "p_time": "16:45", "p_hw": 9.5, "p_fhw": 9.5, "p_hws": "9/9", "p_dev": 0, "r_act": 0, "r_time_dt": 1666370745000, "r_time": "16:45", "r_hw": 9.25, "r_fhw": 9.25, "r_hws": "9/9", "r_dev": 0, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666370493000, "rl_time": "16:41", "p_board": 36, "r_board": 35, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 225.5329032973, "t_diff": 1226282}, {"run": "F121", "trip": 10682020, "s_time_dt": 1666371300000, "s_time": "16:55", "s_hws": "9/9", "s_hw": 9.5, "s_fhw": 9.5, "off": 0, "bus_id": "9999", "op_id": "9999", "pa_time_dt": 1666310400000, "p_time_dt": 1666310400000, "p_time": "00:00", "p_hw": 0.0, "p_fhw": 0.0, "p_hws": "0/0", "p_dev": 0, "r_act": 0, "r_time_dt": 1666310400000, "r_time": "00:00", "r_hw": 0.0, "r_fhw": 0.0, "r_hws": "0/0", "r_dev": 0, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666310400000, "rl_time": "00:00", "p_board": 0, "r_board": 0, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 225.5329032973, "t_diff": 1796282}, {"run": "F122", "trip": 26477020, "s_time_dt": 1666371870000, "s_time": "17:04", "s_hws": "9/10", "s_hw": 9.5, "s_fhw": 10.0, "off": 0, "bus_id": "9999", "op_id": "9999", "pa_time_dt": 1666310400000, "p_time_dt": 1666310400000, "p_time": "00:00", "p_hw": 0.0, "p_fhw": 0.0, "p_hws": "0/0", "p_dev": 0, "r_act": 0, "r_time_dt": 1666310400000, "r_time": "00:00", "r_hw": 0.0, "r_fhw": 0.0, "r_hws": "0/0", "r_dev": 0, "a_act": 0, "a_time_dt": 1666310400000, "a_time": "00:00", "a_hw": 0.0, "a_fhw": 0.0, "a_hws": "0/0", "a_dev": 0, "rl_time_dt": 1666310400000, "rl_time": "00:00", "p_board": 0, "r_board": 0, "run_relief": "-", "arr_rate": 0.0, "mid_ht": 0, "t_mid_ht": 1666310400000, "verified": 0, "ar": 225.5329032973, "t_diff": 2366282}]

@app.route('/')
def default():
    return [{"home":"page","really":"nothing"},{"to":"it","that's":"it"}]

# Route for seeing data
@app.route('/data', methods={'GET'})
def returnJSON():
    return data

# currently using run value as id - change to use something else if needed
# need to add connection to db in order to modify and extract values instead of writing/extracting from data.json

@app.route('/bus/data/<string:id_>', methods={'GET'})
def getBusInfo(id_):

    with open('src/components/data/data.json', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['run'] == id_:
                print(record)
                return record
        return jsonify({'error': 'data not found'})

@app.route('/bus/toggleOff/<string:id_>', methods=['GET', 'PUT'])
def toggleOff(id_):

    # connect to db table - but file for now
    with open('src/components/data/data.json', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for record in records:
            if record['run'] == id_:
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
    return records
      
# Runs app
if __name__ == '__main__':
    app.run(debug=True)
    # getBusInfo()
    # toggleOff()