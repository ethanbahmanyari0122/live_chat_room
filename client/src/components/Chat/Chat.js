import React, {  useState,useEffect } from "react";
import queryString from 'query-string';
import { socket } from '../../helpers/socket'


const Chat = ({ location })=> {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5001';
    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);


        setName(name);
        setRoom(room);

        socket.emit('join', { name , room }, ()=>{

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    })

    return(
        <h1>Chat</h1>
    )
}

export default Chat;