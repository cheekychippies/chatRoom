import {createServer} from 'http'
import {Server} from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        origin: process.env.Node_ENV === 'production' ? false : ['http://localhost:3000', 'http://127.0.0.1:3000','http://localhost:63342']
    }
})

// Store messages for each room
const roomMessages = {};

io.on('connection', (socket) => {
    console.log('user connected')
    // Join a room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        // Send the history of the room to the user
        socket.emit('messageHistory', roomMessages[room] || []);
    });
    // Leave a room
    socket.on('leaveRoom', (room) => {
        socket.leave(room);
    });
    // Listen for messages and broadcast them to the same room
    socket.on('message', (data) => {
        console.log(data);
        // Add the message to the room's message array
        if (!roomMessages[data.room]) {
            roomMessages[data.room] = [];
        }
        roomMessages[data.room].push(data.message);
        io.to(data.room).emit('message', data.message);
    });
    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

httpServer.listen(3001, () => console.log('server is running on port 3001'))