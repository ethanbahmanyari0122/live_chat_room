import React from "react";
import "./Messages.css";
import ScrollToBottm from 'react-scroll-to-bottom';

const Messages = () => {
    return (
        <ScrollToBottm>
            {messages.map((message , i)=> <div key={i}></div> )}
        </ScrollToBottm>
    )}

export default Messages;