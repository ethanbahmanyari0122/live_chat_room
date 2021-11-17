const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');

const {addUser, removeUser, getUser, getUsersInRoom } = require('./users.js')


const PORT = process.env.PORT || 5001;


const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } })

app.use(router);
app.use(cors())

io.on('connection', (socket)=>{
    console.log('new connection');
    socket.on('join', ({name,room}, callback)=>{
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);


        socket.emit('message', {user: "admin", text: `${user.name}, Welcome to the ${user.room} room`});

        socket.broadcast.to(user.room).emit('message', {user:'admin', text: `${user.name}, has joined!`,});



        callback();
    });
    socket.on('sendMessage', (message, callback)=> {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message});
        callback();
    });

    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user:'admin', text:`${user.name} has left.`})
        }
    });
})





server.listen(PORT, ()=> console.log(`servers working on port ${PORT}`));