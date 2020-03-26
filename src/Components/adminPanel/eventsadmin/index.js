import React from "react"
import { TextField, Button } from '@material-ui/core';
import firebase from "../../../database"
import { connect } from "react-redux";
import background from "../../../Assets/Images/wall6.jpg"






class Eventsadmin extends React.Component {
  constructor() {
    super()
    this.state = {
      desc: "",
      url: "",
    }
  }

  componentWillMount() {
    if (!this.props.adminn) {
      this.props.history.push('/admin')
    }

  }




  _handleClick() {
    var data = {
      desc: this.state.desc,
      url: this.state.url,
    }
    if (data.url === "") {
      alert("Enter Video url")
    }
    else if (data.desc === "") {
      alert("desc field is required")
    }
  
    else {
      firebase
        .database()
        .ref(`Eventsdata`)
        .push(data)
        .then(response => {
          alert("successfully add")
        })
        .catch(error => {
          alert(error)
        });
    }


  }
  _handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }
  render() {
    return (
      <div className="centerDivLogin" style={{backgroundImage: `url(${background})`, width: "100%" }}>
          <div>
            <div style={{ textAlign: "center" }}>
              {/* <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} /> */}

            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5 style={{ color: "red", fontFamily: "italic" }}>Events Integration</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                onChange={this._handleChange.bind(this, "url")}
                label="Enter Video Url"
                variant="outlined"
                style={{ width: 300,backgroundColor:"#ffffff" }}

              />
            </div>
      
            <div style={{ marginTop: 20 }}>
              <textarea
                onChange={this._handleChange.bind(this, "desc")} style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.8)" }} placeholder="description" />
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <Button type="submit" variant="contained" color="secondary" onClick={this._handleClick.bind(this)}>
                Add
              </Button>
              <Button style={{marginLeft:"2%"}} type="submit" variant="contained" color="primary" onClick={()=>this.props.history.push('/admineventdata')}>
                show videos
              </Button>
            </div>
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


  }
}
export default connect(mapStateToProps, mapDispatch)(Eventsadmin)