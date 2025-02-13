import React, { useContext } from 'react';
import classes from './Chatbot.module.css';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ChatBotContext from '../../store/ChatBotContext';

const ChatButton = () => {
  const { chatOpen, showChatbot } = useContext(ChatBotContext);
  return (
    <div className={classes.chatButton}>
      <button onClick={showChatbot}>
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
