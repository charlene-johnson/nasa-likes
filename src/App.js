import React,{useState} from "react";
import {StyledEngineProvider} from "@mui/material/styles"
import Title from "./Components/Title"
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import {ThemeProvider} from '@mui/material/styles'
import theme from "../src/ui/Theme";
import {BrowserRouter as Router} from "react-router-dom";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <Router>
          <Navigation date={date} setDate={setDate} />
          <Title/>
          <PicOfDay date={date} />
        </Router>
        </LocalizationProvider>
      </ThemeProvider>
   </StyledEngineProvider>
  );
}

export default App;
