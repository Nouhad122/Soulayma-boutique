import React from 'react';
import classes from './Chatbot.module.css';
import useTypingEffect from '../../use/useTypingEffect.js';

const CustomerStatus = ({ custMessage, servMessage, formattedTime }) => {
  const isTyping = useTypingEffect(1000);

  return (
    <>
      <p className={classes.customerMessage}>{custMessage}</p>
      {isTyping ? (
        <p className={classes.serviceMessage}>Typing...</p>
      ) : (
        <>
          <p className={classes.serviceMessage}>{servMessage}</p>
          <p className={classes.messageTime}>{formattedTime}</p>
        </>
      )}
    </>
  );
};

export default CustomerStatus;
