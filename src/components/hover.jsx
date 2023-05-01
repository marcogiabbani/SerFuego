import React, { useState } from 'react';
import { artDisplay } from '../constants';
import './ImageDisplay.css';

function ImageDisplay() {
  const [index, setIndex] = useState(0);

  const handleHover = () => {
    setIndex((index + 3) % artDisplay.length);
  };

  const imagesToDisplay = artDisplay.slice(index, index + 3);

  return (
    <div className="flex flex-col w-52 m-auto">
      <button className="hover-button" onMouseEnter={handleHover}>
        Hover to Display Images
      </button>
      <div className="image-grid">
        {imagesToDisplay.map((image) => (
          <img key={image.id} src={image.content} alt={image.id} />
        ))}
      </div>
    </div>
  );
}

export default ImageDisplay;