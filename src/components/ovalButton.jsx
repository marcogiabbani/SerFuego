import React from 'react';

function OvalButton() {
  return (
    <svg viewBox="0 0 100 50">
      <ellipse cx="50" cy="25" rx="48" ry="24" stroke="#000000" fill="none" strokeWidth="0.1" />
      <foreignObject x="48" y="0" width="30" height="20" className='flex'>
        <button onClick={() => alert('Button clicked!')} className='text-[2px]'>Uno</button>
      </foreignObject>
      <foreignObject x="96" y="24" width="30" height="20" className='flex'>
        <button onClick={() => alert('Button clicked!')} className='text-[2px]'>Dos</button>
      </foreignObject>
      <foreignObject x="12" y="8" width="30" height="20" className='flex'>
        <button onClick={() => alert('Button clicked!')} className='text-[2px]'>Tres</button>
      </foreignObject>
    </svg>
  );
}

export default OvalButton;