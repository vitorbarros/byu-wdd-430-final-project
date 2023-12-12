import { createTheme } from '@mui/material';

export const white = '#FFFFFF'
export const green1 = '#76B947';
export const green2 = '#B1D8B7';
export const green3 = '#2F5233';
export const green4 = '#94C973';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: green1,
    },
    secondary: {
      main: green2
    },
    info: {
      main: green3
    },
    success: {
      main: green4
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: green3,
          cursor: 'pointer'
        },
        underlineAlways: {
          color: green3
        },
        underlineHover: {
          textDecoration: 'none'
        }
      }
    }
  },
  typography: {
    h1: {
      color: green3,
    }
  }
});

export default defaultTheme;
