import React from "react";
import "./style.css";


function Cards(props) {


    return (
        <div className="card" >
            <img src={props.image} className="card-img" onClick={props.handleClick} alt={props.name} id={props.id}></img>
        </div>
    );

}

export default Cards;