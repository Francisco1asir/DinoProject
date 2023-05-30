import React, { useState } from 'react';
import { routes } from './routes';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import TransitionsModal from '../pages/Modal';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="burger">
        <input type="checkbox" id="check" checked={menuOpen} onChange={handleBurgerClick} />
        <label htmlFor="check" id="lblcheck">
          <div className="bgs">
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="bg3"></div>
          </div>
        </label>
        <div className={`cntburger ${menuOpen ? 'open' : ''}`}>
          {routes.map(({ path, name }) => (
            <NavLink className="opcion" to={path} onClick={handleClick}>
              {name}
            </NavLink>
          ))}
        </div>
      </nav>

      <nav id="ln1">
        {routes.map(({ path, name }) => (
          <NavLink className="opcion" to={path}>
            {name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
