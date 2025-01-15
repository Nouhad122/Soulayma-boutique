import React from 'react';
import './FooterPages.css';

const Shipping = () => {
  return (
    <div class="text-container">
    <section>
        <h2>General Shipping Details</h2>
        <p>We ship worldwide. Orders are shipped out within 1 business day (same day and next day shipping). Once shipped, wait times vary depending on your country or region and the shipping method you chose.</p>
    </section>

    <section>
        <h2>Estimated Shipping Times</h2>
        <ul>
        <li><strong>Lebanon:</strong> 2 to 5 Business Days</li>
        <li><strong>Turkey:</strong> 1-2 Business Days</li>
        <li><strong>Syria:</strong> 2 to 4 Business Days</li>
        <li><strong>Europe:</strong> 2 to 4 Business Days</li>
        <li><strong>Worldwide:</strong> 6 to 20 Business Days depending on country and customs</li>
        </ul>
        <p>Shipping wait times are shown upfront when you pick a shipping method during the check-out process.</p>
    </section>

    <section>
        <h2>Shipping Rates</h2>
        <ul>
        <li><strong>Lebanon:</strong> $6.99</li>
        <li><strong>Turkey:</strong> $6.99</li>
        <li><strong>Syria:</strong> $9.99 Plus local duties and taxes (may apply)</li>
        <li><strong>Europe:</strong> $9.99 Plus local duties and taxes (may apply)</li>
        <li><strong>Worldwide:</strong> $14.99 Plus local duties and taxes (may apply)</li>
        </ul>
        <p>Shipping costs are shown upfront when you pick a shipping method during the check-out process.</p>
    </section>

    <section>
        <h2>Tracking Orders</h2>
        <p>All orders come with tracking numbers. You will receive your tracking number in the shipping confirmation e-mail. You can track your order at the following website:</p>
        <p>www.usps.com</p>
    </section>

    <section>
        <h2>Free Shipping</h2>
        <ul>
        <li><strong>Lebanon:</strong> Free shipping on orders over $50 USD</li>
        <li><strong>Turkey:</strong> Free shipping on orders over $75 USD</li>
        <li><strong>Worldwide:</strong> Free shipping on orders over $100 USD</li>
        </ul>
        <p><em>*We are not liable for duties, customs or taxes or delays at border crossing.</em></p>
    </section>
</div>

  )
}

export default Shipping
