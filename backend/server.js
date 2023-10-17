const express=require("express");
// import express from "express";
const notes = require("./data/note");
// import notes from "./data/note";
const dotenv=require('dotenv')
const connectDB=require("./config/db")
const userRouts=require('./routes/userRoutes')
dotenv.config()
const app=express();
connectDB();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("API is running..")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
// app.get('/api/notes/:id',(req,res)=>{
//     const note=notes.find((n)=>n._id===req.params.id)
//     res.json(note)
// })
app.use('/api/users',userRouts)
const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`server started on ${PORT}`))