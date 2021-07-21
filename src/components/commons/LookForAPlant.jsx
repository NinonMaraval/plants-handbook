/* eslint-disable react/prop-types */
import React from 'react';

function LookForAPlant(props) {
  const { setSearchValue, searchValue } = props;
  return (
    <div>
      <input
        className="search-input"
        value={searchValue}
        type="text"
        placeholder="Tape le nom d'une plante..."
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export default LookForAPlant;
