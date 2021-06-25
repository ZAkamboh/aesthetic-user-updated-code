import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, Media } from "shared-components";
import { Container, Col } from "react-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import LogoURL from "../Assets/Images/logo.png";
import { gilroySemibold } from "shared-components/fonts";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EventIcon from "@material-ui/icons/Event";
import ContactsIcon from "@material-ui/icons/Contacts";
import PeopleIcon from "@material-ui/icons/People";
import HealingIcon from "@material-ui/icons/Healing";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const urlParam = window.location.pathname;
  console.log("Path Name", urlParam);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MobMenuWrapper>
        <Link to="/">
          <MobMenuItem className={urlParam === "/" ? "active" : ""}>
            <HomeIcon />
            Home
          </MobMenuItem>
        </Link>
        <Divider />
        <Link to="/services">
          <MobMenuItem className={urlParam === "/services" ? "active" : ""}>
            <LocalHospitalIcon />
            Services
          </MobMenuItem>
        </Link>
        <Divider />
        <Link to="/event">
          <MobMenuItem className={urlParam === "/event" ? "active" : ""}>
            <EventIcon />
            Events
          </MobMenuItem>
        </Link>
        <Divider />
        <Link to="/about">
          <MobMenuItem className={urlParam === "/about" ? "active" : ""}>
            <PeopleIcon />
            About
          </MobMenuItem>
        </Link>
        <Divider />
        <Link to="/contact">
          <MobMenuItem className={urlParam === "/contact" ? "active" : ""}>
            <ContactsIcon />
            Contact
          </MobMenuItem>
        </Link>
        <Divider />
        <Link to="/book-appointment">
          <MobMenuItem
            className={urlParam === "/book-appointment" ? "active" : ""}
          >
            <HealingIcon />
            Book Appointment
          </MobMenuItem>
        </Link>
        <Divider />
      </MobMenuWrapper>
    </div>
  );
  return (
    <Wrapper>
      <AppBar
        fixed="top"
        className="appBar"
        style={{ backgroundColor: "#ffffff95" }}
      >
        <Container>
          <NavbarWrapper>
            <Col lg={4}>
              <Logo src={LogoURL} alt="Al-Shifa Logo" />
            </Col>
            <Col lg={8}>
              <NabarMenus>
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/services">Services</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/event">Events</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/about">About</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contact">Contact</Link>
                </MenuItem>
                <BookAppoint>
                  <Link to="/book-appointment">Book an Appointment</Link>
                </BookAppoint>
              </NabarMenus>
            </Col>
          </NavbarWrapper>
        </Container>
        <MobileNavbar>
          <Logo src={LogoURL} alt="Al-Shifa Logo" />
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon />
          </Button>
        </MobileNavbar>
        <React.Fragment>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
      </AppBar>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .MuiDrawer-paper {
    width: 70%;
  }
`;
const Logo = styled.img`
  height: 50px;
  ${Media("xlscreens")} {
    height: 3.64vw;
  }
`;
const MobileNavbar = styled.div`
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button:focus {
    outline: none;
  }
  img {
    margin-left: 20px;
  }
  ${Media("xlscreens")} {
    display: none;
  }
`;
const NavbarWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  backgroundcolor: "#ffffff95";
  ${Media("xlscreens")} {
    height: 4vw;
  }
  ${Media("tablet")} {
    display: none;
  }
`;
const NabarMenus = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 16px;
  font-family: ${gilroySemibold};
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colors.secondaryColor};
    height: inherit;
    display: flex;
    align-items: center;
  }
  &::after {
    position: absolute;
    content: "";
    height: 5px;
    width: 100%;
    background-color: ${colors.secondaryColor};
    bottom: 1px;
    width: 0px;
    transition: all 0.3s ease;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
  ${Media("xlscreens")} {
    font-size: 0.9vw;
    height: 4vw;
    padding: 0 1.46vw;
    &::after {
      height: 0.25vw;
    }
  }
`;
const BookAppoint = styled.button`
  background: ${colors.secondaryColor};
  padding: 0px 15px;
  font-size: 14px;
  font-family: ${gilroySemibold};
  border: none;
  position: relative;
  z-index: 9;
  border: 3px solid ${colors.secondaryColor};
  margin-left: 5px;
  border-radius: 50px;
  height: 50px;
  a {
    text-decoration: none;
    color: white;
  }
  &:focus {
    outline: none;
  }
  &:after {
    position: absolute;
    content: "";
    transform: scale(0.5);
    visibility: hidden;
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: -9;
    background-color: white;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    border-radius: 50px;
  }
  &:hover {
    border-color: ${colors.secondaryColor};
    a {
      color: ${colors.secondaryColor};
    }
    &:after {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
  ${Media("xlscreens")} {
    font-size: 0.9vw;
    height: 2.66vw;
    padding: 0 0.78vw;
    margin-left: 0.26vw;
    border-radius: 2.66vw;
    &:after {
      border-radius: 2.66vw;
    }
  }
`;
const MobMenuWrapper = styled.div`
  a {
    color: ${colors.secondaryColor};
    text-decoration: none;
  }
`;
const MobMenuItem = styled.div`
  padding: 25px 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: ${gilroySemibold};
  position: relative;
  svg {
    margin-right: 15px;
  }
  &.active {
    box-shadow: 0px 0px 10px #00000020;
    &:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 7px;
      background-color: ${colors.secondaryColor};
      left: 0;
    }
    &:after {
      content:'';
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-left: 7px solid ${colors.secondaryColor};
      border-bottom: 7px solid transparent;
      left:7px;
      position:absolute;
    }
  }
`;
