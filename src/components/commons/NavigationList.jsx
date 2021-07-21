import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../images/home.svg';
import plus from '../../images/plus.png';
import list from '../../images/list.svg';
import './NavigationList.css';

function NavigationList() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img className="logo-navbar" src={home} alt="logo-home" />
        </Link>
        <Link to="/add">
          <img className="logo-navbar" src={plus} alt="logo-add" />
        </Link>
        <Link to="/list">
          <img className="logo-navbar" src={list} alt="logo-list" />
        </Link>
      </div>
    </>
  );
}

export default NavigationList;
