import React from "react";
import "./style.css";




function Cards() {
    return (
        <div className="row">
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="../../img/akali.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={"logo.svg"} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={"logo.svg"} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={"logo.svg"} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src={"logo.svg"} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

            </div>
        </div>
        
    );

}

export default Cards;