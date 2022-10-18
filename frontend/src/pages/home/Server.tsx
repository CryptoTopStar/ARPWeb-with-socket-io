import * as React from 'react';
import { Button, TextField, Stack } from "@mui/material";
import Title from "../../components/Title";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Server(props:any) {
  const [type, setType] = React.useState('');
  const [address, setAddress] = React.useState('127.0.0.1');
  const [port, setPort] = React.useState('8080');

  const serverOpen = () => {
    props.joinServer(port,address);
  }
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  
  return (
    <>
    <Title name='Server'/>
      <Stack direction='row' spacing={2} >
        <TextField value = {address} onChange={(e) => setAddress(e.target.value)} label="Address"  />
        <TextField value={port} onChange={(e) => setPort(e.target.value)} type='number' label="Port" />
        <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>WebSocket</MenuItem>
          <MenuItem value={20}>WebSocket</MenuItem>
          <MenuItem value={30}>WebSocket</MenuItem>
        </Select>
      </FormControl>
        <Button variant="contained" onClick={serverOpen}>Open</Button>
        <Button variant="contained">Close</Button>
      </Stack>
    </>

  )
}

export default Server;