import React from "react";
import "./Messages.css";
import ScrollToBottm from 'react-scroll-to-bottom';
import Message from "../Message/Message"

const Messages = (messages, name) => {
    return (
        <ScrollToBottm>
            {messages.map((message , i)=> <div key={i}><Message message={message} name={name}/></div> )}
        </ScrollToBottm>
    )}

export default Messages;