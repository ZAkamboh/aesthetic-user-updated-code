import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, Media } from "shared-components";
import { Container, Row, Col } from "react-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import { gilroySemibold } from "shared-components/fonts";

export default function SwipeableTemporaryDrawer(props) {
  return (
    <div>
      <AppBar
        fixed="top"
        className="appBar"
        style={{ backgroundColor: "#ffffff95" }}
      >
        <Container>
          <NavbarWrapper>
            <Col lg={4}></Col>
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
                <BookAppoint>Book an Appointment</BookAppoint>
              </NabarMenus>
            </Col>
          </NavbarWrapper>
        </Container>
      </AppBar>
    </div>
  );
}
const NavbarWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 0.1px solid white;
  backgroundcolor: "#ffffff95";
  ${Media("xlscreens")} {
    height: 4vw;
  }
`;
const NabarMenus = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items:center;
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
  color: white;
  font-size: 14px;
  font-family: ${gilroySemibold};
  border: none;
  position: relative;
  z-index: 9;
  border: 3px solid ${colors.secondaryColor};
  margin-left: 5px;
  border-radius:50px;
  height:50px;
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
    border-radius:50px;
  }
  &:hover {
    border-color: ${colors.secondaryColor};
    color: ${colors.secondaryColor};
    &:after {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
  ${Media("xlscreens")} {
    font-size: 0.9vw;
    height:2.66vw;
  }
`;
