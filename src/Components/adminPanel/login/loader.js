import React from "react";
import "./index.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;


export default class Loader1 extends React.Component {
    render() {
        return (
            <div className="centerDiv" style={{ position: "absolute", height: screenHeight, width: screenWidth }}>
                <Loader
                    type="TailSpin"
                    color="red"
                    height={200}
                    width={200}
                //3 secs

                />
            </div>
        )
    }
}