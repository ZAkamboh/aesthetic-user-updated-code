import React from "react";
import About from "../Components/aboutComponent";
import Contact from "../Components/contactComponent";
import Navbar from "../Components/navbar";
import Home from "../Components/homeComponent";
import Homedetail from "../Components/homeComponent/homedetail";
import Footer from "../Components/footer";
import Services from "../Components/servicesComponents";
import Events from "../Components/events";

import createBrowserHistory from "history/createBrowserHistory";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import GlobalStyles from "Assets/create-global-styles";

const customHistory = createBrowserHistory();

class Routing extends React.Component {
  render() {
    return (
      <div>
        <Router history={customHistory}>
          <GlobalStyles />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/homeDetail" component={Homedetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/event" component={Events} />
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  return {
    navbar: state.AppReducer.navbar,
  };
}
function mapDispatch(dispatch) {
  return {};
}
export default connect(mapState, mapDispatch)(Routing);
