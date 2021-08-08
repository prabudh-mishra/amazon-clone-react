import React from 'react'
import { useStateValue } from '../../StateProvider'

import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  console.log('This is the basket >>> ', basket)
  const addToBasket = () => {
    // dispatch action to data layer (reducer)
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>
            })}
        </div>
      </div>
      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
