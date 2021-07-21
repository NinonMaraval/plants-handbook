/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './PlantItem.css';

function PlantItem(props) {
  const { name, description, care, category } = props;
  const [removePlant, setRemovePlant] = useState(false);
  return (
    <>
      {!removePlant && (
        <div className="Game">
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{care}</p>
          <p>{category}</p>
          <button
            type="button"
            onClick={function () {
              setRemovePlant(true);
            }}
          >
            <strong>Supprimer ma plante</strong>
          </button>
        </div>
      )}
    </>
  );
}

export default PlantItem;
