import React from "react";
import data from "./data.json";
import CardItem from "./CardItem";

function Card() {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Card;