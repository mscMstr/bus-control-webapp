import React, { useState, useEffect } from "react"
import "./modal.css"
import DATA from './data/data.json';

export function ModalNavyPier(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

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
                            <li>arrives in: {data.prdatm_np}</li>
                            <li>normal departure: {data.schdtm_np}</li>
                            <li>in relief: {data.relieved}</li>
                            <li>ebus?: {data.ebus}</li>
                            <li>normal headway: {data.sh_np}</li>
                            <li>pred. headway: {data.h_np}</li>
                            <li>pred. next_headway: {data.fh_np}</li>
                            <li>hold/move up by: {data.rec_np}</li>
                            <li>confirmed: {data.confirm_np}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">fill-cancel</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}


export function ModalRed(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

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
                            <li>normal headway: {data.sh_np}</li>
                            <li>hold back: {data.rec_red}</li>
                            <li>confirmed: {data.confirm_brown}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">fill-cancel</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}

export function ModalBrown(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

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
                            <li>normal headway: {data.sh_np}</li>
                            <li>hold back: {data.rec_brown}</li>
                            <li>confirmed: {data.confirm_brown}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">fill-cancel</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}

export function ModalBlue(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(run)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(run)

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
                            <li>normal headway: {data.sh_np}</li>
                            <li>hold back: {data.rec_blue}</li>
                            <li>confirmed: {data.confirm_blue}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        <p className="buttonTitle">fill-cancel</p>
                        <button onClick={() => setToggleOff(!toggleOff)}>toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}
