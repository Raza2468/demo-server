var express = require('express');
// const { listeners } = require('process');
var server = express()

var PORT = process.env.PORT || 3001
server.get('/', (req,res,next)=>{
console .log("ha bhi chal gya hai");
res.send("Samad bhi traet pakki hai")
})

server.get('/about',(req,res,next)=>{
res.send("tret done ho gai hai")
})




server.listen(PORT,()=>{
    console.log("server man jao bhaee!");
})



// console.log("srever");