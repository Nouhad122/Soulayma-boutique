import React from 'react'
import Button from '../Secondary-Comps/Button'

const EmptyCart = () => {
  return (
    <div className='cart-is-empty'>
        <h1>Your cart is empty</h1>
        <Button url="/shop/all/Hijabs/page/1" className="empty-cart-btn">Shop All Hijabs</Button>
    </div>
  )
}

export default EmptyCart
