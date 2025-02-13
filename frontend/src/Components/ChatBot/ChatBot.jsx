import React, { useContext } from 'react';
import classes from './Chatbot.module.css';
import ChatBox from './ChatBox.jsx';
import ChatMessages from './ChatMessages.jsx';
import ChoiceGuide from './ChoiceGuide.jsx';
import ChatBotContext from '../../store/ChatBotContext.jsx';
import ChatButton from './ChatButton.jsx';

const ChatBot = ({ onMessageChosen, onOpeningGuide}) => {
  const { chatOpen, chatbotMode } = useContext(ChatBotContext);
  return(
    <>
    {
    chatOpen ?
        <div className={classes.chatbot}>
          {
            chatbotMode === "botMessages" &&
              <ChatMessages />
          }
          {
              chatbotMode === "" &&
              <ChatBox onMessageChosen={onMessageChosen} onOpeningGuide={onOpeningGuide}/>
          }
          {
            chatbotMode === "helperBot" &&
            <ChoiceGuide />
          }
          <ChatButton /> 
          
        </div> :

        <ChatButton /> 
    }
    
  </>
)
}

export default ChatBot
