import React from 'react';
import {Link} from 'react-router-dom';

import {AuthContext, GetSessionDetails} from '../../context/AuthContext';
import {DropMenu} from './DropMenu';
import '../general.css';

export const Navigation = () => {
  const {onLogout} = AuthContext;

  const {isLogged} = GetSessionDetails();

  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Practice 6
          </Link>

          <DropMenu />

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              {!isLogged && (
                <Link className="nav-item nav-link decoration" to="/login">
                  Log In<span className="sr-only"></span>
                </Link>
              )}

              {isLogged && (
                <Link className="nav-item nav-link decoration" to="/adverts">
                  User Session
                </Link>
              )}
              {isLogged && (
                <Link className="nav-item nav-link decoration" to="/filter">
                  Filter Ads
                </Link>
              )}
              {isLogged && (
                <Link className="nav-item nav-link decoration" to="/new-advert">
                  New Advert
                </Link>
              )}
              {isLogged && (
                <Link className="nav-item nav-link decoration" to="/" onClick={onLogout}>
                  Log Out
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
