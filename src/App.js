import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { DashboardNavyPier, DashboardRed, DashboardBrown, DashboardBlue} from "./routes/Dashboard";
import React from "react";
import './App.css';

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
            </Routes>
          </div>
        </div>
      </>
		</div>
	);
}
export default App;
