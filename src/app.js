const express = require('express');
const app = express();


app.use("/hel",(req,res)=>{
    res.send("Hel")
});


app.use("/test",(req,res)=>{
    res.send("Hello from the server")
});

app.listen(4000,()=>{
    console.log("Server is running on PORT 4000")
});