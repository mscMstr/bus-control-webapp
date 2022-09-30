import React from 'react';
import { Table } from "./table";
import Table2 from "./table2";
import { ReactDOM } from 'react';
import { useState, useEffect } from "react";
import { Data } from "./tableData.js";

const Dashboard = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/

    // usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/data").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					name: data.Name,
					age: data.Age,
					date: data.Date,
					programming: data.programming,
				});
			})
		);
	}, []);
    
    return (
        <div>
            <h2>Bus Trip Dashboard</h2>
            <Table />
        </div>
    )
}

export default Dashboard;