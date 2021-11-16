import React, {  useState, useEffect } from "react";
import querystring from "querystring";
import io from "socket.io-client";


const Chat = ()=> {
    useEffect(()=>{
        const data = querystring.parse(location.search)
    })

    return(
        <h1>Chat</h1>
    )
}

export default Chat;