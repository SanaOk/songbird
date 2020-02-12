import React from 'react';

import './description-block.css';
import Birds from '../birds';
import Image from '../image';
import AudioPlayer from '../audio-player';


export default function DescriptionBlock({descriptionId, currentSet}) {
  const currentItem = Birds[currentSet][descriptionId - 1];
  let currentImg;

  if (descriptionId <= 6) {
    currentImg = currentItem.image;
    return (
      <div className="col-12 col-md-8 pt-3 pt-md-0">
          <div className="description-block row col-12">
            <div className="col-12 col-md-4 text-center">
              <Image src={currentImg} alt={currentItem.name} />
            </div>
            <div className="col-12 col-md-8">
              <div className="name">{currentItem.name}</div>
              <div className="name">{currentItem.species}</div>
              <AudioPlayer src={currentItem.audio} id="description-audio" />
            </div>
            <p className="mt-3">{currentItem.description}</p>
          </div>
        </div>);
  } else {
    return <div className="col-12 col-md-8 pt-3 pt-md-0">
        <p className="description-block mb-0 col-12"> Послушайте плеер.<br />Выберите птицу из списка</p>
      </div>;
  }
}

