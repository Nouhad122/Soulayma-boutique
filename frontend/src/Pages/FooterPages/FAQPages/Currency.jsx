import React from 'react';
import '../FooterPages.css';

const Currency = () => {
  return (
    <div className="text-container">
  <section>
    <h1>CURRENCY/CONVERSION</h1>

    <h6>a. How can I see prices in my currency?</h6>
    <p>
      Use the toggle at the top right of the website to view prices in different currencies. Not all world currencies are available, but there are sufficient options.
    </p>

    <h6>b. Which currency will I be charged in?</h6>
    <p>
      You will be charged the rate that appears in your currency. Please be sure to check the currency abbreviation next to each product price to ensure you are looking at the right price for your currency.
    </p>

    <h6>c. Why does it switch to USD at checkout?</h6>
    <p>
      Because we cater worldwide, we use USD as our base currency.
    </p>

    <h6>d. Can you calculate the total in my currency?</h6>
    <p>
      Please look at the total provided before the very last step in the checkout process. It will be in the currency you selected. Your final invoice will be in USD.
    </p>
  </section>
</div>

  )
}

export default Currency
