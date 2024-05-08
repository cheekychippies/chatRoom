import {createServer} from 'http'
import {Server} from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        origin: process.env.Node_ENV === 'production' ? false : ['http://localhost:3000', 'http://127.0.0.1:3000','http://localhost:63342']
    }
})

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('message', data   => {
        console.log(data)
        io.emit('message', data)
    })
})

httpServer.listen(3001, () => console.log('server is running on port 3001'))