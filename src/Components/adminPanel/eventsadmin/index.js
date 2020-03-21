import React from "react"
import { TextField, Button } from '@material-ui/core';
import firebase from "../../../database"
import { storage } from '../../../database'
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux";



var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;



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
      <div className="centerDiv" style={{ background: "linear-gradient(45deg, #c75f22 30%, #a0114c 90%)", height: screenHeight, width: "100%" }}>
        <div className="centerDiv" style={{ backgroundColor: "rgba(255,255,255,0.8)", height: screenHeight / 1.4, width: screenWidth / 2, borderRadius: 10 }}>
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
                style={{ width: 300 }}

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
              <Button style={{marginLeft:"2%"}} type="submit" variant="contained" color="primary" onClick={()=>this.props.history.push('/adminhomerecord')}>
                See videos
              </Button>
            </div>
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