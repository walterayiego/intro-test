import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "0px",
          padding: "0px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#032CA6",
      light: "#3B67EB",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#BF1304",
    },
    background: {
      default: "#EBEEF4",
    },
    green: {
      main: "#0F5929",
    },
  },
});

export default theme;
