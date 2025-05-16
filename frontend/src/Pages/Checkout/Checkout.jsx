import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import ExpressCheckout from '../../Components/Checkout/ExpressCheckout';
import DeliveryForm from '../../Components/Checkout/DeliveryForm';
import ShippingMethod from '../../Components/Checkout/ShippingMethod';
import PaymentMethod from '../../Components/Checkout/PaymentMethod';
import OrderSummary from '../../Components/Checkout/OrderSummary';
import '../../Components/Checkout/Checkout.css';
import Button from '../../Components/Secondary-Comps/Button';

const Checkout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <ExpressCheckout />
        <DeliveryForm />
        <ShippingMethod />
        <PaymentMethod />
        <Button inverse disabled={cart.totalQuantity === 0}>Place Order</Button>
      </div>
      <div className="checkout-right">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout; 