import React from "react"
//import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import med1 from "../../Assets/Images/newmed5.jpg"
import face1 from "../../Assets/Images/face2.jpg"
import stem3 from "../../Assets/Images/stemcell4.jpg"
import dentist from "../../Assets/Images/dentist.jpg"







import "./index.css"
import Truncate from 'react-truncate';
import { Link } from "react-router-dom";
import firebase from "../../database"
import { connect } from "react-redux";

var screenHeight = window.screen.availHeight;

const properties = {
    duration: 6000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

class Homecopy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localdata:[],
        }
    }

    componentWillMount(){
        var values = [];
        firebase
      .database()
      .ref(`homedata`)
      .once("value", snap => {
        var data = snap.val();
        for (let keys in data) {
          values.push({ ...data[keys], key: keys });
        }
        this.setState({ localdata: values });
      })
    }
    render() {
        return (
            <div >
            
                <Grid style={{ height: screenHeight, width: "100%", marginTop: "2px" }} container >
                    <Grid item xs={12}>
                        <Paper style={{ height: screenHeight / 1.5 }} >
                            <Slide {...properties}>
                                <div >
                                    <div className="containImage" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${med1})` }}>

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

                                <div style={{backgroundColor: "rgba(17, 23, 118, 0.40)"}}>
                                    <div className="containImage" style={{backgroundColor: "rgba(17, 23, 118, 0.40)"}}>
                                        <img src={dentist} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />
                                    </div>
                                </div>


                                <div style={{backgroundColor: "rgba(17, 23, 118, 0.40)"}}>
                                    <div className="containImage" style={{backgroundColor: "rgba(17, 23, 118, 0.40)"}}>
                                        <img src={stem3} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />
                                    </div>
                                </div>






                                <div>
                                    <div className="containImage">
                                        <img src={face1} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />
                                    </div>
                                </div>




                            </Slide>
                        </Paper>
                    </Grid>

                    {/* one object fetching grid */}
                    {this.state.localdata.map((item, index) => {
                        console.log(item)
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
                                        <div style={{paddingTop:"3%", background: "linear-gradient(45deg, #303f72 30%, #21CBF3 90%)", fontFamily: "verdana", height: screenHeight / 2.2, width: "100%", borderRadius: 50 }}>
                                            <h1 style={{ paddingTop: "5%", paddingLeft: "5%", fontFamily: "italic", color: "#ffffff" }}>{item.title}</h1>
                                                <div style={{width:"90%",marginLeft:"5%"}}>
                                            <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 20 }} lines={3}   >
                                                <p >
                                                    {item.desc}
                                                </p>
                                            </Truncate>
                                           </div>
                                            <button    onClick={() => this.props.history.push("/homeDetail", {item: item })}
                         style={{ marginTop: "3%", background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "#ffffff", marginLeft: "5%", borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>Read more about {item.title}</button>
                                        </div>
                                    </Paper>
                                </Grid>


                                <Grid item xs={12} sm={3} style={{ height: screenHeight / 2.2, marginTop: "6%" }}>
                                    <Paper style={{ height: screenHeight / 2.2 }} >
                                        <div style={{ fontFamily: "verdana", height: screenHeight / 2 }}>
                                             <img src={item.url} alt="Title" style={{ height: "90%", width: "100%", borderRadius: 20 }} /> 
   
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
)(Homecopy);