import React from 'react';
import { TableNavyPier, TableRed, TableBrown, TableBlue } from "../components/tables";
import { ReactDOM } from 'react';
import { useState, useEffect } from "react";
// import { Data } from "../components/tableData.js";

export const DashboardNavyPier = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/
    
    
    return (
        <div>
            <h2>Navy Pier Runs</h2>
            <TableNavyPier />
        </div>
    )
}


export const DashboardRed = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/

    
    return (
        <div>
            <h2>Chicago & State (Red Line) Runs</h2>
            <TableRed />
        </div>
    )
}

export const DashboardBrown = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/

    
    return (
        <div>
            <h2>Chicago & Franklin (Brown Line) Runs</h2>
            <TableBrown />
        </div>
    )
}


export const DashboardBlue = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/

    
    return (
        <div>
            <h2>Chicago & Milwaukee (Blue Line) Runs</h2>
            <TableBlue />
        </div>
    )
}


