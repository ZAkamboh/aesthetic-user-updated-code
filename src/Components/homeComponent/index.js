import React from "react"
import "./index.css"
import { connect } from "react-redux";
import Homecopy from "./homecopy"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  render() {
    return (
      <div  style={{height:"100%",width:"100%"}}>
        <Homecopy history={this.props.history}/>
      </div>
    )

  }
}



function mapState(state) {
  return {
    
  };
}
function mapDispatch(dispatch) {
  return {

  };
}
export default connect(
  mapState,
  mapDispatch
)(Home);