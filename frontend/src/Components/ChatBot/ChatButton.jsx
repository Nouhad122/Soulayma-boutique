import React from 'react';
import classes from './Chatbot.module.css';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const ChatButton = ({chatOpen, onChatOpen}) => {
  return (
    <div className={classes.chatButton}>
      <button onClick={onChatOpen}>
        {
            chatOpen ? <IoMdClose /> :
            <>
            <IoChatbubbleEllipsesOutline />
            <span>Chat With Us</span>
            </> 
        }
        </button>
    </div>
  )
}

export default ChatButton
