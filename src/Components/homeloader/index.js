import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import "./index.css"


export default class Loader2 extends React.Component {
    render() {
        return (
            <div className="loader" style={{ position: "absolute", width: "100%" }}>
                <Loader
                    type="TailSpin"
                    color="red"
                    height={200}
                    width={200}
                />
            </div>
        )
    }
}