import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div class="dib tc">
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
