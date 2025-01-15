import React from 'react';
import classes from './Chatbot.module.css';
import ChatBox from './ChatBox.jsx';
import ChatMessages from './ChatMessages.jsx';
import ChoiceGuide from './ChoiceGuide.jsx';


const ChatBot = ({chatOpen, chatMessages, onMessageChosen, onCloseChatMessages, chatbotMode, onOpeningGuide}) => {
  return(
    <>
    {
    chatOpen ?
        <div className={classes.chatbot}>
          {
            chatbotMode === "botMessages" &&
              <ChatMessages onCloseChatMessages={onCloseChatMessages} chatMessages={chatMessages} />
          }
          {
              chatbotMode === "" &&
              <ChatBox onMessageChosen={onMessageChosen} onOpeningGuide={onOpeningGuide}/>
          }
          {
            chatbotMode === "helperBot" &&
            <ChoiceGuide />
          }
          
        </div> :
        null 
    }
    
  </>
)
}

export default ChatBot
