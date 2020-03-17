import React from "react"
import './index.css'

import Footer from "../../footer"

var screenHeight = window.screen.availHeight;


class Homedetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}

        }
    }
    componentWillMount() {
        var detaildata = this.props.location.state.item
        this.setState({ detail: detaildata })
    }
    render() {
        return (
            <div style={{ height: screenHeight, width: "100%", background: "linear-gradient(45deg, #303f72 30%, #21CBF3 90%)" }}>
                <div className="container" style={{ height: "100%", width: "100%", backgroundColor: "red", backgroundImage: `url(${this.state.detail.url})` }}>
                    <div className="title" style={{ height: screenHeight / 6 }}>
                        <h1 style={{ color: "#ffffff" }}>{this.state.detail.title}</h1>
                    </div>
                    <div className="para" style={{ height: screenHeight / 2 }}>
                        <p style={{ color: "black", fontWeight: "bold" }}>{this.state.detail.desc}</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Homedetail;