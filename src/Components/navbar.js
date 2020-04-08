import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AppActions } from "../store/actions"
import { Navbar, Nav } from "react-bootstrap";



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
                {!this.props.adminn ?
                    < div >
                        <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, background: "linear-gradient(45deg, #133054 60%, #ba093f 90%)" }}>
                            <div style={{ height: 80, width: 150, paddingTop: 12 }}>
                                <p style={{ color: "#303f72", fontWeight: "bold", fontSize: 20 }} >Al Shifa Medical Center</p>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "black" }} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" >
                                    <Nav.Link href="/" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Home</Nav.Link>
                                    <Nav.Link href="/services" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Services</Nav.Link>
                                    <Nav.Link href="/event" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Events</Nav.Link>
                                    <Nav.Link href="/about" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>About</Nav.Link>
                                    <Nav.Link href="/contact" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    :

                    (
                        <div style={{ background: "linear-gradient(45deg, #a0114c 30%, #a0114c 90%)" }}>

                            <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, backgroundColor: "#1A416F" }}>
                                <p style={{ height: "50px", width: "150", fontWeight: "bold", color: "red" }}>Al Shifa Medical Center Admin Panel</p>
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