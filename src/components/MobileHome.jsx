import React, { useState } from 'react'

import { artDisplay } from '../assets'

export default function MobileHome() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    if (selectedImage === imageId) {
      // If the selected image is clicked again, set it to null
      //to return to gallery view
      setSelectedImage(null);
    } else {
      // Otherwise, set the clicked image as the selected image
      setSelectedImage(imageId);
    }
  };
  return (
    <div>

      <div className="columns-2 gap-1 p-1">
        {artDisplay.map(art => {
          const isImageSelected = selectedImage === art.id;
          return(

            <img
              className={`w-full p-1 ${isImageSelected
                ? 'fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full object-contain'
                : ''}`}
              src={art.content}
              alt={art.id}
              key={art.id}
              onClick={() => handleImageClick(art.id)}/>

          )})}

      </div>
    </div>
  )
}
