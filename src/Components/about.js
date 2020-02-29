import React from "react"
import car3 from "../Assets/Images/car3.jpg"
import car4 from "../Assets/Images/car4.png"
import car5 from "../Assets/Images/car5.jpg"

var screenHeight = window.screen.availHeight;
 var screenWidth=window.screen.availWidth
const slideImages = [
    car3,
    car4,
    car5
  ];


function About () {
        return (
            <div style={{'backgroundImage': `url(${slideImages[1]})`, height: screenHeight, width: screenWidth}}>
                <h1>about page</h1>
            </div>
        )
}

export default About