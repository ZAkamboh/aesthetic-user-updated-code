import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';

import car3 from "../../Assets/Images/car3.jpg"
import car4 from "../../Assets/Images/car4.png"
import car5 from "../../Assets/Images/car5.jpg"


var screenHeight = window.screen.availHeight;
var screenWidth=window.screen.availWidth
const slideImages = [
    car3,
    car4,
    car5
  ];
  const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
const useStyles = makeStyles(theme => ({
    parent: {
      backgroundColor:"red",
      height:screenHeight/2
    },
    slidecontainer:{
       
    },
    eachslide:{
   
    }
 
  }));

function Home() {
    const classes = useStyles();
    
        return (
            <div className={classes.slidecontainer}>
            <Slide {...properties}>
              <div className={classes.eachslide}>
                <div>
                <img src={car3} alt="Title" style={{ height: screenHeight , width: screenWidth }} />
                  
                </div>
              </div>
              <div className={classes.eachslide}>
                <div>
                <img src={car4} alt="Title" style={{ height: screenHeight , width: screenWidth }} />
                  
                </div>
              </div>
              <div className={classes.eachslide}>
                <div>
                <img src={car5} alt="Title" style={{ height: screenHeight , width: screenWidth }} />
                </div>
              </div>
            </Slide>
          </div>
        )
    

}

export default Home