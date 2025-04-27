const express=require("express");
const app=express();
require('dotenv').config();
const cors=require('cors')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

const  PORT=process.env.PORT || 4000

app.use(cors())

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 2,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        },
        {
          id: 3,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 4,
          title: "Why can't your nose be 12 inches long?",
          content: "Because then it would be a foot."
        },
        {
          id: 5,
          title: "What do you call cheese that isn't yours?",
          content: "Nacho cheese."
        }
      ];

      res.send(jokes) 
})

app.listen(PORT,()=>{
    console.log("Server is Running")
})