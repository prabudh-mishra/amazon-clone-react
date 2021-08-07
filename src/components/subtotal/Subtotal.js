import React from 'react'
import CurrencyFormat from 'react-currency-format'

import './Subtotal.css'

// Stopped at 2:00:33

const SubTotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              {/* Subtotal ({basket.length} items): <strong>{value}</strong> */}
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={300.0}
        // value={getBasketTotal(basket)} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
