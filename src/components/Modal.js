import React, { useState, useEffect } from "react"
import "./modal.css"

function Modal(props) {

    const run = (props.rowData["run"])
    const [data, setData] = useState(null)
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/data".concat(run)

    const [toggleOff, setToggleOff] = useState(false) 
    
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(toggleUrl)
            .then(response => {
                response.json()
            })
    }, [toggleOff]);

    useEffect(() => {
        fetch(dataUrl)
            .then(response => {
                response.json()
            })
            .then(data => setData(data))
        console.log(data)
    }, [])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => props.closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>{props.run}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li>Recomended Departure Time: {props.rowData["a_time"]}</li>
                            <li>Predicted Time: {props.rowData["r_time"]}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">Toggle Off</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>Toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}

export default Modal