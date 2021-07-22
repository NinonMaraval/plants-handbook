import React from 'react';
import { Link } from 'react-router-dom';
import imagehome from '../../images/imagehome.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue sur</h1>
      <h1>Plants handbook</h1>
      <img className="home-pic" src={imagehome} alt="home-img" />
      <p>Le carnet d&apos;entretien de vos plantes. </p>
      <div className="home-buttons">
        <Link to="/list">
          <input className="links" type="button" value="Consulter mon carnet" />
        </Link>
        <br />
        <Link to="/add">
          <input
            className="links"
            type="button"
            value="Ajouter une plante à mon carnet"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
