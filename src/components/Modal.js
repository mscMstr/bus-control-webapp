import React, { useState, useEffect } from "react"
import "./modal.css"
import DATA from './data/data.json';

function Modal(props) {

    const run = (props.rowData["run"])
    const op_id = (props.rowData["op_id"])
    const bus_id = (props.rowData["bus_id"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

    const [toggleOff, setToggleOff] = useState(false) 
    
    useEffect(() => {
        fetch(toggleUrl)
            .then(response => {
                response.json()
            })
    }, [toggleOff, toggleUrl]);

    useEffect(() => {
        fetch(dataUrl)
            .then(response => {
                response.json()
            })
            .then(data => setData(data))
        console.log(data)
    }, [data, dataUrl])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {props.run} Bus {bus_id} Operator {op_id}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li>Predicted departure: {data.r_time}</li>
                            <li>Recomended departure: {data.a_time}</li>
                            <li>Intervals as scheduled: {data.s_hws}</li>
                            <li>Intervals as predicted: {data.p_hws}</li>
                            <li>Intervals as recommended: {data.r_hws}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">Fill or Cancel</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>Toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default Modal