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
        else {
            this.props.clear()
        }
    }

    render() {
        return (
            <div className="centerDiv" style={{ backgroundImage: `url(${Background})`, height: screenHeight / 1.3, width: screenWidth }}>
            <div className="centerDiv" style={{background: "linear-gradient(45deg, #c75f22 30%, #a0114c 90%)", height: screenHeight / 1.3, width: screenWidth }}>
           
                <h1 style={{ color:"#ffffff", fontSize: "70px" }}>Al-Shifa-Medical-Center</h1>
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



