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
        <Grid container style={{ backgroundColor: "#0f2540" }} >
          <Grid item xs={12} sm={4}>
            <div style={{ height: screenHeight / 1.7, backgroundColor: "#0f2540" }} >
              <div style={{ height: screenHeight / 2, textAlign: "center", paddingTop: "15%" }}>
                <h4 style={{ color: "#ffffff" }}>AL SHIFA MEDICAL CENTER</h4>
                <p style={{ color: "#dcdadaf5" }}>We also perform skin laser treatment,Recostructive plastic surgery and stem cell therapy</p>
                <p style={{ color: "#dcdadaf5" }}> <AddIcCallIcon style={{ color: "#ffffff" }} /> +92 336 5777715        +92 21 34325599</p>
                <p style={{ color: "#dcdadaf5" }}> <MailIcon style={{ color: "#ffffff" }} /> info@stemcell.com.pk</p>
                <p style={{ color: "#dcdadaf5" }}> <MailIcon style={{ color: "#ffffff" }} /> info@stemcell.com.pk</p>
                <p style={{ color: "#dcdadaf5" }}>
                  Address: E/177 E Market Imam Ahmed Road PECHS Block 6 Karachi
              </p>
              </div>
            </div>
          </Grid>
          <Grid sm={8} xs={12} container style={{ backgroundColor: "#0f2540" }} >
            <Grid item sm={6} xs={8}>
              <div style={{ height: screenHeight / 1.7, backgroundColor: "#0f2540" }} >
                <div style={{ height: screenHeight / 2, textAlign: "center", paddingTop: "15%" }}>
                  <h5 style={{ color: "#ffffff" }}>Working Days:</h5>
                  <p style={{ color: "#dcdadaf5" }}>Monday – Saturday</p>
                  <h5 style={{ color: "#ffffff" }}>Working Time:</h5>
                  <p style={{ color: "#dcdadaf5" }}>9.00 AM – 10.00 PM</p>
                  <h5 style={{ color: "#ffffff" }}>Follow us on</h5>
                  <p style={{ color: "#dcdadaf5" }}>Our mission is to provide best treatment of knee joint, Ankle joints, Elbow joints , Shoulder joints , Hip joints and spinal injuries with stem cell therapy.</p>

                </div>
              </div>
            </Grid>
            <Grid item sm={6} xs={4}>
              <div style={{ height: screenHeight / 1.7, backgroundColor: "#0f2540" }} >
                <div style={{ height: screenHeight / 2, paddingTop: "6%",textAlign:"center" }}>
                  <img src={dr} alt="Title" style={{ height: "100%", width: "90%" }} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default Footer