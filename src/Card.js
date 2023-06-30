import React from 'react'
import './Card.css'

function Card({IMG,ID,NAME}) {
  return (
    <>
    <div className='wholeCard'>
    <div className='card'>
    <div className='id '>
        {ID}
    </div>
    <div className='image'>
        <img src={IMG}></img>
    </div>
    <div className='name'>
        <h1>{NAME}</h1>
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Card