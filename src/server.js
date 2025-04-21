import http from "http";
import express from "express";
import { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";

// ✅ ES 모듈용 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ express 설정
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // ✅ 안전한 경로 설정

// ✅ 라우터
app.get("/", (req, res) => res.render("home"));

console.log("hello");


const server = http.createServer(app);


const handleListen = () => console.log(`Listening on http://localhost:3000`);
server.listen(3000, handleListen);
