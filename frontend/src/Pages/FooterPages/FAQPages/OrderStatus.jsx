import React from 'react';
import '../FooterPages.css';

const OrderStatus = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>ORDER STATUS</h1>
    <h6>a. What is the status of my order?</h6>
    <p>
      You will receive an e-mail confirming that your order has been placed and
      another e-mail letting you know that your order was fulfilled and shipped.
    </p>
    <p>
      You can also check the status of your order by logging into your account
      and checking order status.
    </p>

    <h6>b. Has my order been shipped yet?</h6>
    <p>
      You will receive a shipping confirmation e-mail once your order has been
      shipped.
    </p>

    <h6>c. What does awaiting fulfilment/awaiting shipment mean?</h6>
    <p>
      Awaiting shipment/awaiting fulfilment means your order has not been
      shipped yet. Hang tight, it will be shipped soon!
    </p>

    <h6>d. What does shipped/fulfilled mean?</h6>
    <p>
      Shipped/fulfilled means your order has been shipped. You can now track
      your order. See order tracking in
      the FAQ for details.
    </p>

    <h6>e. How long does it take to ship my order?</h6>
    <p>
      We ship out orders the same day if shipped before 1 pm EST or the next day
      for orders shipped after 1 pm EST.
    </p>
  </section>
</div>
  )
}

export default OrderStatus
