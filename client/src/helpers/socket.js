import { io } from 'socket.io-client'

const ENDPOINT = 'localhost:5001'

export const socket = io(ENDPOINT)
export let socketID = ''
socket.on('connect', () => {
    socketID = socket.id
})