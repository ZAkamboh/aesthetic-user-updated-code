import React from "react"
import { AppActions } from "../../../store/actions"
import { connect } from "react-redux";
import { TextField, Button } from '@material-ui/core';
import firebase from "../../../database"
import background from "../../../Assets/Images/wall6.jpg"
import { Link } from "react-router-dom";

class Adminabout extends React.Component {
    constructor(){
        super()
        this.state={
            title:"",
            desc:"",
            data:""
        }
    }
    componentWillMount() {
        if (!this.props.adminn) {
            this.props.history.push('/admin')
        }else{
            var values = [];
            firebase
                .database()
                .ref(`aboutdata`)
                .once("value", snap => {
                    var data = snap.val();
                    for (let keys in data) {
                        values.push({ ...data[keys], key: keys });
                    }
                    this.setState({ data: values });
                })
        }
       
    }
    _handleClick(){
          var data={
              title:this.state.title,
              desc:this.state.desc
          }
          if (data.title === "") {
            alert("title field is required")
          }
          else if (data.desc === "") {
            alert("desc field is required")
          }
          else {
              if(this.state.data.length >0){
                   alert("you have already add about data on home page.if you want add another about on home page so please delete first home about data")
              }
              else{
                firebase
                .database()
                .ref(`aboutdata`)
                .push(data)
                .then(response => {
  
                  this.props.history.push('/adminhome')
                })
                .catch(error => {
                  alert(error)
                });
              }
          
          }
    }
    _handleChange(key, event) {
        this.setState({ [key]: event.target.value })
      }
    render() {
      
        return (
            <div className="centerDivLogin" style={{backgroundImage: `url(${background})`, width:"100%"}}>
          <div>
           
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <h5 style={{ color: "red", fontFamily: "italic" }}>About Integration</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <TextField
                onChange={this._handleChange.bind(this, "title")}
                label="Enter Title"
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
              <Button style={{marginLeft:"2%"}} type="submit" variant="contained" color="primary" onClick={()=>this.props.history.push('/adminaboutshowdata')}>
                See Your About
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

        clear: () => {
            dispatch(AppActions.clear());
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Adminabout)



