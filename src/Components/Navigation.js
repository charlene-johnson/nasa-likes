import React, {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
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
        height: "8em",
        marginLeft: "0.2em",
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
       ...theme.typography.tab,
        minWidth: 10,
        marginRight: "50px",
        opacity: 1,
        "&hover": {
            color: theme.palette.common.purple,
            textDecoration:"none",
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
            position="relative"
            style={{
              borderBottom: "2px solid black",
            }}
          >
            <Toolbar disableGutters>
                <img src={logo} alt="nasa logo" className={classes.logo}/>
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
                    component={Link}
                    onClick={refreshPage}
                    to="/"
                    label="Home"
                  />
                  <BasicDatePicker/>
                </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}