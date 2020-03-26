import React from "react"
import { TextField, Button } from '@material-ui/core';
import firebase from '../../../../database'
import { storage } from '../../../../database'
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux";
import {AppActions} from "../../../../store/actions"
import background from "../../../../Assets/Images/wall6.jpg"



var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;



class Homeinteg extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      desc: "",
      file: null,
      url: "",
      progress: '',
      url2:[]
    }

  }

  componentWillMount() {
    if (!this.props.adminn) {
      this.props.history.push('/admin')
    }
    else{
      this.props.fetchhomedata();

    }
  }

  componentWillReceiveProps(nextprops){
   // this.setState({url2:nextprops.homedata})
   
   for (var i=0;i<nextprops.homedata.length;i++){
             //  this.setState({url2:[nextprops.homedata[i].url]})
            //   array=[nextprops.homedata[i].url]
            //  // console.log(array)
   }
  }

  upload() {
if(this.state.file ===this.state.url2){
alert("this image is already uploaded plz select another")
 
}
else{
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
      
      this.setState({ url: url })

    })

  })
}
   

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
    else if (data.url === "") {
      alert("please upload any picture")
    }
    else {
      firebase
        .database()
        .ref(`homedata`)
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
      <div className="centerDivLogin" style={{backgroundImage: `url(${background})`, height: screenHeight, width: "100%" }}>
          <div>
            <div style={{ textAlign: "center" }}>
              {/* <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} /> */}

            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5 style={{color:"red", fontFamily: "italic" }}>Home Integration</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                onChange={this._handleChange.bind(this, "title")}
                label="Enter Title"
                variant="outlined"
                style={{ width: 300 ,backgroundColor:"#ffffff"}}

              />
            </div>
            <div style={{ marginTop: 20 }}>
              <input
                className=""
                type="file"
                placeholder="upload image"
                onChange={e =>
                  this.setState({ file: e.target.files[0] }, () => {
                    console.log(this.state.file);
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
              <Button style={{marginLeft:"2%"}}  variant="contained" color="primary" onClick={()=>this.props.history.push("/adminhomedata")}>
                Home Records
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
    homedata:state.AppReducer.homedata
  }
}
function mapDispatch(dispatch) {
  return {
    fetchhomedata: () => {
      dispatch(AppActions.fetchhomedata());
    }

  }
}
export default connect(mapStateToProps, mapDispatch)(Homeinteg)