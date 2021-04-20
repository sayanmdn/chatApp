const { static } = require('express')
const express = require('express')
const socket = require('socket.io')
let app = express()

let server = app.listen(4000, ()=>{
    console.log('Listening on port 4000')
})

app.use(express.static('public'))

const socketServer = socket(server)

socketServer.on('connection', (socket)=>{

    socket.on('sendingMessage',(data)=>{
        // console.log('message from client : '+JSON.stringify(data))
        socket.emit('broadcastMessage',data)
    })

    console.log('new connection '+ socket.id)
})