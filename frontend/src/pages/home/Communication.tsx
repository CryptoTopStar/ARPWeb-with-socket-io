import React from 'react';
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Title from "../../components/Title";

function stringMessage(messages: any) {
  let result = '';
  messages.map((message: any) => {
    result = result.concat(message.text + '\n');
  });
  return result;
}

function Communication(props: any) {
  const messages = props.messages;
  const [chatMessage, setChatMessage] = useState('');
  const [stringMsg, setStringMsg] = useState('');
  React.useEffect(() => {
    setStringMsg(stringMessage(messages));
  }, [messages]);
  
  const sendMessageClick = () => {
    props.onSendMessage(chatMessage);
    setChatMessage('');
  }
  const clearMessageClick = () => {
    props.clearMessage();
  }
  return (
    <>
      <Title name='Communications' />
      <Grid container direction='column' spacing={2}>
        <Grid item xs={12} lg={12}>
          <TextField value={chatMessage} onChange={event => setChatMessage(event.target.value)} fullWidth multiline rows={10} label="Transmitted" />
          <br />
          <br />
          <div className=" flex-end">
            <Button variant="contained" onClick={sendMessageClick}>Transmit</Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField value={stringMsg} fullWidth disabled multiline rows={10} label="Received" />
          <br />
          <br />
          <div className="flex-end">
            <Button variant="contained" onClick={clearMessageClick}>Clear</Button>
          </div>
        </Grid>

      </Grid>
    </>
  )
}

export default Communication;