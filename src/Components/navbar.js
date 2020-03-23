import React from 'react';
import { Link } from "react-router-dom";
import NavBar from 'react-responsive-menubar/lib/NavBar';
import logo from "../Assets/Images/logo.png"
import { connect } from "react-redux";
import { AppActions } from "../store/actions"
import { Navbar, Nav, Image, NavDropdown, Form, FormControl } from "react-bootstrap";



class NavbarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin: ""
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
            <div>
                {/* <header style={{ background: "linear-gradient(45deg, #303f72 30%, #21CBF3 90%)" }}> */}
                {!this.props.adminn ?
                    < div >
                        {/* <div style={{ width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}> */}
                        {/* <NavBar
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
                        </NavBar> */}
                        <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, backgroundColor: "#0f2540" }}>
                            {/* <Navbar.Brand href="#home"> */}
                            <img src={logo} style={{ height: 80, width: 150 }} />
                            {/* </Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/" style={{fontSize:18,color:"#ffffff"}}>Home</Nav.Link>
                                    <Nav.Link href="/services" style={{fontSize:18,color:"#ffffff"}}>Services</Nav.Link>
                                    <Nav.Link href="/event" style={{fontSize:18,color:"#ffffff"}}>Events</Nav.Link>
                                    <Nav.Link href="/contact" style={{fontSize:18,color:"#ffffff"}}>Contact</Nav.Link>
                                    <Nav.Link href="/about" style={{fontSize:18,color:"#ffffff"}}>About</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    :

                    (
                        <div style={{ background: "linear-gradient(45deg, #a0114c 30%, #a0114c 90%)" }}>
                            {/* <NavBar
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
                    <Link to="/adminevents">Events</Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>

                    <Link to="/"></Link>
                    <Link to="/logout">Logout</Link>
                </NavBar> */}
                            <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, backgroundColor: "#1A416F" }}>
                                {/* <Navbar.Brand href="#home"> */}
                                <img src={logo} style={{ height: 80, width: 150 }} />
                                {/* </Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/services">Services</Nav.Link>
                                        <Nav.Link href="/event">Events</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    )
                }

            </div>
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
)(NavbarComponent);