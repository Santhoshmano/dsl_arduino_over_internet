var socket=require('socket.io')
var express=require('express')
var app=express()
var port=3000
var five = require('johnny-five');
var board = new five.Board();
var led1, led2;

app.use(express.static('static'))

board.on('ready', function() {
    led1 = new five.Led(8);
    led2 = new five.Led(7);
    led1.on()
    led2.on()
    console.log("connected with arduino")
});    

var server=app.listen(port,()=>{
    console.log("running on "+port)
})


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


  var io=socket(server)

    io.on('connection',(socket)=>{
        console.log("client connected"+socket.id)

        socket.on('on1',()=>{
            led1.off()
        })

        socket.on('off1',()=>{
            led1.on()
        })
        socket.on('on2',()=>{
            led2.off()
        })

        socket.on('off2',()=>{
            led2.on()
        })

        socket.on('disconnect',()=>{
        console.log("client disconnected")
        })

})