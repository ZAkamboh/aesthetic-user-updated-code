import React from "react"
import "./index.css"
import firebase from "../../database"
var screenHeight = window.screen.availHeight;

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        var values = [];
        firebase
            .database()
            .ref(`aboutdata`)
            .once("value", snap => {
                var data = snap.val();
                for (let keys in data) {
                    values.push({ ...data[keys], key: keys });
                }
                this.setState({ data: values });
            })
    }


    render() {
        return (
            <div style={{ height: "100%", width: "100%", background: "linear-gradient(45deg, #133054 60%, #3667a2 90%)",marginTop:90 }} className='player-wrapper'>
                <div className="childDiv" style={{height:"100%",paddingTop:30 }}>
                    {this.state.data.map((item, index) => {
                        return (
                            <div>
                                <h1 style={{ textAlign: "center", fontFamily: "italic",color:"#ffffff" }}>{item.title}</h1>
                                <p style={{ color: "#bbbcc1", fontWeight: "bold" }}>
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                    <div >
                        <h1 style={{ color: "#ffffff" }}>Dr Ambreen Khan</h1>
                        <h2 style={{ color: "#ffffff" }}>Director</h2>
                        <h2 style={{ color: "#ffffff" }}>Al Shifa Medical Center</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default About