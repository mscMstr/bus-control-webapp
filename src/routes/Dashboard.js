import React from 'react';
import { Table } from "../components/table";
import { ReactDOM } from 'react';
import { useState, useEffect } from "react";
import { Data } from "../components/tableData.js";

const Dashboard = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/

    
    return (
        <div>
            <h2>Navy Pier Runs</h2>
            <Table />
        </div>
    )
}

export default Dashboard;