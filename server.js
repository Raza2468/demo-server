var express = require('express');
// const { listeners } = require('process');
var server = express()


server.get('/', (req,res,next)=>{
console .log("ha bhi chal gya hai");
res.send("Samad bhi traet pakki hai")
})

server.get('/about',(req,res,next)=>{
res.send("tret done ho gai hai")
})




server.listen(3111,()=>{
    console.log("server man jao bhaee!");
})



// console.log("srever");