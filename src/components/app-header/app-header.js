import React from 'react';

import logo from '../../img/Songbird-Logo-2019.png';
import './app-header.css';
import AppHeaderNav from '../app-header-nav';

export default function AppHeader({score, currentSet}) {

  return (
    <header className="header">
      <div className="d-flex justify-content-between">
        <img src={logo} alt="logo" className="logo col-6 col-sm-4 col-md-3" />
          <span className="score">Счет: {score}</span>
      </div>
      <AppHeaderNav currentSet={currentSet} />
    </header>);
}