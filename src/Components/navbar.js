import React from 'react';
import { Link } from "react-router-dom";
import NavBar from 'react-responsive-menubar/lib/NavBar';
import logo from "../Assets/Images/flogo.jpg"
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
                        <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50,background: "linear-gradient(45deg, #133054 60%, #ba093f 90%)" }}>
                            {/* <Navbar.Brand href="#home"> */}
                            {/* <img src={""} alt="logo" style={{ height: 80, width: 150 }} /> */}
                            <div style={{height:80,width:150,paddingTop:12}}>
                            <p style={{color:"#303f72",fontWeight:"bold",fontSize:20}} >Al Shifa Medical Center</p>
                            </div>
                            <br></br>
        
                            
                            {/* </Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"black"}} />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="mr-auto" >

                                    <Link to="/" style={{ fontSize: 18, color: "red", marginLeft: 25,fontWeight:"bold" }}>Home</Link>
                                    <Link to="/services" style={{ fontSize: 18, color: "red", marginLeft: 25,fontWeight:"bold" }}>Services</Link>
                                    <Link to="/event" style={{ fontSize: 18, color: "red", marginLeft: 25 ,fontWeight:"bold"}}>Events</Link>
                                    <Link to="/contact" style={{ fontSize: 18, color: "red", marginLeft: 25 ,fontWeight:"bold"}}>Contact</Link>
                                    <Link to="/about" style={{ fontSize: 18, color: "red", marginLeft: 25,fontWeight:"bold" }}>About</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    :

                    (
                        <div style={{ background: "linear-gradient(45deg, #a0114c 30%, #a0114c 90%)" }}>

                            <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, backgroundColor: "#1A416F" }}>
                                {/* <Navbar.Brand href="#home"> */}
                                {/* <img src={logo} alt="logo" style={{ height: 80, width: 150 }} /> */}
                                <p style={{height:"50px",width:"150",fontWeight:"bold",color:"red"}}>Al-Shifa-Medical-Center</p>
                                {/* </Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Link to="/homeintegration" style={{ fontSize: 18, color: "#ffffff", marginLeft: 20 }}>Home</Link>
                                        <Link to="/adminabout" style={{ fontSize: 18, color: "#ffffff", marginLeft: 20 }}>About</Link>
                                        <Link to="/adminservices" style={{ fontSize: 18, color: "#ffffff", marginLeft: 20 }}>Services</Link>
                                        <Link to="/adminevents" style={{ fontSize: 18, color: "#ffffff", marginLeft: 20 }}>Events</Link>
                                        <Link to="/logout" style={{ fontSize: 18, color: "#ffffff", marginLeft: 20 }}>Logout</Link>
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