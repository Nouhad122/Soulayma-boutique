import React, { useState } from 'react'
import ChatBot from '../../Components/ChatBot/ChatBot.jsx'
import ChatButton from '../../Components/ChatBot/ChatButton.jsx'

const ChatBotPage = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatbotMode, setChatbotMode] = useState("");
    const [chatMessages, setChatMessages] = useState({
      id: null,
      text:'',
      botText: ''
    });

    const handleChatOpen = () =>{
        setChatOpen(prevState => !prevState);
        if(chatOpen === true){
          handleCloseChatMessages();
        }
    }

    const handleChatMessages = (id, text, botText) =>{
      setChatbotMode("botMessages");
      setChatMessages(prevState =>{
        return{
          ...prevState,
          id: id,
          text: text,
          botText: botText
        }
      }); 
    }
    const handleCloseChatMessages = () =>{
      setChatbotMode("");
      setChatMessages(prevState =>{
        return{
          ...prevState,
          opened: false
        }
      });
    }

    const handleOpeningGuide = () =>{
      setChatbotMode("helperBot");
    }
  return (
    <>
    <ChatBot 
     chatOpen={chatOpen}
     chatMessages={chatMessages} 
     onMessageChosen={handleChatMessages} 
     onCloseChatMessages={handleCloseChatMessages}
     chatbotMode={chatbotMode}
     onOpeningGuide = {handleOpeningGuide}
     /> 
    <ChatButton chatOpen={chatOpen} onChatOpen={handleChatOpen}/>
    </>
  )
}

export default ChatBotPage
