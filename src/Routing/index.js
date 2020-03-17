import React from 'react';
import About from "../Components/aboutComponent"
import Contact from "../Components/contactComponent"
import Navbar from "../Components/navbar"
import Home from "../Components/homeComponent"
import Adminhome from "../Components/adminPanel/adminHome"
import AdminLogin from "../Components/adminPanel/login"
import Logout from "../Components/adminPanel/login/logout"
import Footer from "../Components/footer"
import Homeinteg from "../Components/adminPanel/adminHome/adminHomeintegration"
import Homedetail from "../Components/homeComponent/homedetail"

import createBrowserHistory from "history/createBrowserHistory";
import { Router,Route } from "react-router-dom";
import { connect } from "react-redux";
//import { AppActions } from "../../store/actions"

const customHistory = createBrowserHistory();

class Routing extends React.Component {
render(){
  return (
    <div>
      <Router history={customHistory}>
      {!this.props.navbar &&  <Navbar/> } 
        <Route exact path="/" component={Home} />
        <Route exact path="/homeDetail" component={Homedetail} />
        <Route path="/about" component={About} />
        <Route path="/footer" component={Footer} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/adminhome" component={Adminhome} />
        <Route path="/homeintegration" component={Homeinteg} />
        <Route path="/logout" component={Logout} />
      </Router>
    </div>
  );
}

}

function mapState(state) {

  return {
    navbar:state.AppReducer.navbar
  };
}
function mapDispatch(dispatch) {
  return {
  
  };
}
export default connect(
  mapState,
  mapDispatch
)(Routing);
