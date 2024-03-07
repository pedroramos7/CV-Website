// Header.js
import React from 'react';
import './Header.css'; // Link to the CSS file for styling

function Header() {
  return (
    <div className="header">
      <h1 className="name-title">Pedro Ramos</h1>
      <div className="header-right-content">
        <div className="nav-links">
          <a href="#about">Sobre</a>
          <a href="#publications">Publicações</a>
          <a href="#research">Blog de pesquisa</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
