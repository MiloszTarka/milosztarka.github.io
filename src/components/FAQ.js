import React, {useState} from "react";
import './FAQ.css';
import planet from '../planet-svgrepo-com.svg';
import {questions} from "../constants/Texts";

const filterWhite = "invert(100%) sepia(0%) saturate(7480%) hue-rotate(256deg) brightness(100%) contrast(100%)" 
const filterOrange = "invert(75%) sepia(49%) saturate(230%) hue-rotate(343deg) brightness(101%) contrast(106%)"

function FAQ() {
  var planets = document.getElementsByClassName("faq-buttons");
  const [text, setText] = useState(questions[0].answer);
  const [textTitle, setTextTitle] = useState(questions[0].question);
   
  function changeText(event){

    for(const planet of planets)
    {
      planet.style.filter = filterWhite;
    }
    switch(event.currentTarget.id){
      case 'planetButton0':
        setText(questions[0].answer);
        setTextTitle(questions[0].question);
        event.currentTarget.style.filter = filterOrange;
        break;
      case 'planetButton1':
        setText(questions[1].answer);
        setTextTitle(questions[1].question);
        event.currentTarget.style.filter = filterOrange;
        break;
      case 'planetButton2':
        setText(questions[2].answer);
        setTextTitle(questions[2].question);
        event.currentTarget.style.filter = filterOrange;
        break;
      case 'planetButton3':
        setText(questions[3].answer);
        setTextTitle(questions[3].question);
        event.currentTarget.style.filter = filterOrange;
        break;
      case 'planetButton4':
        setText(questions[4].answer);
        setTextTitle(questions[4].question);
        event.currentTarget.style.filter = filterOrange;
        break;
    }
  }

  function setFirstPlanet(){
    var planet = document.getElementById('planetButton0');
    planet.style.filter = filterOrange;
  }

    return (
      <div class='container-subpage'>
        <div id="faq-buttons-container" onLoad={setFirstPlanet}>
          <img src={planet} className="faq-buttons" alt="planetIcon" id="planetButton0" onClick={(e)=>changeText(e)}></img>
          <hr></hr>
          <img src={planet} className="faq-buttons" alt="planetIcon" id="planetButton1" onClick={(e)=>changeText(e)}></img>
          <hr></hr>
          <img src={planet} className="faq-buttons" alt="planetIcon"id="planetButton2" onClick={(e)=>changeText(e)}></img>
          <hr></hr>
          <img src={planet} className="faq-buttons" alt="planetIcon" id="planetButton3" onClick={(e)=>changeText(e)}></img>
          <hr></hr>
          <img src={planet} className="faq-buttons" alt="planetIcon" id="planetButton4" onClick={(e)=>changeText(e)}></img>
        </div>
        <div id="faq-content">
          <h1>{textTitle}</h1>
          <p>{text}</p>
        </div>
        <div id="faq-text">
          <h1>FAQ</h1>
        </div>
      </div>

    );
  }

export default FAQ;