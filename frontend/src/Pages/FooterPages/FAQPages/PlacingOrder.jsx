import React from 'react';
import '../FooterPages.css';

const PlacingOrder = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>PLACING ORDER/PAYMENT METHODS/COUPON CODES</h1>
    <h6>a. How do I place an order?</h6>
    <p>
      Click on the desired item, then click on the “Add to Cart” button. When you are ready to purchase, go to “My Cart” at the top right of the website and click “CHECKOUT”. At that point, you will need to fill out some information to create an account or log into an existing account. Choose your shipment method and method of payment and checkout. You will get an order confirmation e-mail once the order is placed.
    </p>

    <h6>b. I do not have a credit card. How can I still purchase your products?</h6>
    <p>You can pay with PayPal. Don’t have an account? You can create one, it’s easy!</p>

    <h6>c. How do I use my coupon code?</h6>
    <p>Be sure to enter it during the checkout process.</p>

    <h6>d. I have more than one coupon code. Can I use them in the same order?</h6>
    <p>You can only use one coupon code per order.</p>
  </section>
</div>
  )
}

export default PlacingOrder
