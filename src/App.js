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
export default App;
