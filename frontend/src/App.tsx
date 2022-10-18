import React from 'react';
import './App.css';
import Home from './pages/home';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
      <SnackbarProvider maxSnack={3}>
      <Home />
    </SnackbarProvider>
  );
}

export default App;

