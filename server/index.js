const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.Port || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);






server.listen(PORT, ()=> console.log(`servers working on port ${PORT}`));