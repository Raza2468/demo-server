   var express = require('express');
   var server = express()



    // server.get('/', (req,res,next)=>{
    // res.send("Welcome to the <h1> Home </h1>")
    // })

   var PORT = process.env.PORT || 3001
   server.get('/', (req,res,next)=>{
   res.send("Welcome to the <h1> Home </h1>")
 })

   server.get('/about',(req,res,next)=>{
   res.send("tret done ho gai hai <h1>About</h1>")
   })

//    server.listen(3001,()=>{
//    console.log("server man jao bhaee!");
//    })

server.listen(PORT,()=>{
console.log("server man jao bhaee!");
})



// console.log("srever");