import React from "react"
import { AppActions } from "../../../store/actions"
import { connect } from "react-redux";
import Background from "../../../Assets/Images/paper3.jpg"
import "./index.css"
var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth



class Adminhome extends React.Component {
    componentWillMount() {
        if (!this.props.adminn) {
            this.props.history.push('/admin')
        }
       
    }

    render() {
        return (
            <div className="centerDiv" style={{ backgroundImage: `url(${Background})`, height: screenHeight / 1.4, width: screenWidth }}>
                <div className="centerDiv" style={{ backgroundColor: "rgba(255,255,255,0.8)", height: screenHeight / 3, width: screenWidth / 2, borderRadius: 10 }}>

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



