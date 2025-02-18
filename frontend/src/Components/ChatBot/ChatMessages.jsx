import React, { useContext, useState } from 'react';
import classes from './ChatMessages.module.css';
import logo from '../../assets/S-logo.png';
import { IoClose } from "react-icons/io5";
import CustomerStatus from './CustomerStatus.jsx';
import useTypingEffect from '../../use/useTypingEffect.js';
import ChatBotContext from '../../store/ChatBotContext.jsx';

const CUSTOMER_STATUS = {
  YES: 'yes',
  NO: 'no',
  PENDING: null,
};

const ChatMessages = () => {
  const { chatMessages, closeChatMessage} = useContext(ChatBotContext);
  const [customerStatus, setCustomerStatus] = useState(CUSTOMER_STATUS.PENDING);
  const isTyping = useTypingEffect(1000);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}`;
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={classes.chatMessages}>
      <IoClose onClick={closeChatMessage} />
      <p className={classes.messageDate}>{formattedDate}</p>
      <p className={classes.customerMessage}>{chatMessages.text}</p>

      {isTyping ? (
        <p className={classes.serviceMessage}>Typing...</p>
      ) : (
        <>
          <div className={classes.supportBot}>
            <img src={logo} alt="Soulayma Boutique Logo" />
            <h6>Soulayma Support Bot</h6>
          </div>
          <p className={classes.serviceMessage}>{chatMessages.botText}</p>
          <p className={classes.serviceMessage}>Was this helpful?</p>
          <p className={classes.messageTime}>{formattedTime}</p>
        </>
      )}

      {customerStatus === CUSTOMER_STATUS.YES && (
        <CustomerStatus
          custMessage="Yes, thank you!"
          servMessage="Happy to help, have a great day!"
          formattedTime={formattedTime}
        />
      )}
      {customerStatus === CUSTOMER_STATUS.NO && (
        <CustomerStatus
          custMessage="No, I need more help"
          servMessage="Please send us a message and we will reply within 20 minutes during work hours."
          formattedTime={formattedTime}
        />
      )}

      {customerStatus === CUSTOMER_STATUS.PENDING && !isTyping && (
        <div className={classes.customerMessageFeedback}>
          <button onClick={() => setCustomerStatus(CUSTOMER_STATUS.YES)}>Yes, thank you!</button>
          <button onClick={() => setCustomerStatus(CUSTOMER_STATUS.NO)}>No, I need more help</button>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
