import React, {
  useRef, useState, useEffect
} from 'react';
import { gsap } from 'gsap';
import { artDisplay } from '../constants';

function ImageToggle() {
  const [activeButton, setActiveButton] = useState(-1);
  const images = useRef([]);
  const [imagePositions, setImagePositions] = useState([]);

  function handleButtonClick(index) {
    if (activeButton !== index) {
      // Fade out the current active images
      gsap.to(images.current[activeButton], {
        opacity: 0,
        ease: 'none'
      });

      // Fade in the newly selected images
      gsap.to(images.current[index], {
        opacity: 1,
        ease: 'none'

      });

      setActiveButton(index);
    } else if (activeButton === index) {
      gsap.to(images.current[activeButton], {
        opacity: 0,
        ease: 'none'

      });
      setActiveButton(-1)
    }
  }

  useEffect(() => {
    // Generate random positions for the images
    const positions = [];
    for (let i = 0; i < images.current.length ; i++) {
      const x = Math.random() * (window.innerWidth - 800);
      const y = Math.random() * (window.innerHeight - 800);
      positions.push({
        x, y
      });
    }
    setImagePositions(positions);
  }, []);

  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 100 50">
        <ellipse cx="50" cy="25" rx="48" ry="24" stroke="#000000" fill="none" strokeWidth="0.1" />
        <foreignObject x="48" y="0" width="30" height="20" className='flex'>
          <button
            className={`${
              activeButton === 0
                ? 'bg-[#FFB0FE]'
                : 'bg-black'
            } text-white w-1 h-1 rounded-full z-10 pointer-events-auto`}
            onClick={() => handleButtonClick(0)}
          />
        </foreignObject>
        <foreignObject x="96" y="24" width="30" height="20" className='flex'>
          <button
            className={`${
              activeButton === 1
                ? 'bg-[#5A2CFF]'
                : 'bg-black'
            } text-white w-1 h-1 rounded-full z-10 pointer-events-auto`}
            onClick={() => handleButtonClick(1)}
          />
        </foreignObject>
        <foreignObject x="12" y="8" width="30" height="20" className='flex'>
          <button
            className={`${
              activeButton === 2
                ? 'bg-[#13A656]'
                : 'bg-black'
            } text-white w-1 h-1 rounded-full z-10 pointer-events-auto`}
            onClick={() => handleButtonClick(2)}
          />
        </foreignObject>
      </svg>

      <div className="flex flex-col justify-center space-y-4">
        <img
          ref={(el) => (images.current[0] = el)}
          src={artDisplay[0].content}
          alt="Image 1"
          className={`transition-opacity duration-500 ${
            activeButton === 0
              ? 'opacity-100'
              : 'opacity-0'
          } z-1 pointer-events-none`}
          style={{
            position: 'absolute',
            left: `${imagePositions[0]?.x}px`,
            top: `${imagePositions[0]?.y}px`,
          }}
        />
        <img
          ref={(el) => (images.current[1] = el)}
          src={artDisplay[1].content}
          alt="Image 2"
          className={`transition-opacity duration-500 ${
            activeButton === 1
              ? 'opacity-100'
              : 'opacity-0'
          } z-1 pointer-events-none`}
          style={{
            position: 'absolute',
            left: `${imagePositions[1]?.x}px`,
            top: `${imagePositions[1]?.y}px`,
          }}
        />
        <img
          ref={(el) => (images.current[2] = el)}
          src={artDisplay[2].content}
          alt="Image 3"
          className={'transition-opacity duration-500 opacity-0 z-1 pointer-events-none'}
          style={{
            position: 'absolute',
            left: `${imagePositions[2]?.x}px`,
            top: `${imagePositions[2]?.y}px`,
          }}
        />

      </div>
    </div>
  );
}

export default ImageToggle;