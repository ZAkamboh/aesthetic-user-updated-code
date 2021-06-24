import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import contactBg from "Assets/Images/contactBg.jpg";
import { gilroyBold } from "shared-components/fonts";
import { gilroyMedium } from "shared-components/fonts";
import PhoneIcon from "@material-ui/icons/Phone";
import DirectionsIcon from "@material-ui/icons/Directions";
import { gilroySemibold } from "shared-components/fonts";
import { Media } from "shared-components/media";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  static defaultProps = {
    center: {
      lat: 24.853254,
      lng: 67.064167,
    },
    zoom: 17,
  };
  render() {
    return (
      <Wrapper>
        <ContactIntro>
          <h1>Get in Touch</h1>
          <p>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us.
          </p>
        </ContactIntro>
        <GetinTouch>
          <Container>
            <Row>
              <Col lg={6}>
                <ContactBox>
                  <PhoneIcon />
                  <h2>Talk to us.</h2>
                  <p>
                    Need Consultation? Just pick-up your phone and call at our
                    given numbers.
                  </p>
                  <h3>+92 336 5777715</h3>
                  <h3>+92 21 34325599</h3>
                </ContactBox>
              </Col>
              <Col lg={6}>
                <ContactBox>
                  <DirectionsIcon />
                  <h2>Reach us.</h2>
                  <p>
                    Al Shifa Medical centre Located at E Market BLOCK 6 P.EC.H.S
                    Imam Ahmed Road Karachi.
                    <br />
                    09am - 10pm (Sunday off).
                  </p>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.google.com/maps/place/Al-Shifa+Medical+Center/@24.8533427,67.0623634,17.5z/data=!4m8!1m2!2m1!1sal+shifa+medical+center!3m4!1s0x3eb33d101c1d12dd:0x11122f12a31bc251!8m2!3d24.853466!4d67.0645072"
                  >
                    Get Direction
                  </a>
                </ContactBox>
              </Col>
            </Row>
          </Container>
        </GetinTouch>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 76px;
  ${Media("xlscreens")} {
    margin-top: 3.95vw;
  }
`;
const ContactIntro = styled.div`
  min-height: 50vh;
  background-image: url(${contactBg});
  background-size: cover;
  position: relative;
  z-index: 9;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 52px;
    font-family: ${gilroyBold};
  }
  p {
    font-size: 22px;
    font-family: ${gilroyMedium};
  }
  &:before {
    background: #00000070;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -9;
  }
  ${Media("xlscreens")} {
    h1 {
      font-size: 2.7vw;
    }
    p {
      font-size: 1.14vw;
    }
  }
`;
const GetinTouch = styled.div`
  margin-top: -100px;
  position: relative;
  z-index: 9999;
  ${Media("xlscreens")} {
    margin-top: -5.2vw;
  }
`;
const ContactBox = styled.div`
  background-color: white;
  min-height: 400px;
  box-shadow: 0px 0px 10px #00000050;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 80px;
  text-align: center;
  h2 {
    font-size: 32px;
    font-family: ${gilroySemibold};
    margin: 10px 0;
  }
  p {
    font-size: 20px;
    margin: 15px 0;
    margin-bottom: 20px;
  }
  h3 {
    font-family: ${gilroySemibold};
    color: #2b93c5;
    font-size: 20px;
  }
  svg {
    font-size: 60px;
  }
  a {
    font-size: 20px;
    font-family: ${gilroySemibold};
    color: #2b93c5;
  }
  ${Media("xlscreens")} {
    min-height: 20.83vw;
    padding: 0 4.16vw;
    h2 {
      font-size: 1.66vw;
      margin: 0.53vw 0;
    }
    p {
      font-size: 1.04vw;
      margin: 0.78vw 0;
      margin-bottom: 1.04vw;
    }
    h3 {
      font-size: 1.04vw;
    }
    svg {
      font-size: 3.125vw;
    }
    a {
      font-size: 1.04vw;
    }
  }
`;
export default Contact;
