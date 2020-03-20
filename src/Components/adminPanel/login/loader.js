import React from "react";
import logo from "../../../Assets/Images/logo8.png"
import "./index.css"


var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;


export default class Loader extends React.Component {
    render() {
        return (
            <div className="centerDiv" style={{ position: "absolute", height: screenHeight, width: screenWidth,background: "linear-gradient(45deg, #2e2565 30%, #682560 90%)" }}>
                <img src={logo} style={{height:"20%",width:"35%"}} alt="Loader" className="rotate" />
            </div>
        )
    }
}