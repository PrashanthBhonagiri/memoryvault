import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Welcome to MemoryVault</h1>} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
