import React from "react"
import { TextField, Button } from '@material-ui/core';
import firebase from '../../../../database'
import { connect } from "react-redux";



var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth;



class Homeinteg extends React.Component{
constructor(){
    super()
    this.state={
        title:"",
        desc:""
    }
}

componentWillMount() {
    if (!this.props.adminn) {
        this.props.history.push('/admin')
    }
  
}

    _handleClick(){
          var data={
            title:this.state.title,
            desc:this.state.desc
          }
          firebase
          .database()
          .ref(`homedata`)
          .push(data)
          .then(response => {
                 alert("succeesfuuly add")
          })
          .catch(error => {
          alert(error)
          });
          
    }
    _handleChange(key, event) {
        this.setState({ [key]: event.target.value })
      }
    render(){
return(
    <div  className="centerDiv"  style={{background: "linear-gradient(45deg, #c75f22 30%, #a0114c 90%)", height: screenHeight , width:"100%" }}>
        <div className="centerDiv" style={{ backgroundColor: "rgba(255,255,255,0.8)", height: screenHeight / 2, width: screenWidth / 2, borderRadius: 10 }}>
          <div>
            <div style={{ textAlign: "center" }}>
              {/* <img src={TitleLogo} alt="Title" style={{ height: screenHeight / 10, width: screenWidth / 7 }} /> */}

            </div>
             <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5 style={{color:"red",fontFamily:"italic"}}>Home Integration</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                required
                onChange={this._handleChange.bind(this, "title")}
                label="Enter Title"
                variant="outlined"
                style={{ width: 300 }}
              />
            </div>
            <div style={{ marginTop: 20}}>
            <textarea 
                onChange={this._handleChange.bind(this, "desc")} style={{width:"100%",backgroundColor:"rgba(255,255,255,0.8)"}} placeholder="description"  />
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <Button type="submit" variant="contained" color="secondary" onClick={this._handleClick.bind(this)}>
                Add
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
export default connect(mapStateToProps, mapDispatch)(Homeinteg)