import React, { useState, useEffect } from "react"
import "./modal.css"
import DATA from './data/data.json';

function Modal(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    // const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

    const [toggleOff, setToggleOff] = useState(false) 

    useEffect(() => {
        DATA.map(bus => (
            //console.log(bus.run);
            bus.run == run 
                ? setData(bus)
                : null
        ))
    }, []);
    // useEffect(() => {
    //     fetch(toggleUrl)
    //         .then(response => {
    //             response.json()
    //         })
    // }, [toggleOff, toggleUrl]);

    // useEffect(() => {
    //     fetch(dataUrl)
    //         .then(response => {
    //             response.json()
    //         })
    //         .then(data => setData(data))
    //     console.log(data)
    // }, [data, dataUrl])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>Run {rid} Bus {vid} Operator {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li>in relief: {data.relieved}</li>
                            <li>destination: {data.pattern}</li>
                            <li>ebus?: {data.ebus}</li>
                            <li>schd. hw: {data.sh_np}</li>
                            <li>pred. hw: {data.h_np}</li>
                            <li>pred. next_hw: {data.fh_np}</li>
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