import React from "react";
import './Home.css';
import facebook from '../Facebook.svg';
import instagram from '../Instagram.svg';
import BottomContainer from "./Containers/BottomContainer";

 
const Home = () => {
  
  const initializeLocalStorage = () => {
    var helper = [];
		localStorage.setItem('favourites', JSON.stringify(helper));
	};

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
    return (
      <div class="container-home" onLoad={initializeLocalStorage}>
        <div id="upper-home-screen">
          <div>
            <h1>EXPLORE THE UNIVERSE</h1>
            <h2>journey through the mysteries of space</h2>
          </div>
            <button onClick={handleScroll}>start the journey</button>
        </div>
        <BottomContainer type='home'/>
        <div id="icons">
              <a href="https://www.facebook.com"><img src={facebook} alt="facebookIcon"/></a>
              <a href="https://www.instagram.com"><img src={instagram} alt="instagramIcon"/></a>
          </div> 
      </div>

    );
  }

export default Home;