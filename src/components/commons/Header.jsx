import React from 'react';
import './Header.css';
import logohandbook from '../../images/logohandbook.png';
import apptitle from '../../images/apptitle.png';

function Header() {
  return (
    <div className="header">
      <img src={apptitle} alt="app-title" />
      <img src={logohandbook} alt="logo-handbook" />
    </div>
  );
}

export default Header;
