import React, { Component } from "react";
import "./main.css";
import "../img";


class Game extends Component {
  //holds are game information
  state = {
    score: 0,
    topScore: 0,
    images: [],
    clicked: false
  };
}


const images = [];
const score = 0;
const topScore = 0;
const clicked = false;

//map images into an array
images.map();



function Main(props) {
  return (
    <div className="m-3">
      <p>Choose a Card to Play</p> 
      <div className="text-right">
       <span>Score:{props.score} High Score:{props.topScore}</span> 
      </div>
      
    </div>
  );
}

export default Main;
