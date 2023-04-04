import React, { useEffect } from "react"
import "./modal.css"

function Modal({closeModal}) {

    // Using useEffect for single rendering
    const toggleOff = useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("http://127.0.0.1:5000/edit")
    }, []);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> x </button>
                </div>
                <div className="title">
                    <h1>More Actions</h1>
                </div>
                <div className="body">
                    <div className="bodySection">
                        <p>Upload picture of bus ticket (whatever it is called)</p>
                        <button>Upload Image</button>
                    </div>
                    <div className="bodySection">
                        <p>Toggle Off</p>
                        <button onClick={() => toggleOff}>Toggle</button>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>done</button>
                </div>
            </div>
        </div>
    )
}

export default Modal