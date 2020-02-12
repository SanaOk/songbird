import React from 'react';

import './image.css';

export default function Image({src, alt}) {
    return (
      <img src={src} alt={alt} className="img img-fluid" />
    );
}
