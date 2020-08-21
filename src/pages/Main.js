import React, { Component } from "react";
import "./main.css";
import Img from "../images.json";
import Cards from "../components/Cards";


class Main extends Component {
  //holds our game information
  state = {
    score: 0,
    topScore: 0,
    Img, //array of all imgs from json file
    clicked: false
  };

  //function that shuffles indexs
  shuffleIndex = () => {

    var rand = 0;
    //shuffle indexs  
    for (let i = Img.length - 1; i > 0; i--) {
      //apply logic here
      rand = Math.floor(Math.random() * (i + 1));
      [Img[i], Img[rand]] = [Img[rand], Img[i]];
    }
  }

  //handles the click on the pictures
  handleItemClick = event => {
    const id = event.target.id;//select the id of the picture clicked
    console.log("Clicked ID:" + id);
    const newState = { ...this.state }; //temp variable to hold our state info


    if (Img[id - 1].clicked === false) {
      Img[id - 1].clicked = true; //set to true when img is clicked
      newState.score++; //add a point to score
      console.log("add point");
      console.log(Img);
    }

    //restart and clear fields
    else {
      if (this.state.score > this.state.topScore) {
        newState.topScore = this.state.score;//make current score the top score
      }

      newState.score = 0; //set score back to 0

      //reset clicked flags to false
      for (let i = 0; i < Img.length; i++) {
        Img[i].clicked = false;
      }

      console.log("Game Restart");
      //console.log(Img)
    }

    //update state variables
    this.setState(newState);
    console.log("setting the newState");
    this.shuffleIndex();
  }


  render() {
    return (
      <div>
        <div className="m-3">
          <p>Choose a Card to Play</p>
          <div className="text-right">
            <span>Score:{this.state.score} High Score:{this.state.topScore}</span>
          </div>
        </div>

        <div className="container-fluid p-2 col-9 justify-content-center">
          {
            /* Loop through all the items in the static list  */
            //component did mount
            this.state.Img.map(item => (
              <Cards
                key={item.id}
                id={item.id}
                name={item.name}
                handleClick={this.handleItemClick}
                image={item.image}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Main;
