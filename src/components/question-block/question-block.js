import React from 'react';

import Image from '../image';
import unknownBird from '../../img/silhouette-3347558_960_720.png';
import AudioPlayer from '../audio-player';
import './question-block.css';

export default function QuestionBlock({guessed, prizeItem}) {
  let name;
  let image;

  if (guessed) {
    name = prizeItem.name;
    image = prizeItem.image;
  } else {
    name = '******';
    image = unknownBird;
  }

  return (<div className="question-block">
      <div className="row">
        <div className="col-12 col-md-4 text-center">
          <Image src={image} alt={name} />
        </div>
        <div className="col-12 col-md-8">
          <div className="name">{name}</div>
          <AudioPlayer src={prizeItem.audio} id="question-audio" />
        </div>
      </div>
    </div>);
}
