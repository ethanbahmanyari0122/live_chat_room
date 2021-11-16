const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.Port || 5001;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection', (socket)=>{
    console.log('we have a new connection');
    socket.on('disconnect', ()=>{
        console.log('User had left!');
    });
})



app.use(router);

server.listen(PORT, ()=> console.log(`servers working on port ${PORT}`));