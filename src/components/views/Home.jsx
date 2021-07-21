import React from 'react';
import imagehome from '../../images/imagehome.jpg';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur Plants handbook</h1>
      <img src={imagehome} alt="home-img" />
    </div>
  );
}

export default Home;
