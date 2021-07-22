/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './PlantItem.css';

function PlantItem(props) {
  const { name, description, care, category, id } = props;
  console.log(category);
  const history = useHistory(null);
  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/plant/${id}`)
      .then(() => {
        alert('Plante supprimée !');
        refreshPage();
        history.push('/list');
      });
  };
  return (
    <div className="box-item">
      <div className="plant-item">
        <h1 className="name">{name}</h1>
        <p className="plant-description">{description}</p>
        <p className="plant-description">{care}</p>
        <p>Catégorie : {category}</p>
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
