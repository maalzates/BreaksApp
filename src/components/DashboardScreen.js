import React, { useState } from 'react'


const requestsQueue = [
    "Tai"
]


const DashboardScreen = () => {



    const [state, setState] = useState(requestsQueue)

    const handleRequest = () => {
        setState([...state, "New Request"]);
        document.getElementById("reqButton").style.display ="none"
        document.getElementById("startButton").style.display ="block";
        document.getElementById("holdButton").style.display ="block";
    }

    const handleStartBreak = () => {
        document.getElementById("startButton").style.display ="none";
        document.getElementById("holdButton").style.display ="none";
        document.getElementById("cancelButton").style.display ="none";
        document.getElementById("backButton").style.display ="block";
    }
    

    const handleHold = () => {
        document.getElementById("startButton").style.display ="none";
        document.getElementById("holdButton").style.display ="none";
        document.getElementById("startButton").style.display ="block";
        document.getElementById("cancelButton").style.display ="block";
        console.log("Request on Hold")
    }
    
    const handleCancel = () => {
        document.getElementById("startButton").style.display ="none";
        document.getElementById("cancelButton").style.display ="none";
        document.getElementById("reqButton").style.display ="block";

    }
    

    const handleBack = () => {
        document.getElementById("backButton").style.display ="none";
        document.getElementById("reqButton").style.display ="block"
    }
    
    
    
    return (
        <div className="container">
            <h1>DashboardScreen</h1>
            <ul> 
                    {
                    state.map((request => <li> {request} </li>))
                    }
            </ul>
            <button id="reqButton" className="btn btn-primary" onClick={handleRequest}>Request a Break!</button>
            <button style={{display: 'none'}} id="startButton" className="btn btn-success" onClick={handleStartBreak}>Start Break</button>
            <button style={{display: 'none'}} id="holdButton" className="btn btn-warning" onClick={handleHold}>Hold</button>
            <button style={{display: 'none'}} id="cancelButton" className="btn btn-danger" onClick={handleCancel}>Cancel Request</button>
            <button style={{display: 'none'}} id="backButton" className="btn btn-dark" onClick={handleBack}>Back</button>
        </div>
    )
}

export default DashboardScreen
