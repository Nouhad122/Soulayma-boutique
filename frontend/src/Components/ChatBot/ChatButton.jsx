import React, { useContext } from 'react';
import classes from './ChatButton.module.css';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ChatBotContext from '../../store/ChatBotContext';

const ChatButton = () => {
  const { chatOpen, toggleChatbot } = useContext(ChatBotContext);
  return (
    <div className={classes.chatButton}>
      <button onClick={toggleChatbot}>
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
