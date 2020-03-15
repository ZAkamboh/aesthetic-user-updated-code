import React from "react"
import { connect } from "react-redux";
import { AppActions } from "../../../store/actions"
import { TextField, Button } from '@material-ui/core';
import Background from "../../../Assets/Images/paper3.jpg"
//import firebase from "../../../database"
import "./index.css"

var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth
class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  componentWillMount() {
    const navbarRemove = true
    this.props.actionNavbar(navbarRemove)
  }

  _handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  _handleClick = () => {
    //  firebase
    //       .auth()
    //       .signInWithEmailAndPassword(this.state.email, this.state.password)
    //       .then(response => {
    //             var user=response.user.email
    //              localStorage.setItem("admin",user)    
    //              this.props.history.push("/adminhome");  
    //       })
    //       .catch(error => {
    //           alert(error.message);
    //       });   
    var logindata = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(logindata)
  }

  render() {
    return (

      <div className="centerDiv" style={{ backgroundImage: `url(${Background})`, height: screenHeight, width: screenWidth }}>
      <div className="centerDiv" style={{ backgroundColor:"rgba(17, 23, 118, 0.40)", height: screenHeight, width: screenWidth }}>
    
        <div className="centerDiv" style={{ backgroundColor: "rgba(255,255,255,0.8)", height: screenHeight / 2, width: screenWidth / 2, borderRadius: 10 }}>
          <div>
            <div style={{ textAlign: "center" }}>
              {/* <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} /> */}

            </div>
            {this.props.error && <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5>{this.props.error}</h5>
            </div>}
            <div style={{ marginTop: 20 }}>
              <TextField
                required
                onChange={this._handleChange.bind(this, "email")}
                id={!this.state.error ? "outlined-basic" : "outlined-basic-error"}
                label="Admin Email"
                variant="outlined"
                style={{ width: 300 }}
                error={this.state.emailError}
                helperText={this.state.emailError ? "Incorrect Entry" : ""}
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                required
                onChange={this._handleChange.bind(this, "password")}
                id="outlined-basic"
                type="password"
                label="Admin Password"
                variant="outlined"
                error={this.state.passwordError}
                style={{ width: 300 }}
                helperText={this.state.passwordError ? "Incorrect Entry" : ""}
              />
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <Button type="submit" variant="contained" color="secondary" onClick={this._handleClick.bind(this)}>
                Login
                      </Button>
            </div>
          </div>
        </div>
         {this.props.Loginn && this.props.history.push('/adminhome')} 
         </div>
      </div>
    )
  }

}
function mapState(state) {
console.log("login page",state.AppReducer)
  return {
    Loginn: state.AppReducer.login
  };
}
function mapDispatch(dispatch) {
  return {
    actionNavbar: payload => {
      dispatch(AppActions.actionNavbar(payload));
    },
    login: payload => {
      dispatch(AppActions.login(payload));
    }
  };
}
export default connect(
  mapState,
  mapDispatch
)(AdminLogin);