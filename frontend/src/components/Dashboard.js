import React from 'react';
import { Table } from "./table";
import Table2 from "./table2";
import { ReactDOM } from 'react';
import MOCK_DATA from './mock-data.json';

const Dashboard = () => {
    /*const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Table2 />)*/
    
    return (
        <div>
            <h2>Bus Trip Dashboard</h2>
            <Table />
        </div>
    )
}

export default Dashboard;