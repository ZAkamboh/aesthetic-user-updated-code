import React from "react"
import { AppActions } from "../../store/actions"
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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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

class Homechild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            scrolled: false
        }
        this.props.fetchhomedata()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.homedata.length > 0) {
            this.setState({ data: nextProps.homedata })
        }
    }

    gotoTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        window.onscroll = function () {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                this.setState({ scrolled: true })
            } else {
                this.setState({ scrolled: false })
            }
        }.bind(this)
        return (
            <div className="homeCopyMainClass">
                <Grid style={{ width: "100%", marginTop: "2px" }} container >
                    {

                    }
                    <Grid item xs={12}>
                        <Paper style={{ height: screenHeight / 1.5 }} >
                            <Slide {...properties}>
                                <div >
                                    <div className="containImage" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${med1})` }}>
                                        <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                                            <div style={{ width: "70%", textAlign: "center" }}>
                                                <h1 style={{ color: "#ffffff" }} >
                                                    Your resource for Al-Shifa-Medical-Center
                                             </h1>
                                                <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 27 }} lines={2} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                                                    Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                                            </Truncate>
                                                <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${med1})` }}>

                                        <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>

                                            <div style={{ width: "70%", textAlign: "center" }}>
                                                <h1 style={{ color: "#ffffff" }} >
                                                    Your resource for Al-Shifa-Medical-Center
                                             </h1>
                                                <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 27 }} lines={2} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                                                    Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                                            </Truncate>
                                                <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div >
                                    <div className="containImage" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${dentist})` }}>
                                        <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                                            <div style={{ width: "70%", textAlign: "center" }}>
                                                <h1 style={{ color: "#ffffff" }} >
                                                    Your resource for Al-Shifa-Medical-Center
                                             </h1>
                                                <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 27 }} lines={2} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                                                    Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                                            </Truncate>
                                                <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div >
                                    <div className="containImage" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${stem3})` }}>
                                        <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                                            <div style={{ width: "70%", textAlign: "center" }}>
                                                <h1 style={{ color: "#ffffff" }} >
                                                    Your resource for Al-Shifa-Medical-Center
                                             </h1>
                                                <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 27 }} lines={2} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                                                    Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                                            </Truncate>
                                                <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="containImage" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "#123889", backgroundImage: `url(${face1})` }}>
                                        <div className="centerDiv2" style={{ height: screenHeight / 1.4, width: "100%", backgroundColor: "rgba(17, 23, 118, 0.40)" }}>
                                            <div style={{ width: "70%", textAlign: "center" }}>
                                                <h1 style={{ color: "#ffffff" }} >
                                                    Your resource for Al-Shifa-Medical-Center
                                             </h1>
                                                <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 27 }} lines={2} ellipsis={<span >... <Link style={{ color: "red" }} to='/about'>Read more</Link></span>}>
                                                    Al Shifa Medical center Located at E Market Imam Ahmed Road PECHS Karachi. Which is symbol of primary healthcare sector,with a vision to provide specially Stem cell therapy,which is newly introduced in Pakistan and this Stem cell therapy is performed by Dr Asad Ullah Awan Assistant Professor Plastic surgery.
                                            </Truncate>
                                                <button onClick={() => this.props.history.push('/about')} style={{ backgroundColor: "red", color: "white", borderRadius: 50, marginTop: "5%" }}>Leran more about alShifa </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Paper>
                    </Grid>

                    {/* one object fetching grid */}
                    <div style={{ width: "100%", paddingBottom: 70, marginTop: 40 }}>
                        {this.state.data.map((item, index) => {
                            return (
                                <div className="centerDiv3" style={{ width: "100%" }}>
                                    <Grid container>
                                        <Grid item xs={0} sm={1} style={{ height: screenHeight / 2.2, marginTop: "3%" }}>
                                            <div style={{ height: screenHeight / 2.2 }} >
                                                <div style={{ fontFamily: "verdana", height: screenHeight / 2.2 }}>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={7} style={{ height: screenHeight / 2.2, marginTop: "3%" }}>
                                            <div style={{ height: screenHeight / 2.2 }} >
                                                <div style={{ paddingTop: "3%", background: "linear-gradient(45deg, #303f72 30%, #21CBF3 90%)", fontFamily: "verdana", height: screenHeight / 2.2, width: "100%", borderRadius: 50 }}>
                                                    <h3 style={{ paddingTop: "5%", paddingLeft: "5%", fontFamily: "italic", color: "#ffffff" }}>{item.title}</h3>
                                                    <div style={{ width: "90%", marginLeft: "5%" }}>
                                                        <Truncate style={{ color: "#ffffff", fontFamily: "italic", fontSize: 18 }} lines={3}   >
                                                            <p >
                                                                {item.desc}
                                                            </p>
                                                        </Truncate>
                                                    </div>
                                                    <button onClick={() => this.props.history.push("/homeDetail", { item: item })}
                                                        style={{ marginTop: "3%", background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", color: "#ffffff", marginLeft: "5%", borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>Read more about {item.title}</button>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={3} style={{ height: screenHeight / 2.2, marginTop: "3%" }}>
                                            <div style={{ height: screenHeight / 2.2 }} >
                                                <div style={{ fontFamily: "verdana", height: screenHeight / 2 }}>
                                                    <img src={item.url} alt="Title" style={{ height: "90%", width: "100%", borderRadius: 20 }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={0} sm={1} style={{ height: screenHeight / 2.2, marginTop: "3%" }}>
                                            <div style={{ height: screenHeight / 2.2 }} >
                                                <div style={{ fontFamily: "verdana", height: screenHeight / 2 }}>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })}
                    </div>
                    <div id="myBtn" style={{ display: this.state.scrolled ? "block" : "none" }} onClick={() => this.gotoTop()}>
                        <ArrowUpwardIcon />
                    </div>
                </Grid>

            </div>
        )
    }
}
function mapState(state) {
    return {
        homedata: state.AppReducer.homedata
    };
}
function mapDispatch(dispatch) {
    return {
        fetchhomedata: () => {
            dispatch(AppActions.fetchhomedata());
        }
    };
}
export default connect(
    mapState,
    mapDispatch
)(Homechild);