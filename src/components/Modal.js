import React, { useState, useEffect } from "react"
import "./modal.css"
import DATA from './data/data.json';

export function ModalNavyPier(props) {

    const rid = (props.rowData["rid"])
    const oid = (props.rowData["oid"])
    const vid = (props.rowData["vid"])
    const [data, setData] = useState([])
    const toggleUrl = "ttps://bus-control-web-demo.ue.r.appspot.com/bus/toggleOff/".concat(rid)
    const dataUrl = "https://bus-control-web-demo.ue.r.appspot.com/bus/top/3"

    const [toggleOff, setToggleOff] = useState(false) 

    // useEffect(() => {
    //     DATA.map(bus => (
    //         //console.log(bus.run);
    //         bus.rid == rid 
    //             ? setData(bus)
    //             : null
    //     ))
    // }, []);
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
                    <h1>Run {rid} Bus {vid} Operator {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li><strong>arrives in:</strong> {data.prdatm_np}</li>
                            {/* <li>normal departure: {data.schdtm_np}</li> */}
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>ebus?:</strong>  {data.ebus}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>pred. headway:</strong>  {data.h_np}</li>
                            <li><strong>pred. next headway:</strong>  {data.fh_np}</li>
                            <li><strong>hold/move up by:</strong>  {data.rec_np}</li>
                            <li><strong>confirmed:</strong>  {data.conf_np}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={() => setToggleOff(!toggleOff)}>confirm</button>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={() => setToggleOff(!toggleOff)}>fill/cancel</button>
                    </div>
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
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(rid)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(rid)

    const [toggleOff, setToggleOff] = useState(false) 

    // useEffect(() => {
    //     DATA.map(bus => (
    //         //console.log(bus.run);
    //         bus.rid === rid 
    //             ? setData(bus)
    //             : null
    //     ))
    // }, [rid]);
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
                    <h1>Run {rid} Bus {vid} Operator {oid}</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <ul>
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>hold back:</strong> {data.rec_red}</li>
                            <li><strong>confirmed:</strong> {data.conf_red}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={() => setToggleOff(!toggleOff)}>confirm</button>
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
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(rid)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(rid)

    const [toggleOff, setToggleOff] = useState(false) 

    useEffect(() => {
        DATA.map(bus => (
            //console.log(bus.run);
            bus.rid == rid 
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
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>hold back:</strong> {data.rec_brown}</li>
                            <li><strong>confirmed:</strong> {data.conf_brown}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={() => setToggleOff(!toggleOff)}>confirm</button>
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
    const toggleUrl = "http://127.0.0.1:5000/bus/toggleOff/".concat(rid)
    const dataUrl = "http://127.0.0.1:5000/bus/".concat(rid)

    const [toggleOff, setToggleOff] = useState(false) 

    useEffect(() => {
        DATA.map(bus => (
            //console.log(bus.run);
            bus.rid == rid 
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
                            <li><strong>in relief:</strong> {data.relieved}</li>
                            <li><strong>normal headway:</strong>  {data.sh_np}</li>
                            <li><strong>hold back:</strong> {data.rec_blue}</li>
                            <li><strong>confirmed:</strong> {data.conf_blue}</li>
                        </ul>
                    </div>
                    <div className="bodySection">
                        {/* <p className="buttonTitle"></p> */}
                        <button onClick={() => setToggleOff(!toggleOff)}>confirm</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}
