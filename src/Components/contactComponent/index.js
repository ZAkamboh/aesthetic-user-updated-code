import React from "react"
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Logo9 from "../../Assets/Images/logo9.png"
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

var screenHeight = window.screen.availHeight;
const AnyReactComponent = ({ text }) => <div style={{color:"black"}}><img alt="logo"  src={Logo9} height="50px" width="90px"/>{text}</div>;


class Contact extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
    
    }
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
      <div  style={{height:screenHeight,width:"100%",background: "linear-gradient(45deg, #2e2565 30%, #682560 90%)"}}>
      <div  style={{height:screenHeight/2,width:"90%",marginLeft:"5%",marginTop:"1%"}}>

            <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCYjvdwjjkFNhXdFVKYy5CPslDFJDzKvvc'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={24.853254}
            lng={67.064167}
            text="Al-shifa medical center"
          />
        </GoogleMapReact>
        </div>
        <div style={{height:screenHeight/5,width:"90%",textAlign:"center",marginLeft:"5%",marginTop:"1%",paddingTop:"3%"}}>
              <h1 style={{color:"#ffffff"}}><AddIcCallIcon style={{ color: "red",fontSize:50 }} /> +92 336 5777715        +92 21 34325599</h1>
              <p style={{color:"#ffffff"}}>Al Shifa Medical center Located at E Market BLOCK 6 P.EC.H.S Imam Ahmed Road Karachi</p>
        </div>
      </div>
    )

  }
}



function mapState(state) {
  return {
    
  };
}
function mapDispatch(dispatch) {
  return {

  };
}
export default connect(
  mapState,
  mapDispatch
)(Contact);

