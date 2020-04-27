import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib w-auto-l br2 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <Fragment>
        <h2 className="f5">{name}</h2>
        <p className="f7">{email}</p>
      </Fragment>
    </div>
  );
};

export default Card;
