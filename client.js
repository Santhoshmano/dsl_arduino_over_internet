var socket=io.connect();

$('#on_button').click(()=>{
    alert("on");
    socket.emit('on');
    
})


$('#off_button').click(()=>{
    socket.emit('off');
})

