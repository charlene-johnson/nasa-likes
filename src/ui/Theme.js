import {createTheme} from "@mui/material/styles";

const pink = "#FFC0CB";
const lightblue = "#ADD8E6";
const purple = "#800080";
const black = "#000000";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    common: {
      pink: pink,
      lightblue: lightblue,
      purple: purple,
      black: black,
    },
    primary: {
      main: pink,
      mainGradient: "linear-gradient(to left, purple, pink)",
    },
    secondary: {
      main: lightblue,
      mainGradient: "linear-gradient(to right, lightblue, pink)",
    },
  },
  typography: {
    tab: {
        fontFamily: "Orbitron",
        textTransform: "none",
        fontSize:"1.5rem",
        color: black,
    },
    h1: {
      fontFamily: "Orbitron",
      fontSize: "1.6em",
    },
    h2: {
      fontFamily: "Orbitron",
      fontSize: "1.4em",
    },
    subtitle1: {
      fontFamily: "Orbitron",
    },
    subtitle2: {
      fontFamily: "Orbitron",
      fontSize: "1.7rem",
    },
    buttons: {
      fontFamily: "Orbitron",
      textTransform: "none",
    },
  },
});

export default theme