const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req , res) =>{
    res.send("Thai cooking recipe in running")
})

app.listen( port , () =>{
    console.log(`Thai cooking recipe API is running on port : ${port}`)
})