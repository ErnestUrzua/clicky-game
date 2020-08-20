import React, { Component } from "react";
import "./main.css";
import Img from "../images.json";
import Cards from "../components/Cards";


class Main extends Component {
  //holds are game information
  state = {
    score: 0,
    topScore: 0,
    Img, //array of all imgs from json file
    clicked: false
  };


  shuffleIndex = () => {
    const newState = { ...this.state };
    //shuffle indexs  
    for (let i = 0; i < Img.length-1; i++) {
      //apply logic here
    }
    console.log(Img)

    //update state variables
    this.setState(newState);
  }


  handleItemClick = event => {
    const id = event.target.id;//select the id of the picture clicked
    console.log("Clicked ID:" + id);
    const newState = { ...this.state }; //temp variable to hold our state info


    if (Img[id].clicked === false) {
      Img[id].clicked = true; //set to true when img is clicked
      newState.score++; //add a point to score
    }

    else {
      if (this.state.score > this.state.topScore) {
        newState.topScore = this.state.score;//make current score the top score
      }

      newState.score = 0; //set score back to 0
      // Img.forEach(element => {
      //   console.log(element)
      //     Img[element].clicked = false;
      // });

      //reset clicked flags to false
      for (let i = 0; i < Img.length; i++) {
        Img[i].clicked = false;
      }

      console.log("Game Restart");
      //console.log(Img)
    }


    //update state variables
    this.setState(newState);

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
          {/* Loop through all the items in the static list  */}
          {
            //shuffleitems using shuffle data function
            //Img = shuffledata; 
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


//randomize images function
//use randome number generator math.random, 1-12
//i = img.length

export default Main;
