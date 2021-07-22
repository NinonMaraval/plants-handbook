import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LookForAPlant from '../commons/LookForAPlant';
import PlantItem from './PlantItem';
import './PlantsList.css';

function PlantsList() {
  const [plants, setPlants] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/plant`).then((response) => {
      setPlants(response.data);
    });
  }, []);

  return (
    <div className="container-plantslist">
      <h1 className="title">Bienvenue dans ton carnet de plantes</h1>
      <div className="search-engine">
        <h2>Cherche une plante !</h2>
        <LookForAPlant
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="plants-results">
        {plants
          .filter(
            (plant) =>
              plant.name.toLowerCase().includes(searchValue) ||
              plant.description.toLowerCase().includes(searchValue)
          )
          .map((plant) => {
            return (
              <PlantItem
                name={plant.name}
                description={plant.description}
                care={plant.care}
                category={plant.category}
                id={plant.id}
                key={plant.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PlantsList;
