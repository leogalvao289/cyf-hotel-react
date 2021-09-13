import React from "react";

const Cards = props => {
  return (
    <div className="col-3 card ">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body ">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-paragraph">{props.content}</p>
        <a href={props.url} className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
};

export default Cards;
