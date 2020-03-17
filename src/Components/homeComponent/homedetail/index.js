import React from "react"
import './index.css'

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
            <div style={{ height: screenHeight, width: "100%", backgroundColor: "red" }}>

                <div style={{height:screenHeight/6,backgroundColor:"blue"}}>
                    <h1>{this.state.detail.title}</h1>
                </div>
                <div className="para">
                    <p>{this.state.detail.desc}</p>
                </div>



            </div>
        )
    }
}

export default Homedetail;