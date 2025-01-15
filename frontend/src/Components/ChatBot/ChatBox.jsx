import React from 'react';
import logo from '../../assets/S-logo.png';
import classes from './Chatbot.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import ChatSuggs from './ChatSuggs.jsx';
import { GiCardPickup } from "react-icons/gi";

const ChatBox = ({ onMessageChosen, onOpeningGuide }) => {
  return (
    <div className={classes.chatbotBox}>
      <h2>Hello, how can we help you?</h2>
            <ChatSuggs onMessageChosen={onMessageChosen}/>

            <div className={classes.soulaymaSupport} onClick={onOpeningGuide}>
                <GiCardPickup className={classes.pickupIcon}/>
                <div className={classes.textSupport}>
                    <h6>Let Us Guide Your Choice<br/><span>Choose your profile for tailored picks</span></h6>
                </div>
                <MdSend />
            </div>

            <div className={classes.soulaymaSupport}>
                <img src={logo} alt='soulayma boutique logo'/>
                <div className={classes.textSupport}>
                    <h6>Soulayma Support <br/><span>Leave a message</span></h6>
                </div>
                <MdSend className={classes.sendIcon}/>
            </div>
            <div className={classes.goToPrevChat}>
                <span>Go to previous conversation <FaLongArrowAltRight /></span>
            </div>
    </div>
  )
}

export default ChatBox
