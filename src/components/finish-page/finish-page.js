import React from 'react';

import './finish-page.css';
import img from '../../img/8.jpg';

export default function FinishPage({score, onStartClick}) {
  const maxScore = 30;

  if (score === maxScore) {
    return (
      <div className="text-center">
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
          <p>Хм...Есть подозрение что Вы один из них...</p>
          <img src={img} alt="owl" className="img-fluid" />
      </div>);
  } else {
    return (
      <div className="text-center final-page">
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
          <button className="p-5 button active" onClick={onStartClick}>Пройти викторину еще раз</button>
        </div>);
  }
}
