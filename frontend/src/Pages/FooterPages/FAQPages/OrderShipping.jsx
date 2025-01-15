import React from 'react';
import '../FooterPages.css';

const OrderShipping = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>ORDER SHIPPING</h1>
    <h6>a. Do you ship to my country?</h6>
    <p>Yes. We ship worldwide.</p>

    <h6>b. How long do I have to wait to receive my parcel?</h6>
    <p>
      We ship out orders within 1 business day (same day and next day shipping).
    </p>
    <p>
      Once shipped, wait times vary depending on your country or region and the
      shipping method you chose:
    </p>
    <ul>
      <li>Lebanon - 1 to 3 Business Days</li>
      <li>Turkey - 6 to 12 Business Days</li>
      <li>Worldwide - 6 to 12 Business Days depending on country and customs</li>
    </ul>
    <p>
      Shipping wait times are shown upfront when you pick a shipping method
      during the checkout process.
    </p>

    <h6>c. How much does shipping cost to my country?</h6>
    <p>We charge flat-rate shipping. The shipping rate depends on your location:</p>
    <ul>
      <li>Lebanon - $6.99</li>
      <li>Turkey - $9.99 (plus local duties and taxes may apply)</li>
      <li>Europe - $9.99 (plus local duties and taxes may apply)</li>
      <li>Worldwide - $14.99 (plus local duties and taxes may apply)</li>
    </ul>
    <p>
      Shipping costs are shown upfront when you pick a shipping method during
      the checkout process.
    </p>

    <h6>d. How are shipping costs calculated?</h6>
    <p>We charge flat-rate shipping. The shipping rate depends on your location.</p>

    <h6>e. Does my order come with a tracking number? How can I track my order?</h6>
    <p>
      All orders come with tracking numbers. You will receive your tracking
      number in the shipping confirmation email. You can track your order at the
      following website:
    </p>
    <p>www.usps.com</p>

    <h6>f. How can I get cheaper shipping?</h6>
    <p>
      We’ve already adjusted our shipping rates to reflect the cheapest
      possible rates. Please note that you can get FREE Shipping on orders over
      a specific amount:
    </p>
    <ul>
      <li>Lebanon – Orders $50 and over</li>
      <li>Worldwide – Orders $150 and over</li>
    </ul>
  </section>
</div>
  )
}

export default OrderShipping
