import React from "react"
import map from "../../Assets/Images/map.png"
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

var screenHeight = window.screen.availHeight;
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;      
  }
  static defaultProps = {
    center: {
      lat: 24.853254,
      lng: 67.064167
    },
    zoom: 17
  };
  render() {

    return (
      <div style={{ height: screenHeight, width: "100%", background: "linear-gradient(45deg, #133054 60%, #3667a2 90%)",marginTop:90 }}>
        <div style={{ height: screenHeight / 2, width: "90%", marginLeft: "5%", marginTop: "1%" }}>
      <img src={map} height="100%" width="100%" alt="map"/>
        </div>
        <div style={{ height: screenHeight / 5, width: "90%", textAlign: "center", marginLeft: "5%", marginTop: "1%", paddingTop: "3%" }}>
          <h1 style={{ color: "#ffffff" }}><AddIcCallIcon style={{ color: "red", fontSize: 50 }} /> +92 336 5777715        +92 21 34325599</h1>
          <p style={{ color: "#ffffff" }}>Al Shifa Medical center Located at E Market BLOCK 6 P.EC.H.S Imam Ahmed Road Karachi</p>
        </div>
      </div>
    )

  }
}

export default Contact

