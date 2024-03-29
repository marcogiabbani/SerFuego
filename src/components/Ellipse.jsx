import React, {
  useRef, useState, useEffect
}from 'react'
import { gsap } from 'gsap';
import { artDisplay } from '../assets';

export default function Ellipse() {

  const imgRef = useRef([]);
  const [imagePositions, setImagePositions] = useState([]);

  const cx = 50;
  const cy = 15;
  const rx = 48;
  const ry = 13;
  const data = artDisplay
  const angleStep = (2 * Math.PI) / data.length;

  useEffect(() => {
    const positions = [];
    for (let index = 0; index < data.length ; index++) {
      const theta = index * angleStep;
      const x = ((window.innerWidth / 3.2)
       + ( window.innerWidth / 3.2) * Math.cos(theta));
      const y = ((window.innerHeight / 9 )
       + (window.innerHeight / 30) * Math.sin(theta) ) ;

      positions.push({
        x, y
      });
    }
    setImagePositions(positions);
  }, []);

  const handleMouseEnter = (index) => {
    console.log('mouse enters')
    gsap.to(imgRef.current[index], {
      autoAlpha: 1,
      duration: 0.000001
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      autoAlpha: 0,
      duration: 0.000001
    });
  };

  const foreignObjects = data.map((item, index) => {
    const theta = index * angleStep;
    const x = cx + rx * Math.cos(theta) -1.5;
    const y = cy + ry * Math.sin(theta) -1;

    return (
      <foreignObject key={index} x={x} y={y} width="3" height="2">

        <button
          className='text-[20px] opacity-1 z-10 w-full h-full'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          Invisible button
        </button>

      </foreignObject>
    );
  });

  return (
    <div>

      <svg viewBox="0 0 100 30" >
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} stroke="#000000" fill="none" strokeWidth="0.1"/>
        {foreignObjects}
      </svg>

      {artDisplay.map((art, index) => {
        return (
          <img
            key={art.id}
            ref={(el) => (imgRef.current[index] = el)}
            src={art.content}
            alt={art.id}
            className='z-1 pointer-events-none absolute opacity-0 max-w-[70vw] max-h-[70vh]'
            style={{
              position: 'absolute',
              left: `${imagePositions[index]?.x}px`,
              top: `${imagePositions[index]?.y}px`,
            }}
          />
        )
      })}

    </div>

  );
}
