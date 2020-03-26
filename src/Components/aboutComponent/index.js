import React from "react"
import "./index.css"
import firebase from "../../database"
import { AppActions } from "../../store/actions"
import { connect } from "react-redux";
import Loader2 from "../homeloader"

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.props.aboutdata()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.aboutdataa) {
            this.setState({ data: nextProps.aboutdataa })
        }
    }


    render() {
        return (

            <div style={{ width: "100%", background: "linear-gradient(45deg, #133054 60%, #3667a2 90%)", marginTop: 120 }} className='player-wrapper'>
            {this.props.loader && <Loader2 />}
              
                <div className="childDiv" style={{ height: "100%", paddingTop: 30 }}>
                    {this.state.data.map((item, index) => {
                        return (
                            <div>
                                <h1 style={{ textAlign: "center", fontFamily: "italic", color: "#ffffff" }}>{item.title}</h1>
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


function mapStateToProps(state) {
console.log(state.AppReducer)
    return {
        loader: state.AppReducer.loader,
        aboutdataa: state.AppReducer.aboutdataa,
    }
}
function mapDispatch(dispatch) {
    return {
        aboutdata: () => {
            dispatch(AppActions.aboutdata());
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(About)