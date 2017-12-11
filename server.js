var socket=require('socket.io')
var express=require('express')
var app=express()
var port=3000
var server=app.listen(port,()=>{
    console.log("running on "+port)
})

var io=socket(server)

io.on('connection',(socket)=>{
    console.log("client connected")

    socket.on('on',()=>{
        
    })

    socket.on('off',()=>{

    })

    socket.on('disconnect',()=>{
       console.log("client disconnected")
    })

})