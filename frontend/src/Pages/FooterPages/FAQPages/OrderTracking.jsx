import React from 'react';
import '../FooterPages.css';

const OrderTracking = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>ORDER TRACKING</h1>
    <h6>a. Does my order come with a tracking number?</h6>
    <p>
      All orders come with a tracking number. It will be provided to you in the shipping confirmation e-mail.
    </p>

    <h6>b. How do I track my order?</h6>
    <p>
      Use the tracking number provided in the shipping confirmation e-mail and track your order at the following website:
    </p>
    <p>www.usps.com (please allow 24 hours for status updates to begin after receiving your tracking code)
    </p>

    <h6>c. I cannot see much information regarding my order. Can you tell me what’s going on?</h6>
    <p>
      Please allow 24 hours for status updates to begin after receiving your tracking code.
    </p>
  </section>
</div>

  )
}

export default OrderTracking
