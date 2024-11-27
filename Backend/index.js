import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";

const app = express()
dotenv.config();

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:4001", 
    credentials: true, 
  })
);
app.use(cookieParser())

const PORT = process.env.PORT || 5001;
const URI=process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("MongoDB Connected");
   
} catch (error) {
    console.log(error);
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute)


app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
})