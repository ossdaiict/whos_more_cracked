import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
     res.send("Hello World")
})

app.listen(3000, () => {
  console.log("App is running on port 3000");
});