import React from 'react';
import { Link } from "react-router-dom";
import NavBar from 'react-responsive-menubar/lib/NavBar';
import logo from "../Assets/Images/logo8.png"
import { connect } from "react-redux";
import { AppActions } from "../store/actions"



class Navbar extends React.Component {
constructor(props){
    super(props)
    this.state={
        admin:""
    }

    this.props.admin()
}
   
    state = { showSideNav: false }


    handleSideNavToggle = () => {
        this.setState((currentState) => {
            return { showSideNav: !currentState.showSideNav }
        })
    }
    render() {
        return (
            <header style={{ background: "linear-gradient(45deg, #303f72 30%, #21CBF3 90%)" }}>
                    {!this.props.adminn ? 
                    <div style={{ width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                    <NavBar
                        handleSideNavToggle={this.handleSideNavToggle}
                        showSideNav={this.state.showSideNav}
                        logoStyles={{ height: "75px", width: "77%" }}
                        navBarStyles={{ color: "red" }}
                        linkStyles={{ color: "red", fontWeight: "bold" }}
                        logo={logo}

                    >

                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/event">Events</Link>
                        <Link to="/contact">Contact</Link>

                        <Link to="/"></Link>

                        <Link to="/"></Link>

                        <Link to="/"></Link>

                        <Link to="/"></Link>

                        <Link to="/"></Link>
                        <Link to="/"></Link>
                    </NavBar>
                    </div>
                    :
                    
                    (
                        <div style={{background: "linear-gradient(45deg, #a0114c 30%, #a0114c 90%)"}}>
                    <NavBar
                    handleSideNavToggle={this.handleSideNavToggle}
                    showSideNav={this.state.showSideNav}
                    logoStyles={{ height: "75px", width: "77%" }}
                    navBarStyles={{ color: "red" }}
                    linkStyles={{ color: "white", fontWeight: "bold" }}
                    logo={logo}

                >

                    <Link to="/homeintegration">Home</Link>
                    <Link to="/adminabout">About</Link>
                    <Link to="/adminservices">Services</Link>
                    <Link to="/">Contact</Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>
                    <Link to="/logout">Logout</Link>
                </NavBar>
                </div>
                    )
    }
                
            </header>
        )
    }
}
function mapState(state) {
    return {
      adminn: state.AppReducer.admin,
    };
  }
  function mapDispatch(dispatch) {
    return {
        admin: () => {
            dispatch(AppActions.admin());
          },
      };
  }
  export default connect(
    mapState,
    mapDispatch
  )(Navbar);