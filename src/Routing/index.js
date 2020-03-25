import React from 'react';
import About from "../Components/aboutComponent"
import Contact from "../Components/contactComponent"
import Navbar from "../Components/navbar"
import Home from "../Components/homeComponent"
import Homedetail from "../Components/homeComponent/homedetail"
import Footer from "../Components/footer"
import Services from "../Components/servicesComponents"
import Events from "../Components/events";



import Adminabout from "../Components/adminPanel/aboutadmin"
import Adminaboutdata from "../Components/adminPanel/aboutadmindata"
import Adminhome from "../Components/adminPanel/adminHome"
import AdminLogin from "../Components/adminPanel/login"
import Logout from "../Components/adminPanel/login/logout"
import Homeinteg from "../Components/adminPanel/adminHome/adminHomeintegration"
import AdminHomedata from "../Components/adminPanel/adminHome/adminHomerecords"
import Service from "../Components/adminPanel/servicesadmin"
import Eventsadmin from "../Components/adminPanel/eventsadmin"
import Aboutdataadmin from "../Components/adminpaneldata/aboutdata"
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
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/event" component={Events} />


        <Route path="/admin" component={AdminLogin} />
        <Route path="/adminhome" component={Adminhome} />
        <Route path="/homeintegration" component={Homeinteg} />
        <Route path="/seeadminhomedata" component={AdminHomedata} />
        <Route path="/adminabout" component={Adminabout} />
        <Route path="/adminaboutdata" component={Adminaboutdata} />
        <Route path="/adminservices" component={Service} />
        <Route path="/adminevents" component={Eventsadmin} />
        <Route path="/adminaboutshowdata" component={Aboutdataadmin} />


        <Route path="/logout" component={Logout} />
        <Footer/>
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
