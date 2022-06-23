import express from "express";
import request from "request";
import modifyResponse from "request";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Connection stabilished with the server");
});

app.get("/characters", (req, res) => {
  request({ url: "http://hp-api.herokuapp.com/api/characters" }).pipe(res);
});

app.listen(4000);
