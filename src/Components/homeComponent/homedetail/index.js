import React from "react"
import './index.css'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


var screenHeight = window.screen.availHeight;


class Homedetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            scrolled: false
        }
    }
    componentWillMount() {
        var detaildata = this.props.location.state.item
        this.setState({ detail: detaildata })
    }
    gotoTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        window.onscroll = function () {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        }.bind(this)
        return (
            <div style={{ height: screenHeight, marginTop: "1%", width: "100%", background: "linear-gradient(45deg, #2e2565 30%, #682560 90%)" }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <div className="title" style={{ height: screenHeight / 6 }}>
                        <h1 style={{ color: "#ffffff" }}>{this.state.detail.title}</h1>
                    </div>
                    <div className="para" style={{ height: screenHeight / 2 }}>
                        <p style={{ color: "black", fontWeight: "bold" }}>{this.state.detail.desc}</p>
                    </div>
                    <div id="myBtn" style={{ display: this.state.scrolled ? "block" : "none" }} onClick={() => this.gotoTop()}>
                        <ArrowUpwardIcon />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homedetail;