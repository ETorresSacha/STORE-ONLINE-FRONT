import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: pink[800],
    },
  },
});
export default theme
