import React from 'react'

import { artDisplay } from '../assets'

export default function MobileHome() {
  return (
    <div>

      <div className="columns-2 gap-1 p-1">
        {artDisplay.map(art => {
          return(
            <img
              className="w-full p-1"
              key={art.id}
              src={art.content}
              alt={art.id}/>
          )})}

      </div>
    </div>
  )
}
