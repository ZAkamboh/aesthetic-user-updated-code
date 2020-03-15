import React from "react";
import { connect } from 'react-redux'
import {AppActions} from "../../../../store/actions"


 class Logout extends React.Component {
  componentWillMount() {
    this.props.logout()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.logoutsuccess) {
      this.props.history.push("/");
    }
  }
  render() {
    return <div />;
  }
}


function mapState(state){
  return{
logoutsuccess:state.AppReducer.logoutsuccess
  }
}
function mapDispatch(dispatch){
  return{
      logout:()=>{
          dispatch(AppActions.logout())
      }
  }
}

export default connect(mapState,mapDispatch)(Logout) 