import React, { useContext } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import classes from './Chatbot.module.css';
import ChatBotContext from '../../store/ChatBotContext.jsx';
import chatSuggs from '../../JSON/ChatSuggs.json';

const ChatSuggs = () => {
    const { createChatMessage} = useContext(ChatBotContext);

    return (
        <div className={classes.suggessions}>
            {
                chatSuggs.map(sugg =>
                <div
                    className={classes.chatSugg} 
                    key={sugg.id} 
                    onClick={() => createChatMessage(sugg.id,sugg.text,sugg.botText)}
                >
                    <p>{sugg.text}</p>
                    <FaGreaterThan className={classes.greaterIcon}/>
                </div>
                )
            }
        </div>
    )
}

export default ChatSuggs
