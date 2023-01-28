# Bus Control Tool

#### `Tool to view buses running at the moment and get live updates as infomation changes about expected times and actions taken.` 

#

### ``Development Enviroment``

Everything required for running the development environment for this Bus Tool is contained within this repository. It contains a backend folder and frontend folder for the app that are further described below. The following steps walk through the contents of the repo.

#

## ``Front-End``

Written in JavaScript using React.js. Contained within the src folder. Includes react components within a components folder and files for each page.

In order to start react app:

- install react from terminal

    ```npm install```

- run react app

    ```npm start```

#

## ``Back-End``

Written in Python using a Flask framework. Contained within the backend folder. Contains python scripts in order to connect frontend UI to MySQL database.

In order to run python scripts:

- installations (using pip, if other installer modify)

    ```pip install flask```

    ```pip install pandas```

    ```pip install mysql-connector-python```

    ```pip install sqlalchemy```

- run script

    ```python3 backend/server.py```

#

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

currently in production : adding interaction to UI so that backend scripts can be run without the need for terminal prompts; backend APIs in order to add this functionality; unit and integration testing for the sections of code; documentation

-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-