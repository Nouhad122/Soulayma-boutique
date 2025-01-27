import React from 'react'
import { IoIosLock } from "react-icons/io"
import { useSelector } from 'react-redux'

const PlaceOrder = () => {
    const cartTotal = useSelector(state => state.cart.totalPriceOfAllProducts);
  return (
    <div className='place-order'>
        <div className='order-notes'>
        <h1>Add Order Note</h1>
        <textarea placeholder='How Can We Help You'/> 
        </div>

        <div className='amount-checkout'>
        <h1 className='total-amount'>Total: {cartTotal.toFixed(2)}$</h1>
        <p>Shipping & Taxes calculated at checkout</p>
        <Button><IoIosLock className='lock-icon'/> Secure Checkout</Button>
        </div>
    </div>
  )
}

export default PlaceOrder
