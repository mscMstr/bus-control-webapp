#import server.py
import json

from flask import jsonify, request

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

#@app.route('/edit', methods=['PUT'])
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

if __name__ == '__main__':
    getBusInfo()
    toggleOff()