import React,{useState} from "react";
import {StyledEngineProvider} from "@mui/material/styles"
import Title from "./Components/Title"
import PicOfDay from "./Components/PictureOfDay";
import Navigation from "./Components/Navigation";
import {ThemeProvider} from '@mui/material/styles'
import theme from "../src/ui/Theme";
import {BrowserRouter as Router} from "react-router-dom";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs"
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Navigation date={dayjs(date)} setDate={setDate} />
          <Title/>
          <PicOfDay date={dayjs(date)} />
        </Router>
        </LocalizationProvider>
      </ThemeProvider>
   </StyledEngineProvider>
  );
}

export default App;
