import React from 'react'
import "./Card.scss"

const Card = ({data}) => {

  return (
    <div className='card'>
      <img className='card__img' src={data.image_url} alt="" />
      <div className='card__name'>{data.name}</div>
      <div className='card__tagline'>Tag: {data.tagline}</div>
      <div className='card__firstbrewed'>First brewed: {data.first_brewed}</div>
      <div className='card__description'>Description: <br/> {data.description}</div>

    </div>
  )
}

export default Card