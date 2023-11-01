import logo from './logo.svg';
// import { Table } from './components/tableNavyPier'
import { Route, Routes, HashRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { DashboardNavyPier, DashboardRed, DashboardBrown, DashboardBlue} from "./routes/Dashboard";
import React, { useState, useEffect } from "react";
import './App.css';

/*const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';*/

function App() {

	return (
		<div className="App">
      <>
        <div className="App">
          <Navbar />
          <div className='content'>
            <Routes>
              <Route exact path={"/"} element={<Home />}></Route>
              <Route path={"/dashboardNavyPier"} element={<DashboardNavyPier />}></Route>
              <Route path={"/dashboardRed"} element={<DashboardRed />}></Route>
              <Route path={"/dashboardBrown"} element={<DashboardBrown />}></Route>
              <Route path={"/dashboardBlue"} element={<DashboardBlue />}></Route>
              <Route path={"/login"} element={<Login />}> </Route>
            </Routes>
          </div>
        </div>
      </>
		</div>
	);
}
/*
class App extends React.Component {
  /*const [token, setToken] = useState();*//*

  constructor(props) {
    super(props);
    this.state = {bus: []};
    this.headers = [
        { key: 'run', label: 'Run'},
        { key: 'run_relief', label: 'Run Relief' },
        { key: 'bus', label: 'Bus' },
        { key: 'time_due', label: 'Time Due' },
        { key: 'expected', label: 'Expected' },
        { key: 'recommended', label: 'Recommended' },
        { key: 'executed', label: 'Exectuted' }
    ];
    /*
    this.state = { checkedBoxes: [] };
    this.cancelTrip = this.cancelTrip.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    */
//}
 
/*
cancelTrip = (event) => {
    event.preventDefault();
    if(window.confirm('Are you sure, want to cancel the selected trip(s)?')) {
        alert(this.state.checkedBoxes + " Succesfully Deleted");
    }
}
 
toggleCheckbox = (e, item) => {      
    if(e.target.checked) {
        let arr = this.state.checkedBoxes;
        arr.push(item.id);
         
        this.setState = { checkedBoxes: arr};
    } else {            
        let items = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(item.id), 1);
         
        this.setState = {
            checkedBoxes: items
        }
    }       
    console.log(this.state.checkedBoxes);
}
*//*
 
componentDidMount() {
    fetch('mock-data.json')
      .then(response => response.json())
      .then(data => this.setState({ bus: data.hits }))
      .catch(error => this.setState({ error, isLoading: false }));
      /*
      .then(result => {
        // Work with JSON data here
        console.log(result);
        this.setState({
            bus_rs:result
        }); 
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
      *//*
}
     
render() {
    //const busFound = this.state.bus_rs && this.state.bus_rs.length;
    const { hits } = this.state;
    return (
          <div>
            <Router>
              <div className="App">
                <Navbar />
                <div className='content'>
                  <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/dashboard"} element={<Dashboard />}></Route>
                    <Route path={"/Login"} element={<Login />}> </Route>
                  </Routes>
                </div>
              </div>
            </Router>
          <div className="container"><h1>ReactJS Fetch Data from JSON</h1>
              <div id="msg"></div>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    {this.headers.map(function (h) {
                      return (
                        <th key={h.key}>{h.label}</th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
                </tbody>
              </table>
            </div>
            </div>
        )
  }

  /*
  return (
    <Router> 
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/dashboard"} element={<Dashboard/>}></Route>
            <Route path={"/Login"} element={<Login/>}> </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
  *//*
}
*/

export default App;
