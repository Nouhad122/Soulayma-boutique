import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import classes from './Chatbot.module.css';

const ChatSuggs = ({onMessageChosen}) => {

    const [chatSuggs, setChatSuggs] = useState([
            {
                id: 0,
                text: "Do you offer free shipping?",
                botText: `US - FREE shipping on all orders over $50 USD!

Canada - FREE shipping on all orders over $75 CAD!

Europe - FREE shipping on all orders over €50 EUR!

United Kingdom - FREE shipping on all orders over £50 GBP!

International - FREE shipping on all international orders over $150 USD!`
            },
            {
                id: 1,
                text: "How should I clean and care for my hijab?",
                botText: `You should hand wash and air dry our products for best results. If you would like to machine wash, wash on warm, delicate using a gentle detergent and tumble dry for best results. Be sure to wash with other scarves/hijabs and very similar colours ONLY!

Use a stain remover carefully following the instructions on the product label.
Unfortunately, the toughest stains may not come out. Treat our products with care.`
            },
            {
                id: 2,
                text: "How can I get notified about restocks?",
                botText: `We're thrilled you're interested in our hijabs! To stay updated on restocks,
please join our email list for exciting notifications and check our website regularly. Plus, we’re working on a wish list feature that will automatically notify you when your favorite items are back in stock.`
            },
            {
                id: 3,
                text: "How long does delivery take?",
                botText:`We ship out orders within 1 business day, including same-day and next-day options.

US - 2 to 5 business days.
Canada - 1 to 2 business days.
UK- 2 to 4 business days.
Europe - 2 to 4 business days.
International - 6 to 20 business days.`
            },
            {
                id: 4,
                text: "What's your return policy?",
                botText: `We want you to be 100% satisfied with your purchase so if you're not happy with an item, send it back for a full refund. You may return product in its original condition within 30 days or receiving it.

We will provide a full refund for items sent back within 30 days (from the date of purchase). The refund will be in the original form of payment for the full purchase price of the item, including sales tax, and will be issued within 48 hours of us receiving the return.
Original shipping charges are not refunded as part of your return, unless the reason for the return is due to item(s) being damaged, defective or incorrect.`
            },
        ]);
  return (
    <div className={classes.suggessions}>
                {
                    chatSuggs.map(sugg =>
                    <div className={classes.chatSugg} key={sugg.id} onClick={() => onMessageChosen(sugg.id,sugg.text,sugg.botText)}>
                        <p>{sugg.text}</p>
                        <FaGreaterThan className={classes.greaterIcon}/>
                    </div>
                    )
                }
    </div>
  )
}

export default ChatSuggs
