import React from 'react';
import '../FooterPages.css';

const OrderChanges = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>ORDER CHANGES/ORDER CANCELLATION (BEFORE IT IS SHIPPED)</h1>
    <h6>a. I need to make a change to my order. Can you make the change?</h6>
    <p>
      Yes, in most cases. As long as your order hasn’t been packed, we can most likely make the change you are requesting. Be sure to contact us as soon as possible and include your order number in the e-mail and "ORDER CHANGE" in the subject.
    </p>

    <h6>b. Can you cancel my order?</h6>
    <p>
      Yes, in most cases. As long as your order hasn’t been packed, we can most likely cancel your order. Be sure to contact us as soon as possible and include your order number in the e-mail and "CANCELLATION" in the subject.
    </p>

    <h6>c. I forgot to apply a discount code. Can you add it for me?</h6>
    <p>
      As long as you placed your order when the code was valid and contact us within 48 hours, we will add it for you or refund the difference.
    </p>
  </section>
</div>

  )
}

export default OrderChanges
