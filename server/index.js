const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');


const PORT = process.env.PORT || 5001;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } })

app.use(router);
app.use(cors())

io.on('connection', (socket)=>{
    console.log('we have a new connection');
    socket.on('join', ({name,room}, callback)=>{
        console.log(name, room);
        const error = true;

        // if(error){
        //     callback({error:'error'})
        // }

        callback();
    });
    socket.on('disconnect', ()=>{
        console.log('User had left!');
    });
})





server.listen(PORT, ()=> console.log(`servers working on port ${PORT}`));