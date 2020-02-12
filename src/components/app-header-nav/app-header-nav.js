import React from 'react';

import './app-header-nav.css';
import AppHeaderNavItem from '../app-header-nav-item';

export default function AppHeaderNav({currentSet}) {
  const categoriesNames = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  let categories = categoriesNames.map((el, inx) => {
    let active;
    if (currentSet === inx) {
      active = true;
    }
    return <AppHeaderNavItem name={el} active={active} key={inx} />;
  });
  return (
    <nav>
      <ul className="stages d-flex justify-content-center flex-wrap">
        {categories}
      </ul>
    </nav>
  );
}