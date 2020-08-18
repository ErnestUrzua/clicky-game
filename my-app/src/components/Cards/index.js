import React from "react";
import "./style.css";

function Cards(props) {

    
    return (
        <div className="row">
            <div className="col-lg m-3">
                <div className="card" >
                    <img src={props.image} className="card-img" onclick="onClick(this)" alt={props.name}></img>
                </div>
            </div>


            <div className="col-lg m-3">
                <div className="card" >
                    <img src={props.image} className="card-img" onclick="onClick(this)" alt={props.name}></img>
                </div>
            </div>


            <div className="col-lg m-3">
                <div className="card" >
                    <img src={props.image} className="card-img" onclick="onClick(this)" alt={props.name}></img>
                </div>
            </div>

            <div className="col-lg m-3">
                <div className="card" >
                    <img src={props.image} className="card-img" onclick="onClick(this)" alt={props.name}></img>
                </div>
            </div>

            <div className="col-lg m-3">
                <div className="card" >
                    <img src={props.image} className="card-img" onclick="onClick(this)" alt={props.name}></img>
                </div>
            </div>
           
        </div>

    );

}

export default Cards;