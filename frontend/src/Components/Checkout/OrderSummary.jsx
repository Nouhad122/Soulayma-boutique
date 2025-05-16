import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';

const OrderSummary = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className="order-summary">
      <div className="cart-items">
        {cart.products.map(product => (
          <div className="cart-item" key={product.id}>
            <img src={product.image1} alt={product.title} />
            <div>
              <div>{product.title}</div>
              <div className="cart-item-sub">Qty: {product.quantity}</div>
            </div>
            <div>${Number(product.totalPrice).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <input type="text" placeholder="Discount code or gift card" className="checkout-input" />
      <button className="apply-btn">Apply</button>
      <div className="summary-row">
        Subtotal · {cart.totalQuantity} items <span>${cart.totalPriceOfAllProducts.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        Shipping <span className="shipping-free">FREE</span>
      </div>
      <div className="summary-total">
        Total <span>USD ${cart.totalPriceOfAllProducts.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary; 