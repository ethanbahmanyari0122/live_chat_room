import React from "react";
import "./Input.css";


const Input = ({message,sendMessage,setMessage}) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event): null}
            />
            <button className= "sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
        </form>
    )}

export default Input;