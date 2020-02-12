import React from 'react';
import AnswersBlockItem from '../answers-block-item';
import Birds from '../birds';
import './answers-block.css';

export default function AnswersBlock({currentSet, prizeItemId, onItemClick, guessed, newSet}) {
  const birds = Birds[currentSet].map((el) =>
    <AnswersBlockItem
      key={el.id}
      onClick={onItemClick}
      name={el.name}
      id={el.id}
      prizeItemId={prizeItemId}
      guessed={guessed}
      newSet={newSet}
    />
  );
  return (
    <div className="col-12 col-md-4">
      <ul className="answers-block">
        {birds}
      </ul>
    </div>
  );
};
