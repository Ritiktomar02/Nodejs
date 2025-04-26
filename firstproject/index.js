const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("Hello again"
    )
})

app.get('/ritik',(req,res)=>{
    res.send("My name is Ritik");
})
app.listen(PORT,()=>{
    console.log("Server is running");
})