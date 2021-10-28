import React from "react";
import './AboutUs.css';
import {aboutus} from "../constants/Texts";
import {certificates} from "../constants/Texts";
import BottomContainer from "./Containers/BottomContainer";
import imageMars from "../image-mars.jpg";
import imageBuilding from "../building.jpg";
import imageMilky from "../Izery.jpg";


 
const AboutUs = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
    return (
      <div class="container-aboutus">
        <div id="upper-aboutus-screen">
          <div>
            <h2>LEARN MORE ABOUT THE PROJECT<br></br> AND THE AUTHOR</h2>
          </div>
            <button onClick={handleScroll}><span>{">"}</span></button>
        </div>

        <BottomContainer type='leftSided' backgroundImage={imageMars} title='ABOUT VOYAGER' text={aboutus[0].text}/>
        <BottomContainer type='rightSided' backgroundImage={imageBuilding} title='ABOUT ME' text={aboutus[1].text} certificates={certificates}/>       
        <BottomContainer type='leftSided' backgroundImage={imageMilky} backgroundSize="contain" title='INTERESTS' text={aboutus[2].text} pictureText="Milky way captured during the trip to Izera Mountains - 04/09/2021"/>

        
        </div> 

    );
  }

export default AboutUs;