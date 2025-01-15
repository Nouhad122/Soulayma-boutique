import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VscTrash } from "react-icons/vsc";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { decreaseQuantityAction, increaseQuantityAction, removeFromCartAction, setCartFromStorageAction } from '../../redux/actions/cartActions';
import './ShoppingCart.css';
import Button from '../Secondary-Comps/Button';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, cartTotal } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (savedCart.length > 0) {
    dispatch(setCartFromStorageAction(savedCart));
  }
}, [dispatch]);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

  
  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product.id));
  };
  
  const increaseQuantity = (product) =>{
    dispatch(increaseQuantityAction(product.id));
  }

  const decreaseQuantity = (product) =>{
    dispatch(decreaseQuantityAction(product.id));
  }

  return (
    <div className='shopping-cart'>
      <div className='cart-text'>
          <h1>Cart</h1>
      </div>
      {cart.length > 0 ? (
        <div className='table-container'>
        <table className="cart-table">
          <thead>
            <tr className='headers-tr'>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image1} alt={product.title} className="cart-image" />
                  <span>{product.title}</span>
                </td>
                <td>
                  <button onClick={() => decreaseQuantity(product)}><FaMinus/></button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product)}><FaPlus/></button>
                </td>
                <td>{(product.price * product.quantity).toFixed(2)}$</td>
                <td>
                  <VscTrash className='cart-trash' size={20} onClick={() => removeFromCart(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
      ) : (
        <div className='cart-is-empty'>
          <h1>Your cart is empty</h1>
          <Button url="/shop/all/Hijabs/page/1" className="empty-cart-btn">Shop All Hijabs</Button>
        </div>
        
      )}
    </div>
  );
}

export default ShoppingCart;
