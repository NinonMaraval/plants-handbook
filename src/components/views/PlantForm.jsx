/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FormInput from '../commons/FormInput';
import './PlantForm.css';

function PlantForm() {
  const [select, setSelect] = useState([]);
  const [plant, setPlant] = useState({
    name: '',
    description: '',
    care: '',
    category_id: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/plant`, plant)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Nouvelle plante ajoutée avec succès!',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      })
      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Echec ! As-tu vraiment la main verte ?',
          showConfirmButton: false,
          timer: 3000,
        })
      );
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/category`)
      .then((response) => {
        setSelect(response.data);
      });
  }, []);

  return (
    <div>
      <form className="plantGlobal" onSubmit={handleSubmit}>
        <h1 className="addPlant">Ajouter une plante </h1>
        <FormInput
          classInput
          label="Nom"
          name="nom"
          value={plant}
          setValue={setPlant}
        />
        <label htmlFor="Description">
          <span className="textAreaLabel">Description:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            rows="10"
            id="Description"
            onChange={(e) =>
              setPlant({ ...plant, description: e.target.value })
            }
            required
          />
        </label>
        <FormInput
          label="Entretien"
          name="entretien"
          type="text"
          value={plant}
          setValue={setPlant}
        />
        <label htmlFor="category">
          <span className="select">Catégorie: </span>
          <select
            className="selectField"
            required
            name="category_id"
            id="category"
            onChange={(event) => {
              setPlant({ ...plant, category_id: event.target.value });
            }}
          >
            <option value="">--- Choisissez une catégorie</option>
            {select.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        <div className="container">
          <input className="bouton" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}

export default PlantForm;
