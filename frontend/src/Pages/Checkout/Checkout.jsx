import React from 'react';
import ExpressCheckout from '../../Components/Checkout/ExpressCheckout';
import DeliveryForm from '../../Components/Checkout/DeliveryForm';
import ShippingMethod from '../../Components/Checkout/ShippingMethod';
import PaymentMethod from '../../Components/Checkout/PaymentMethod';
import OrderSummary from '../../Components/Checkout/OrderSummary';
import '../../Components/Checkout/Checkout.css';
import Button from '../../Components/Secondary-Comps/Button';
const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <ExpressCheckout />
        <DeliveryForm />
        <ShippingMethod />
        <PaymentMethod />
        <Button inverse>Place Order</Button>
      </div>
      <div className="checkout-right">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout; 