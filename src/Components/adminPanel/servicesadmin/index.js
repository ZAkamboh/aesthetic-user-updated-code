import React from "react"
import { TextField, Button } from '@material-ui/core';
import firebase from "../../../database"
import { storage } from '../../../database'
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux";
import background from "../../../Assets/Images/wall6.jpg"

class Service extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      desc: "",
      file: null,
      url: "",
      progress: '',
    }
  }

  componentWillMount() {
    if (!this.props.adminn) {
      this.props.history.push('/admin')
    }

  }
  upload() {

    const { file } = this.state
    const uploadTask = storage.ref(`images/${file.name}`).put(file)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({ progress });

    },
      (error) => {
        console.log(error)
      },

      () => {
        storage.ref('images').child(file.name).getDownloadURL().then(url => {
          console.log(url)
          this.setState({ url: url }, () => {
            console.log(this.state.url);
          })

        })

      })

  }



  _handleClick() {
    var data = {
      title: this.state.title,
      desc: this.state.desc,
      url: this.state.url,
    }
    if (data.title === "") {
      alert("title field is required")
    }
    else if (data.desc === "") {
      alert("desc field is required")
    }
    else if (data.url === "") {
      alert("please upload any picture")
    }
    else {
      firebase
        .database()
        .ref(`servicedata`)
        .push(data)
        .then(response => {
          alert("successfully add")
          this.props.history.push("/adminhome")
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
      <div className="centerDivLogin" style={{backgroundImage: `url(${background})`,  width: "100%",marginTop:70 }}>
          <div>
            <div style={{ textAlign: "center" }}>
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5 style={{ color: "red", fontFamily: "italic" }}>Service Integration</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                onChange={this._handleChange.bind(this, "title")}
                placeholder="Enter Title"
                variant="outlined"
                style={{ width: 300,backgroundColor:"#ffffff" }}

              />
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                className=""
                type="file"
                placeholder="upload image"
                onChange={e =>
                  this.setState({ file: e.target.files[0] }, () => {
                
                  })
                }

              />
              <div style={{ marginTop: 20 }}>
                <button
                  onClick={this.upload.bind(this)}
                  className="btn btn-success mx-auto"
                >
                  upload image
          </button>
              </div>
              <div style={{ marginTop: 20 }}>
                <LinearProgress variant="determinate" value={this.state.progress} color="secondary" />
              </div>

            </div>
            <div style={{ marginTop: 20 }}>
              <textarea
                onChange={this._handleChange.bind(this, "desc")} style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.8)" }} placeholder="description" />
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <Button type="submit" variant="contained" color="secondary" onClick={this._handleClick.bind(this)}>
                Add
              </Button>
              <Button style={{marginLeft:"2%"}} type="submit" variant="contained" color="primary" onClick={()=>this.props.history.push('/adminservicedata')}>
                show Services data
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
export default connect(mapStateToProps, mapDispatch)(Service)