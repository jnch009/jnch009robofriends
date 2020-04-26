import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const robotArray = robots.map((robot) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));

  return <Fragment>{robotArray}</Fragment>;
};

export default CardList;
