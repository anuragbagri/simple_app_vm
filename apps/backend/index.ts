import { prismaClient } from "db/client";
import express from "express"
const app =express();
app.use(express.json());


// simple endpoints get and post
app.get("/users" ,(req,res) => {
    const users= prismaClient.user.findMany();
    res.json({
        users
    })
})


app.post("/users" ,async (req,res)=> {
    const { username , password } = req.body;
    if(!username || !password){
      res.json({
      "message" : "username or the password is not entered"
      })
      return
    }
    
    const findUser = await prismaClient.user.findMany({
     where : {
          username : username,
          password : password
      }
     })
     if(!findUser){
      const insertUser =await prismaClient.user.create({
          data : {
              username,
              password
          }
      })}
      res.json({
        message : "request receievd" ,
        data : req.body
      })
  }) 
  

app.listen(8000 ,()=> { console.log("server running on the port")});
