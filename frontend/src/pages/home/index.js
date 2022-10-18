import React from "react";
import { Stack } from "@mui/material";
import Communication from "./Communication";
import Server from "./Server";
import socketClient from "socket.io-client";
import { useSnackbar } from 'notistack';

function Home() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [sockets, setSockets] = React.useState();
  const [messages, setMessages] = React.useState([]);

  const joinServer = async (port, address) => {
    let SERVER = `http://${address}:${port}`;
    let socket = socketClient(SERVER, {reconnection: false});
    
    setSockets(socket);
    socket.on("connect_error", (err) => {
      enqueueSnackbar('Connection failed', {variant:'error'});
    });

    socket.on('connect',() => {
      enqueueSnackbar('Successfully connected', {variant:'success'});
    })
  };
  React.useEffect(()=> {
    !!sockets && sockets.on("message", data => setMessages([...messages, data]))
  }, [sockets, messages]);

  const handleSendMessage = (text) => {
    sockets.emit("send-message", { text });
  };
  const clearMessage = () => {
    sockets.emit("clear-message");
    setMessages([]);
  };
  return (
    <div className="home">
      <Stack spacing={2}>
        <Server joinServer={joinServer} />
        <Communication onSendMessage={handleSendMessage} clearMessage={clearMessage} messages={messages} />
      </Stack>
    </div>
  );
}

export default Home;
