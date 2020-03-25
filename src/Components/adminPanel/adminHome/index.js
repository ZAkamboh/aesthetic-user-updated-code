import React from "react"
import { AppActions } from "../../../store/actions"
import { connect } from "react-redux";
import Background from "../../../Assets/Images/wall4.jpg"
import "./index.css"
var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth



class Adminhome extends React.Component {

    componentWillMount() {
        if (!this.props.adminn) {
            this.props.history.push('/admin')
        }
        else {
            this.props.clear()
        }
    }

    render() {
        return (
            <div className="adminHome" style={{ backgroundImage: `url(${Background})`, width: "100%" ,marginTop:90}}>
                <div style={{width:"100%",height:screenHeight/1.3,textAlign:"center",paddingTop:200}}>

                    <h1 style={{ color: "#ffffff", fontSize: "70px" }}>Al-Shifa-Medical-Center</h1>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adminn: state.AppReducer.admin,
    }
}
function mapDispatch(dispatch) {
    return {

        clear: () => {
            dispatch(AppActions.clear());
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Adminhome)



