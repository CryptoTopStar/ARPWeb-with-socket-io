var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;
var io = require("socket.io")(http,{
    cors: {
        origin:'http://localhost:3000'
    }
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  // socket object may be used to send specific messages to the new connected client
  console.log("new client connected ");
  console.log(socket);

  socket.on("send-message", (message) => {
    io.emit("message", message);
  });
  socket.on('clear-message', () => {
    io.emit('clear-message',[]);
  });
  socket.on("disconnect", () => {});
});
