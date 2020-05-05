import React from 'react';
import Collection1 from './Collection1.js';
import Collection2 from './Collection2.js';
import Collection3 from './Collection3.js';

function Gallery() {
  return(
    <div className="col3">
      <Collection1 />
      <Collection2 />
      <Collection3 />
    </div>
  )
}

export default Gallery;
