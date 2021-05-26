import React from "react";

import "./List.css";
const List = (props) => {
  return (
    <div className="items">
      <div className="card"> 
        <img
          src={props.im}
          style={{ width: "100px", height: "auto", paddingTop: "10px" }}
          alt="img1"
        />
        <h1 style={{ fontSize: "10px" }}>{props.productName}</h1>
        <p className="title">{props.productName}</p>
        <p>{`Discount ${props.discount}`}</p>
        <p
          style={{ display: "inLine" }}
        >{`RatingCount ${props.rating}`}</p>
        <span style={{ margin: "10px" }}>{`price:${props.price}`}</span>
      </div>
    </div>
  );
};    


export default List;
