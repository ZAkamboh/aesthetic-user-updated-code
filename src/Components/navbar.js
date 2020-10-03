import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppActions } from "../store/actions"
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Assets/Images/navbarLogoNew.jpg"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
//material ui App Bar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItemText from "@material-ui/core/ListItemText";

export default function SwipeableTemporaryDrawer(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0);
  
    const [state, setState] = React.useState({
      right: false,
    });
    const [expand1Icon, setExpand1Icon] = useState(true);
    const [expand2Icon, setExpand2Icon] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        if (open) {
          setDrawerOpen(true);
        }
        else {
          setDrawerOpen(false);
        }
        setState({ ...state, [anchor]: open });
      };
      
  const Mobilelist = (anchor) => (
    <div
      role="presentation"
    >
      <List style={{ padding: 10 }}>

            <ListItemText>
zubair
        
            </ListItemText>

    


      </List>
    </div>
  );
        return (
            <div>
                    {/* < div >
                        <Navbar collapseOnSelect expand="sm" variant="dark" fixed="top" style={{ marginBottom: 50, backgroundColor:"#ffffff" }}>
                            <div style={{ height: 80, width: 150, paddingTop: 12 }}>
                                       <img src={Logo} height="50px" width="200px" alt="logo" />
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "black" }} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto" >
                                    <Link to="/" className="homeLink" style={{ fontSize: 18, color: "red", marginLeft: 100, fontWeight: "bold" }}>Home</Link>
                                    <Link to="/services" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Services</Link>
                                    <Link to="/event" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Events</Link>
                                    <Link to="/about" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>About</Link>
                                    <Link to="/contact" style={{ fontSize: 18, color: "red", marginLeft: 25, fontWeight: "bold" }}>Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                     
                    </div> */}
                     <AppBar
        fixed="top"
        className="appBar"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Toolbar>

          <div  style={{ marginTop: "10px", cursor: "pointer" }}>
            <img className="protonLogoAppbar" onClick={() => props.history.push('/')} src={Logo} alt="logo" height="40px" width="215px" />
          </div>


          <Typography variant="h6">
zubair
          </Typography>
    

          <IconButton edge="start" >
            {(!drawerOpen && (
              <MenuIcon
              className="appMenuIcon"
                onClick={toggleDrawer("right", true)}
                style={{ color: "#c0c4ca", cursor: "pointer" }}
              />
            )) || (
                <CloseIcon
                  style={{ color: "#c0c4ca", cursor: "pointer" }}
                />
              )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <React.Fragment key={"top"}>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {/* {list('right')} */}

          {/* mobile menu */}
          <div >
            {["MENU"].map((anchor) => (
              <div>
                {Mobilelist(anchor)}
              </div>

            ))}
          </div>

          {/* mobile menu end */}

          
        </SwipeableDrawer>
      </React.Fragment>
            </div>
        )
    
}
