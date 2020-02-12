<<<<<<< HEAD
import React from 'react';

import './app-header-nav-item.css';

export default function AppHeaderNavItem({active, name}) {
  let claas = 'nav-list-item ';
  if (active) {
    claas += 'active';
  }
  return (
    <li className={claas}>{name}</li>
  );
=======
import React from 'react';

import './app-header-nav-item.css';

export default function AppHeaderNavItem({active, name}) {
  let claas = 'nav-list-item ';
  if (active) {
    claas += 'active';
  }
  return (
    <li className={claas}>{name}</li>
  );
>>>>>>> Additions
}