const express = require('express');
const conne = require('./Config/connection');
const app = express();
app.use(express.json());

app.listen(4500,async()=>{
   try{
    await conne
    console.log("connected to db")

   }catch(err){
    console.log("something went wrong")
   }
})
