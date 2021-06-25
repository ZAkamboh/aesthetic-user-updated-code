import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "shared-components";
import { Link } from "react-router-dom";
import { gilroySemibold } from "shared-components/fonts";
import { gilroyMedium } from "shared-components/fonts";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import { Media } from "shared-components/media";
class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col lg="4" md={4}>
              <FooterSectionTitle>Available Treatments</FooterSectionTitle>
              <ul>
                <li>
                  <Link to="/book-appointment">Liposuction</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Face Uplift</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Blaphroplasty</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Rhinoplasty</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Breast Reshape</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Hair fall treatment PRP</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Wrinkles treatment</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Skin whitening</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Face PRP</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Scar removing</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Chemical Peel</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Botox</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Stem cell therapy</Link>
                </li>
              </ul>
            </Col>
            <Col lg="4" md={4}>
              <FooterSectionTitle>Explore</FooterSectionTitle>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/event">Events</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/book-appointment">Book Appointment</Link>
                </li>
              </ul>
            </Col>
            <Col lg="4" md={4}>
              <FooterSectionTitle>Consultation Timings</FooterSectionTitle>
              <ul>
                <li>
                  Monday - Saturday <br />
                  09:00am - 10:00pm <br />
                  <span>
                    <MailOutlineIcon />
                    &nbsp;honeyshery@yahoo.com <br />
                    <CallIcon />
                    &nbsp;+92 336 5777715, +92 21 34325599
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  min-height: 400px;
  background-color: ${colors.secondaryColor};
  padding: 50px 0;
  text-align: center;
  ul {
    margin-top: 20px;
    padding: 0;
    li {
      color: white;
      font-size: 16px;
      font-family: ${gilroyMedium};
      line-height: 2;
      svg{
        font-size:20px;
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  ${Media("xlscreens")} {
    min-height: 20.83vw;
    padding: 2.66vw 0;
    ul {
      margin-top: 1.04vw;
      li {
        font-size: 0.83vw;
        svg{
          font-size:1.04vw;
        }
      }
    }
  }
  ${Media('tablet')}{
    ul{
      li{
        font-size:14px;
      }
    }
  }
`;
const FooterSectionTitle = styled.h1`
  font-size: 34px;
  color: white;
  font-family: ${gilroySemibold};
  ${Media('xlscreens')}{
    font-size:1.77vw;
  }
  ${Media('tablet')}{
    font-size:26px;
    margin:30px 0;
  }
`;
export default Footer;
