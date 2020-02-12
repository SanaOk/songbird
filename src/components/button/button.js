import React from 'react';
import './button.css';

export default function Button({guessed, onNextClick}) {
  let state;
  let claas = 'button ';

  if (!guessed) {
    state = 'disabled';
  } else {
    claas += 'active';
  }
  return (
    <button className={claas} onClick={onNextClick} disabled={state}>Дальше</button>
  );
}
