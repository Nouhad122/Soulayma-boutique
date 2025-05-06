import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { VscTrash } from "react-icons/vsc"
import { FaPlus, FaMinus } from "react-icons/fa"
import { cartSliceActions } from '../../redux-toolkit/cart-slice'
import SideCompContext from '../../store/SideCompContext'
import Modal from '../Secondary-Comps/Modal'

const CartProd = (props) => {
    const { modalContent, showContentInModal, modalProductId, setModalProductId } = useContext(SideCompContext);
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
        if (modalProductId) {
            dispatch(cartSliceActions.removeFromCart(modalProductId));
            setModalProductId(null);
        }
    }

  return (
    <>
        {
         modalContent &&
            <Modal
            title="Remove Item from Cart" 
            message="Are you sure you want to remove this item from your cart? This action cannot be undone." 
            onNeededAction={handleRemoveFromCart}
            />
        }
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
            <VscTrash onClick={() => { setModalProductId(id); showContentInModal(); }} className='cart-trash' size={20} />
            </td>
        </tr>
    </>
  )
}

export default CartProd
