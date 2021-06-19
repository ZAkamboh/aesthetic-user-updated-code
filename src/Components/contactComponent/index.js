import React from "react";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import Fade from "react-reveal/Fade";
import "./contact.css";
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
      <div
        style={{
          width: "100%",
          marginTop: 90,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade top big>
            <div
              className="direction"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Al-Shifa+Medical+Center/@24.8533427,67.0623634,17.5z/data=!4m8!1m2!2m1!1sal+shifa+medical+center!3m4!1s0x3eb33d101c1d12dd:0x11122f12a31bc251!8m2!3d24.853466!4d67.0645072",
                  "_blank"
                )
              }
              style={{
                width: "10vw",
                fontSize: "20px",
                height: "7vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              DIRECTION
            </div>
          </Fade>
        </div>
        <div
          style={{
            width: "90%",
            textAlign: "center",
            marginLeft: "5%",
            marginTop: "1%",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <h1 className="contactDet" style={{ color: "#ffffff" }}>
            <AddIcCallIcon
              className="callicon"
              style={{ color: "red", fontSize: 50 }}
            />{" "}
            +92 336 5777715 +92 21 34325599
          </h1>
          <p style={{ color: "#ffffff" }}>
            Al Shifa Medical center Located at E Market BLOCK 6 P.EC.H.S Imam
            Ahmed Road Karachi
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
