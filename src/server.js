import http from "http";
import express from "express";
const app = express();
app.set('view engine', "pug");
app.set("views", __dirname +"/views");
app.get("/", (req, res) => res.render("home"));
console.log("hello");

const server = http.createServer(app);