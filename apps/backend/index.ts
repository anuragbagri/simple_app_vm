import { prismaClient } from "db/client";
import express from "express"
const app =express();


// simple endpoints get and post
app.get("/users" ,(req,res) => {
    const users= prismaClient.user.findMany();
    res.json({
        users
    })
})



app.post("/users" ,(req,res)=> {
  const { username , password } = req.body;
  if(!username || !password){
    res.json({
    "message" : "username or the password is not entered"
    })
    return
  }
  
  const findUser = prismaClient.user.findMany({
   where : {
    data : {
        username : username,
        password : password
    }
   }})
   if(!findUser){
    const insertUser = prismaClient.user.create({
        data : {
            username,
            password
        }
    })}
})