import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
  const url = request.url; // ws://localhost:8080?token=2352366272222262465

  if (!url) return;

  const queryParam = new URLSearchParams(url.split("?")[1]);
  const token = queryParam.get("token");
  if (!token) return;

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string,
  ) as JwtPayload;

  if(!decoded || !decoded.userId) {
    ws.close();
    return;
  }

  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
