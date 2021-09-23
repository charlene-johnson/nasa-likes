import React, {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
  Button
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import logo from "../images/nasa-logo.png";
import BasicDatePicker from "./BasicDatePicker";


function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4: 0,
    });
}

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "5.5em",
    marginLeft: "0.2em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "50px",
    opacity: 1,
    "&:hover": {
      color: theme.palette.common.purple,
      textDecoration: "none",
    },
  },
}));


export default function Navigation(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value);
    };
    const refreshPage = () => {
        window.location.reload();
    };
    
    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0);
                }
                break;
                default:
                break;
        }
    }, [value]);

    return (
      <React.Fragment>
        <ElevationScroll>
          <AppBar
            position="sticky"
            style={{
              borderBottom: "2px solid black",
            }}
          >
            <Toolbar disableGutters>
              <Button 
                component={Link} to="https://www.nasa.gov/" 
                disableRipple>
                <img src={logo} alt="nasa logo" className={classes.logo} />
              </Button>
              <Typography variant="h1" style={{ textAlign: "center" }}>
                Nasa<br></br>Photos
              </Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tabContainer}
              >
                <Tab
                  className={classes.tab}
                  value="Today's Picture"
                  label="Today's Picture"
                  component={Link}
                  onClick={refreshPage}
                  to="/"
                />
                <BasicDatePicker date={props.date} setDate={props.setDate} />
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}