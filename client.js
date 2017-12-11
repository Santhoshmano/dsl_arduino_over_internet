var io=io.connect();

$("#on_button").click(()=>{
    io.emit('on');
})


$("#off_button").click(()=>{
    io.emit('off');
})

