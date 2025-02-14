import React, { createContext, useState } from 'react'

const ChatBotContext = createContext({
    chatOpen: false,
    chatbotMode: '',
    chatMessages: {},
    skinTone: null,
    ageRange: null,
    toggleChatbot: () =>{},
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
    const [selectedSkinTone, setSelectedSkinTone] = useState(null);
    const [selectedAgeRange, setSelectedAgeRange] = useState(null);

    const toggleChatbot = () =>{
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

      const skinToneSelection = (id) =>{
        setSelectedSkinTone(id);
      }
    
      const ageRangeSelection = (value) =>{
        setSelectedAgeRange(value);
      }

    const ChatBotContextValue = ({
        chatOpen,
        chatbotMode,
        chatMessages,
        skinTone: selectedSkinTone,
        ageRange: selectedAgeRange,
        toggleChatbot,
        createChatMessage,
        closeChatMessage,
        openChatGuide,
        skinToneSelection,
        ageRangeSelection
    })
  return (
    <ChatBotContext.Provider value={ChatBotContextValue}>
      { children }
    </ChatBotContext.Provider>
  )
}

export default ChatBotContext
