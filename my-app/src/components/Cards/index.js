import React from "react";
import "./style.css";


function Cards(props) {


    return (
        <div className="card" >
            <img src={props.image} className="card-img" onclick={props.handleClick} alt={props.name}></img>
        </div>
    );

}

export default Cards;