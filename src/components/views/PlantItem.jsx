/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './PlantItem.css';

function PlantItem(props) {
  const { name, description, care, category, id } = props;
  const history = useHistory(null);
  const handleDelete = () => {
    console.log(`${process.env.REACT_APP_BACKEND_URL}/plant/${id}`);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/plant/${id}`)
      .then(() => {
        alert('Plante supprimée !');
        history.push('/list');
      });
  };
  return (
    <div className="box-item">
      <div className="plant-item">
        <h1 className="name">{name}</h1>
        <p className="plant-description">{description}</p>
        <p className="plant-description">{care}</p>
        <p>{category}</p>
        <button
          className="button-plantitem"
          type="button"
          onClick={handleDelete}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default PlantItem;
// TODO : faire que le button supprime de la BDD + mettre une poubelle à la place de la croix
