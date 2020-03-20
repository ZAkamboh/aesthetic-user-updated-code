import React from "react"
import "./index.css"
import firebase from "../../database"
var screenHeight = window.screen.availHeight;

class About extends React.Component {
    constructor(){
        super()
        this.state={
               data:[]
        }
    }

    componentWillMount() {
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


    render() {
        return (
            <div style={{ height: "100%", width: "100%",background: "linear-gradient(45deg, #2e2565 30%, #682560 90%)" }} className='player-wrapper'>
                <div className="childDiv" style={{height:screenHeight/1}}>
                {this.state.data.map((item,index)=>{
                           return(
                            <div>
                <h1 style={{textAlign:"center",fontFamily:"italic"}}>{item.title}</h1>
                            <p style={{color:"black",fontWeight:"bold"}}>
                            {item.desc}
                            </p>
    
    
    
                       </div> 
                           )
                       })}
         
                   <div >
                          <h1 style={{color:"red"}}>Dr Ambreen Khan</h1>
                          <h2 style={{color:"red"}}>Director</h2>
                          <h2 style={{color:"red"}}>Al Shifa Medical Center</h2>
                   </div>
                </div>
            </div>
        )
    }
}

export default About