import React, { createContext, useState } from 'react'

const ChatBotContext = createContext({
    chatOpen: false,
    chatbotMode: '',
    chatMessages: {},
    showChatbot: () =>{},
    createChatMessage: () =>{},
    closeChatMessage: () =>{},
    openChatGuide: () =>{}
})

export const ChatBotContextProvider = ({ children }) => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatbotMode, setChatbotMode] = useState("");
    const [chatMessages, setChatMessages] = useState({
        id: null,
        text:'',
        botText: ''
    });

    const showChatbot = () =>{
        setChatOpen(prevState => !prevState);
        if(chatOpen === true){
          closeChatMessage();
        }
    }

    const createChatMessage = (id, text, botText) =>{
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
      const closeChatMessage = () =>{
        setChatbotMode("");
        setChatMessages(prevState =>{
          return{
            ...prevState,
            opened: false
          }
        });
      }
  
      const openChatGuide = () =>{
        setChatbotMode("helperBot");
      }

    const ChatBotContextValue = ({
        chatOpen,
        chatbotMode,
        chatMessages,
        showChatbot,
        createChatMessage,
        closeChatMessage,
        openChatGuide
    })
  return (
    <ChatBotContext.Provider value={ChatBotContextValue}>
      { children }
    </ChatBotContext.Provider>
  )
}

export default ChatBotContext
