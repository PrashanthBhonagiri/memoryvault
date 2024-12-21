import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077B6',
    },
    secondary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#D3D3D3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#4A4E69',
    },
  },
});

export default theme;
