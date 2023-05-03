const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const chefData = require("./data/chef-recipe.json")
const category = require("./data/categories.json")
const restaurant = require('./data/restaurent.json')

app.use(cors());

app.get('/' , (req , res) =>{
    res.send("Thai cooking recipe in running")
})

app.get('/chef-data' , (req , res) => {
    res.send(chefData)
})

app.get('/restaurant' , (req , res) => {
    res.send(restaurant)
})

app.get('/category' , (req , res) => {
    res.send(category)
})

app.listen( port , () =>{
    console.log(`Thai cooking recipe API is running on port : ${port}`)
})