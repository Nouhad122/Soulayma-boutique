import React from 'react';
import { Link } from 'react-router-dom';
import '../FooterPages.css';

const FAQOverview = () => {
  return (
    <div className='text-container'>
  <section>
    <h1>We have answers to all your questions!</h1>
    <p>In order to serve you faster, we’ve attached an FAQ list that links to the answers to your questions so you no longer have to wait for a response to your question.</p>
    <p>Please note: If your question is not on the list or if it is regarding an issue with your order (fix, change, cancel or return/refund) we will get back to you with a tailored response within 24 hours.</p>
    <p>Please click on the appropriate topic for questions and answers.</p>
  </section>

  <section>
    <h1>FAQ Topics</h1>
    <ul>
      <li><Link className='faq-link' to="/faq/placing-order-payment-method">Placing Order/Payment Method</Link></li>
      <li><Link className='faq-link' to="/faq/order-shipping">Order Shipping (Includes Wait Times)</Link></li>
      <li><Link className='faq-link' to="/faq/order-status">Order Status</Link></li>
      <li><Link className='faq-link' to="/faq/order-tracking">Order Tracking</Link></li>
      <li><Link className='faq-link' to="/faq/order-changes-cancellation">Order Changes/Order Cancellation (Before Shipped)</Link></li>
      <li><Link className='faq-link' to="/faq/order-error-fixing">Order Error/Fixing (After Received)</Link></li>
      <li><Link className='faq-link' to="/faq/guaranteed-satisfaction-returns-refund">Guaranteed Satisfaction/Returns/Refund</Link></li>
      <li><Link className='faq-link' to="/faq/stocking-restocking">Stocking/Restocking</Link></li>
      <li><Link className='faq-link' to="/faq/currency-conversion">Currency/Conversion</Link></li>
      <li><Link className='faq-link' to="/faq/fabric-care-stain-removal">Fabric Care/Stain Removal</Link></li>
      <li><Link className='faq-link' to="/faq/difference-between-fabric-types">Difference Between Fabric Types</Link></li>
      <li><Link className='faq-link' to="/faq/instant-pre-sewn-hijabs">Instant (Pre-Sewn) Hijabs</Link></li>
      <li><Link className='faq-link' to="/faq/customer-service-emails">Customer Service/E-mails</Link></li>
      <li><Link className='faq-link' to="/faq/sb-rewards-program">SB Rewards Program</Link></li>
    </ul>
  </section>

  <section>
    <h1>Thank you for choosing Soulayma Boutique</h1>
    <p>We appreciate your continued support and loyalty. If you have any questions or concerns that are not addressed here, please e-mail <a href="mailto:soulaymaboutique@gmail.com">soulaymaboutique@gmail.com</a>.</p>
  </section>
</div>
  )
}

export default FAQOverview
