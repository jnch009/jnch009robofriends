import React, { Fragment } from "react";

const Filter = ({ handleInput }) => {
  const handleFilter = (e) => {
    handleInput(e.target.value.toLowerCase());
  };

  return (
    <Fragment>
      <input class="center w-50" type="text" onInput={handleFilter} />
    </Fragment>
  );
};

export default Filter;
