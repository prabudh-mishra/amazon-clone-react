import React from 'react'
import Subtotal from '../subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'

import './Checkout.css'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal basket={basket} />
      </div>
    </div>
  )
}

export default Checkout
