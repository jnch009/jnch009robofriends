import React, { Fragment } from "react";

const Filter = ({ handleInput }) => {
  return (
    <Fragment>
      <input
        className="pa3 b--green mb2 bg-light-blue ba"
        type="search"
        placeholder="Search here"
        onInput={handleInput}
      />
    </Fragment>
  );
};

export default Filter;
