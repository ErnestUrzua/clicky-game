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

  handleItemClick = event => {
    const id = event.target.id;
    console.log(id);

    //check is clicked = true
    //if it is, no points and reset score, and change all clicked to false,, reset game
    // keep top score and check if ending score is > topscore.  
    //else add point and change clicked to true


    //


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

console.log(Img);


//randomize images function
//use randome number generator math.random, 1-12
//i = img.length

//this.state


export default Main;
