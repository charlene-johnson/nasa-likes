import React, {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
  Button,
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
    [theme.breakpoints.down("sm")] : {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")] : {
      height: "2.5em"
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "50px",
    opacity: 1,
    [theme.breakpoints.down("xs")] : {
      display: "none"
    },
    "&:hover": {
      color: theme.palette.common.purple,
      textDecoration: "none",
    },
  },
  navTitle:{
    textAlign: "center",
    [theme.breakpoints.down("sm")] : {
      fontSize:"1.3em"
    },
    [theme.breakpoints.down("xs")] : {
      fontSize:"1em",
      marginRight:"1em",
    },
  },
}));


export default function Navigation(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (value) => {
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
            position='sticky'
            style={{
              borderBottom: '2px solid black',
            }}
          >
            <Toolbar disableGutters>
              <Button
                component={'a'}
                href='https://www.nasa.gov/'
                disableRipple
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={logo} alt='nasa logo' className={classes.logo} />
              </Button>
              <Typography variant='h1' className={classes.navTitle}>
                Nasa<br></br> Photos
              </Typography>
              <Tabs
                value={1}
                onChange={handleChange}
                indicatorColor='primary'
                className={classes.tabContainer}
              >
                <Tab
                  sx={{ display: { xs: 'none', md: 'undefined' } }}
                  className={classes.tab}
                  value="Today's Picture"
                  label="Today's Picture"
                  component={Link}
                  onClick={refreshPage}
                  to='/'
                />
              </Tabs>
              <BasicDatePicker date={props.date} setDate={props.setDate} />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}