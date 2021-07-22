import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../images/home2.svg';
import add from '../../images/add.svg';
import flower from '../../images/flower.svg';
import './NavigationList.css';

function NavigationList() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo-navbar" src={home} alt="logo-home" />
        </Link>
        <Link to="/add">
          <img className="logo-navbar" src={add} alt="logo-add" />
        </Link>
        <Link to="/list">
          <img className="logo-navbar" src={flower} alt="logo-list" />
        </Link>
      </div>
    </>
  );
}

export default NavigationList;
