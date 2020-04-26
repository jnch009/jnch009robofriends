import React, { Fragment } from "react";

const Filter = ({ handleInput }) => {
  const handleFilter = (e) => {
    handleInput(e.target.value.toLowerCase());
  };

  return (
    <Fragment>
      <input
        className="pa3 b--green mb2 bg-light-blue ba"
        type="search"
        placeholder="Search here"
        onInput={handleFilter}
      />
    </Fragment>
  );
};

export default Filter;
