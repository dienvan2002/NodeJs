import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import cors from "cors";
import { create } from "domain";
import { createNewUser, signin } from "./handlers/user";
import { sign } from "crypto";

const app = express();

const customLogger = (message) => (req, res, next) => {
  console.log(`hello from ${message}`);
  next();
};
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello from server");
  res.status(200);
  res.json({ message: "hello from server" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  if(err.type === "auth"){
    res.status(401).json({message: "unauthorized"})
  }
  else if(err.type === "input"){
    res.status(400).json({message: "invaliddd input"})
  }else{
    res.status(500).json({message: "oops something went wrong"})
  }
})

export default app;
