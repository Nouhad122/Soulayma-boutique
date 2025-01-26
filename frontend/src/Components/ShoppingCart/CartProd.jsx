import React from 'react'
import { useDispatch } from 'react-redux'
import { VscTrash } from "react-icons/vsc"
import { FaPlus, FaMinus } from "react-icons/fa"
import { cartSliceActions } from '../../redux-toolkit/cart-slice'

const CartProd = (props) => {
    const {id, title, image1, price, totalPrice, quantity} = props.product;
    const dispatch = useDispatch();

    const handleAddToCart = () =>{
        dispatch(cartSliceActions.addToCart({
            id: id,
            title: title,
            image1: image1,
            price: price,
        }))
    }
    
    const handleCountReduction = () =>{
        dispatch(cartSliceActions.reduceProdCountFromCart(id));
    }

    const handleRemoveFromCart = () =>{
        dispatch(cartSliceActions.removeFromCart(id));
    }

  return (
    <tr>
        <td>
        <img src={image1} alt={title} className="cart-image" />
        <span>{title}</span>
        </td>
        <td>
        <button onClick={handleCountReduction}><FaMinus /></button>
        {quantity}
        <button onClick={handleAddToCart}><FaPlus /></button>
        </td>
        <td>{totalPrice}$</td>
        <td>
        <VscTrash onClick={handleRemoveFromCart} className='cart-trash' size={20} />
        </td>
      </tr>
  )
}

export default CartProd
