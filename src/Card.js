import React, { Component, Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <Fragment>
        <h2>{name}</h2>
        <p>{email}</p>
      </Fragment>
    </div>
  );
};

export default Card;
