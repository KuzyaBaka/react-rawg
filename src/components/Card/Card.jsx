import React from 'react'

function Card({name, img}) {
  return (
    <div>
        <img src={img} alt={img} />
        <p>{name}</p>
    </div>
  )
}

export default Card