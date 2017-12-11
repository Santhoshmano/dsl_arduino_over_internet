var socket=require('socket.io')
var express=require('express')
var app=express()
var port=3000
var five = require('johnny-five');
var board = new five.Board();
var led;

board.on('ready', function() {
  led = new five.Led(8); // pin 13
    led.off()
  console.log("connected with arduino")
});

var server=app.listen(port,()=>{
    console.log("running on "+port)
})


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


var io=socket(server);

io.on('connection',(socket)=>{
    console.log("client connected")

    socket.on('on',()=>{
        led.on()
    })

    socket.on('off',()=>{
        led.off()
    })

    socket.on('disconnect',()=>{
       console.log("client disconnected")
    })

})