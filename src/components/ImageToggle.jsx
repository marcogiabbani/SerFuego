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
        ease: 'power2.out'
      });

      // Fade in the newly selected images
      gsap.to(images.current[index], {
        opacity: 1,
        ease: 'power2.in'

      });

      setActiveButton(index);
    } else if (activeButton === index) {
      gsap.to(images.current[activeButton], {
        opacity: 0,
        ease: 'power2.out'

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

      <svg viewBox="0 0 100 30">
        <ellipse cx="50" cy="15" rx="48" ry="13" stroke="#000000" fill="none" strokeWidth="0.1" />
        <foreignObject x="48" y="0" width="30" height="20" className='flex'>
          <svg onClick={() => handleButtonClick(0)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" width="4" height="5"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00333 5.43284C10.0138 5.04231 11.0994 4.91335 12.1676 5.05694C13.2359 5.20054 14.2552 5.61245 15.1388 6.25757C16.0223 6.9027 16.7439 7.76194 17.2421 8.76211C17.7403 9.76228 18.0003 10.8738 18 12.0019C17.9997 13.13 17.7391 14.2413 17.2404 15.2412C16.7417 16.2411 16.0197 17.0999 15.1358 17.7446C14.252 18.3892 13.2324 18.8005 12.1641 18.9435C11.0958 19.0865 10.0102 18.957 9 18.5659C9 18.5659 13 16.1176 13 12C13 7.88235 9.00333 5.43284 9.00333 5.43284Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"></path> </g></svg>
        </foreignObject>
        <foreignObject x="76" y="23" width="30" height="20" className='flex'>
          <svg onClick={() => handleButtonClick(1)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" width="4" height="5"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00333 5.43284C10.0138 5.04231 11.0994 4.91335 12.1676 5.05694C13.2359 5.20054 14.2552 5.61245 15.1388 6.25757C16.0223 6.9027 16.7439 7.76194 17.2421 8.76211C17.7403 9.76228 18.0003 10.8738 18 12.0019C17.9997 13.13 17.7391 14.2413 17.2404 15.2412C16.7417 16.2411 16.0197 17.0999 15.1358 17.7446C14.252 18.3892 13.2324 18.8005 12.1641 18.9435C11.0958 19.0865 10.0102 18.957 9 18.5659C9 18.5659 13 16.1176 13 12C13 7.88235 9.00333 5.43284 9.00333 5.43284Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"></path> </g></svg>
        </foreignObject>
        <foreignObject x="7" y="6" width="30" height="20" className='flex'>
          <svg onClick={() => handleButtonClick(2)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" width="4" height="5"><g id="SVGRepo_bgCarrier" strokeWidth="1"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00333 5.43284C10.0138 5.04231 11.0994 4.91335 12.1676 5.05694C13.2359 5.20054 14.2552 5.61245 15.1388 6.25757C16.0223 6.9027 16.7439 7.76194 17.2421 8.76211C17.7403 9.76228 18.0003 10.8738 18 12.0019C17.9997 13.13 17.7391 14.2413 17.2404 15.2412C16.7417 16.2411 16.0197 17.0999 15.1358 17.7446C14.252 18.3892 13.2324 18.8005 12.1641 18.9435C11.0958 19.0865 10.0102 18.957 9 18.5659C9 18.5659 13 16.1176 13 12C13 7.88235 9.00333 5.43284 9.00333 5.43284Z" stroke="#000000" strokeWidth="1" strokeLinejoin="round"></path> </g></svg>
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
        /><div>
        </div>
      </div>

    </div>
  );
}

export default ImageToggle;