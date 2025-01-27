import React from 'react'
import CartProd from './CartProd'
import { useSelector } from 'react-redux'

const TableBody = () => {
    const cartProducts = useSelector(state => state.cart.products);
  return (
    <tbody>
        {cartProducts.map(product => (
            <CartProd
                key={product.id}
                product={{ 
                id: product.id,
                title: product.title,
                image1: product.image1,
                quantity: product.quantity,
                totalPrice: product.totalPrice,
                price: product.price 
                }}
            />
        ))}
    </tbody>
  )
}

export default TableBody
