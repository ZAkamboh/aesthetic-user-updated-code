import React from "react"
//import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import med1 from "../../Assets/Images/newmed5.jpg"
import med2 from "../../Assets/Images/newmed2.jpg"
import med3 from "../../Assets/Images/newmed4.jpg"
// import Background from "../../Assets/Images/paper3.jpg"
import "./index.css"
import Truncate from 'react-truncate';
import { Link } from "react-router-dom";
import { connect } from "react-redux";



var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availHeight;


const properties = {
  duration: 20000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "zubair", lastname: "aslam", surname: "kamboh",title:"Stem Cell Therapy Safety", id: 12,desc:"assalamoalikum my name is zubair aslam i am from Pakistan karachi my language is panjabi and my cast is kamboh i am 24 year old and my parents background from bahawalnagar and he live in Pakistan karachi i have 3 brother and 1 sister my elder brother is married and i have 1 nephew she name is ayesha qazi abubakr" },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 5 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 91 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 11 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 22 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 33 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 8 },
        { name: "zubair", lastname: "aslam", surname: "kamboh", id: 9, }
      ]
    }
  }
  render() {
    return (
      <div >

        <Grid style={{ height: screenHeight, width: "100%", marginTop: "2px" }} container >
          <Grid item xs={12}>
            <Paper style={{ height: screenHeight / 1.5 }} >
              <Slide {...properties}>
                <div >
                  <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${med1})` }}>

                    <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>

                      <h1 style={{ color: "#ffffff" }} >
                        Your resource for Al-Shifa-Medical-Center
                      </h1>

                      <Truncate style={{ color: "#ffffff", textAlign: "center", fontFamily: "italic", fontSize: 30 }} lines={1} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                        Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                        </Truncate>
                      <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                    </div>
                  </div>

                </div>



                <div >
                  <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${med1})` }}>

                    <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>

                      <h1 style={{ color: "#ffffff" }} >
                        Your resource for Al-Shifa-Medical-Center
                      </h1>

                      <Truncate style={{ color: "#ffffff", textAlign: "center", fontFamily: "italic", fontSize: 30 }} lines={1} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                        Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                        </Truncate>
                      <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                    </div>
                  </div>
                </div>




                <div  >
                  <div style={{ height: screenHeight / 1.4, width: "100%", backgroundImage: `url(${med2})` }} >
                    <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                    </div>
                    {/* <img src={med2} alt="Title" style={{ height: screenHeight / 1.4, width: "100%",backgroundColor:"red" }} />  */}

                  </div>
                </div>






                <div>
                  <div>
                    <img src={med3} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />
                  </div>
                </div>




              </Slide>
            </Paper>
          </Grid>

          {/* one object fetching grid */}
          {this.state.data.map((item, index) => {
            return (
              <div className="centerDiv3" style={{ height: screenHeight / 2, width: "100%" }}>

                <Grid item xs={0} sm={1} style={{ height: screenHeight / 2.2, marginTop: "6%" }}>
                  <Paper style={{ height: screenHeight / 2.2 }} >
                    <div style={{ fontFamily: "verdana", height: screenHeight / 2.2 }}>

                      
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={7} style={{ height: screenHeight / 2.2, marginTop: "6%" }}>
                  <Paper style={{ height: screenHeight / 2.2 }} >
                    <div style={{ background:"linear-gradient(45deg, #303f72 30%, #21CBF3 90%)", fontFamily: "verdana", height: screenHeight / 2.2, width: "100%", borderRadius: 50 }}>
            <h1 style={{ paddingTop: "5%", paddingLeft: "2%", fontFamily: "italic",color:"#ffffff" }}>{item.title}</h1>

                      <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize:20 }} lines={3} ellipsis={<span >... <Link style={{ color:"red" }} to='/about'>Read more</Link></span>}>
                          
                          <p >
                          {item.desc}
                          </p>
                      </Truncate>
            <button style={{marginTop:"7%",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"#ffffff",marginLeft:"2%",borderTopLeftRadius:20,borderBottomRightRadius:20}}>Read more about {item.title}</button>

                    </div>
                  </Paper>
                </Grid>


                <Grid item xs={0} sm={3} style={{ height: screenHeight / 2.2, marginTop: "6%" }}>
                  <Paper style={{ height: screenHeight / 2.2, backgroundColor: "grey" }} >
                    <div style={{ fontFamily: "verdana", height: screenHeight / 2 }}>
                      <p>{item.id}</p>

                    </div>
                  </Paper>
                </Grid>


                <Grid item xs={0} sm={1} style={{ height: screenHeight / 2.2, marginTop: "6%" }}>
                  <Paper style={{ height: screenHeight / 2.2 }} >
                    <div style={{ fontFamily: "verdana", height: screenHeight / 2 }}>
                      

                    </div>
                  </Paper>
                </Grid>
              </div>
            )
          })}






        </Grid>
      </div>
    )

  }
}



function mapState(state) {
  return {
    data: state.AppReducer.data
  };
}
function mapDispatch(dispatch) {
  return {

  };
}
export default connect(
  mapState,
  mapDispatch
)(Home);