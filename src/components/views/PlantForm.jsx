/* eslint-disable no-alert */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import flower2 from '../../images/flower2.png';
import './PlantForm.css';

function PlantForm() {
  const [select, setSelect] = useState([]);
  const history = useHistory(null);
  const [plant, setPlant] = useState({
    title: '',
    description: '',
    care: '',
    category_id: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/list');

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
            timer: 5000,
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
        <img className="flower" src={flower2} alt="flower-pic" />
        <label htmlFor="Nom">
          <span className="textAreaLabel">Nom:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            rows="2"
            id="Nom"
            onChange={(e) => setPlant({ ...plant, title: e.target.value })}
            required
          />
        </label>
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
        <label htmlFor="Entretien">
          <span className="textAreaLabel">Entretien:</span>
          <textarea
            className="textArea"
            maxLength="1200"
            rows="10"
            id="Entretien"
            onChange={(e) => setPlant({ ...plant, care: e.target.value })}
            required
          />
        </label>
        <label htmlFor="category">
          <span className="select" />
          <select
            className="selectField"
            required
            name="category_id"
            id="category"
            onChange={(event) => {
              setPlant({ ...plant, category_id: event.target.value });
            }}
          >
            <option className="selectField" value="">
              Catégorie de plantes
            </option>
            {select.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        <div className="container-button">
          <input className="button" type="submit" value="Ajouter !" />
        </div>
      </form>
    </div>
  );
}

export default PlantForm;
