import React from "react";
import './BottomContainer.css';
import ScrollToTop from "../../ScrollToTop";
import {NavLink} from "react-router-dom";
import ParticleBackground from '../../ParticleBackground';

const BottomContainer = (props) => {
    return ( 
      <>
        {(() => {
        switch (props.type) {
          case 'home':
            return(
              <div className="lower-home-screen">
              <div className="picture" >
                <p id="destination">destination:</p>
                <h1>MARS</h1>
                <p>satelites: 2</p>
                <p>temperature: 210K</p>
              </div>
              <div className="content">
                <h1>BY<br></br>TRAVELERS<br></br>FOR<br></br>TRAVELERS</h1>
                <hr></hr>
                <ScrollToTop>
                <p>Don't be afraid of missing out - start the exploration in <NavLink to="/News" >NEWS</NavLink>. Learn more about Voyager (and the author) in <NavLink to="/AboutUs" >ABOUT US</NavLink></p>
                </ScrollToTop>
              </div>
            </div> 
            )

          case 'leftSided':
            return(
              <div className="lower-home-screen">
              <div className="picture" style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: props.backgroundSize }}>
                <p>{props.pictureText}</p>
              </div>
              <div className="content">
                <h1>{props.title}</h1>
                <hr></hr>
                <p>{props.text}</p>
              </div>
            </div> 
            )

          case 'rightSided':
            return(
            <div className="lower-home-screen" id="right-screen">
            <div className="content" id="right">
              <ParticleBackground style="aboutus"/>
              <h1>{props.title}</h1>
              <hr></hr>
              <p>{props.text}</p>
              {props.certificates.map((certificates)=>(
                <p>{certificates.certificate}</p>
              ))}
            </div>
            <div className="picture" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <p>{props.pictureText}</p>
            </div>
          </div>
            )
        }
      })()}
      </>
    );
  }

export default BottomContainer;