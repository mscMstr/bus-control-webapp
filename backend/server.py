# Imports
from flask import Flask
import test
  
# Initializes flask app
app = Flask(__name__)


  
data = test.df_db.iloc[0:7].to_json(path_or_buf='../bus-tool/src/components/data/data.json', orient='records')

# Route for seeing data
@app.route('/data', methods={'GET'})
def returnJSON():
    return data

      
# Runs app
if __name__ == '__main__':
    app.run(debug=True)