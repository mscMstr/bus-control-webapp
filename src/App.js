import logo from './logo.svg';
import { Table } from './components/table'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import { HashRouter } from "react-router-dom";
import './App.css';

function App() {
  const [token, setToken] = useState();

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
}

export default App;
