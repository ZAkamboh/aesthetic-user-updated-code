import React from "react"
import "./index.css"
import  Homechild from "./home"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }
  render() {
    return (
      <div  style={{height:"100%",width:"100%"}}>
        <Homechild history={this.props.history}/>
      </div>
    )

  }
}


export default Home