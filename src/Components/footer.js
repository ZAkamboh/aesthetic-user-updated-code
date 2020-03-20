import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dr from "../Assets/Images/drshareef.jpg"
import MailIcon from '@material-ui/icons/Mail';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

var screenHeight = window.screen.availHeight;

class Footer extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Grid item xs={4} style={{ height: screenHeight / 2.2 }}>
          <Paper style={{ height: screenHeight / 1.5, backgroundColor: "black" }} >
            <div style={{ height: screenHeight / 2, textAlign: "center", paddingTop: "15%" }}>
              <h1 style={{ color: "red" }}>AL SHIFA MEDICAL CENTER</h1>
              <p style={{ color: "#ffffff" }}>We also perform skin laser treatment,Recostructive plastic surgery and stem cell therapy</p>
              <p>
                E/177 E Market Imam Ahmed Road PECHS Block 6 Karachi
              </p>
              <p style={{ color: "#ffffff" }}> <AddIcCallIcon style={{ color: "red" }} /> +92 336 5777715        +92 21 34325599</p>
              <p style={{ color: "#ffffff" }}> <MailIcon style={{ color: "red" }} /> info@stemcell.com.pk</p>
              <p style={{ color: "#ffffff" }}> <MailIcon style={{ color: "red" }} /> info@stemcell.com.pk</p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={4} style={{ height: screenHeight / 2.2 }}>
          <Paper style={{ height: screenHeight / 1.5, backgroundColor: "black" }} >
            <div style={{ height: screenHeight / 2, textAlign: "center", paddingTop: "15%" }}>
              <h1 style={{ color: "red" }}>We Are Working On</h1>
              <h2 style={{ color: "red" }}>Working Days:</h2>
              <p style={{ color: "#ffffff" }}>Monday – Saturday</p>
              <h2 style={{ color: "red" }}>Working Time:</h2>
              <p style={{ color: "#ffffff" }}>9.00 AM – 10.00 PM</p>
              <h1 style={{ color: "red" }}>Follow us on</h1>
              <p style={{ color: "#ffffff" }}>Our mission is to provide best treatment of knee joint, Ankle joints, Elbow joints , Shoulder joints , Hip joints and spinal injuries with stem cell therapy.</p>

            </div>
          </Paper>
        </Grid>
        <Grid item xs={4} style={{ height: screenHeight / 2.2 }}>
          <Paper style={{ height: screenHeight / 1.5, backgroundColor: "black" }} >
            <div style={{ height: screenHeight / 2, paddingTop: "6%" }}>
              <img src={dr} alt="Title" style={{ height: screenHeight / 1.7, width: "100%" }} />
            </div>
          </Paper>
        </Grid>
      </div>


    )
  }
}

export default Footer