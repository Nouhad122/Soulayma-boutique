import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideCompContext from '../../store/SideCompContext';
import Modal from '../../Components/Secondary-Comps/Modal';
import ExpressCheckout from '../../Components/Checkout/ExpressCheckout';
import DeliveryForm from '../../Components/Checkout/DeliveryForm';
import ShippingMethod from '../../Components/Checkout/ShippingMethod';
import PaymentMethod from '../../Components/Checkout/PaymentMethod';
import OrderSummary from '../../Components/Checkout/OrderSummary';
import '../../Components/Checkout/Checkout.css';
import Button from '../../Components/Secondary-Comps/Button';
import { placeOrder } from '../../use/useHttp';
import { cartSliceActions } from '../../redux-toolkit/cart-slice';

const Checkout = () => {
  const { modalContent, showContentInModal, hideContentInModal } = useContext(SideCompContext);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    showContentInModal();
  };

  const handleConfirmOrder = async () => {
    try {
      const order = {
        items: cart.products.map(item => ({
          productId: item.id,
          quantity: item.quantity
        })),
        totalAmount: cart.totalPriceOfAllProducts
      };
      await placeOrder(order);
      dispatch(cartSliceActions.clearCart());
      hideContentInModal();
      navigate('/');
    } catch (err) {
      hideContentInModal();
      alert('Order failed!');
    }
  };

  return (
    <>
      {modalContent && (
        <Modal
          title="Confirm Order"
          message="Are you sure you want to place this order? By confirming, you agree to our terms and conditions."
          onNeededAction={handleConfirmOrder}
          closeModal={hideContentInModal}
        />
      )}
      <div className="checkout-container">
        <div className="checkout-left">
          <ExpressCheckout />
          <DeliveryForm />
          <ShippingMethod />
          <PaymentMethod />
          <Button inverse disabled={cart.totalQuantity === 0} onClick={handlePlaceOrder}>Place Order</Button>
        </div>
        <div className="checkout-right">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default Checkout; 