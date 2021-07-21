/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './PlantItem.css';

function PlantItem(props) {
  const { name, description, care, category } = props;
  const [removePlant, setRemovePlant] = useState(false);
  return (
    <div className="box-item">
      {!removePlant && (
        <div className="plant-item">
          <h1 className="name">{name}</h1>
          <p className="plant-description">{description}</p>
          <p className="plant-description">{care}</p>
          <p>{category}</p>
          <button
            className="button-plantitem"
            type="button"
            onClick={function () {
              setRemovePlant(true);
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default PlantItem;
