import React from "react"
import { connect } from "react-redux";
import { AppActions } from "../../../store/actions"
import { TextField, Button } from '@material-ui/core';
import Background from "../../../Assets/Images/wall4.jpg"
//import firebase from "../../../database"
import "./index.css"
import Loader1 from "./loader"
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

      <div className="centerDivLogin" style={{ backgroundImage: `url(${Background})`, width:"100%", }}>
      <div className="centerDivLogin" style={{ width:"100%"}}>
    
        <div className="centerDivLogin" style={{ borderRadius: 50, }}>
          <div>
            <div style={{ textAlign: "center" }}>
              {/* <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} /> */}

            </div>
            {this.props.error && <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5>{this.props.error}</h5>
            </div>}
            <div style={{ marginTop: 20,backgroundColor:"white",borderRadius:20 }}>
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
            <div style={{ marginTop: 20,backgroundColor:"white",borderRadius:20  }}>
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
         {this.props.loader && <Loader1 />}

      </div>
    )
  }

}
function mapState(state) {
console.log("login page",state.AppReducer)
  return {
    Loginn: state.AppReducer.login,
    loader: state.AppReducer.loader,

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