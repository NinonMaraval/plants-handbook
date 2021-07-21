import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlantItem from './PlantItem';
import './PlantsList.css';

function PlantsList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/plant`).then((response) => {
      setPlants(response.data);
    });
  }, []);
  return (
    <div className="container-plantslist">
      <h1 className="title-plantslist">Bienvenue dans ton carnet de plantes</h1>
      <div className="plants-results">
        {plants.map((plant) => {
          return (
            <PlantItem
              name={plant.name}
              description={plant.description}
              care={plant.care}
              category={plant.category}
              key={plant.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlantsList;
