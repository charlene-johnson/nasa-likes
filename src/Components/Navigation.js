import React, {useState, useEffect} from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Typography,
  Button,
  useMediaQuery
} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {Link} from "react-router-dom";
import logo from "../images/nasa-logo.png";
import BasicDatePicker from "./BasicDatePicker";
import PhoneDatePicker from "./MobileDatePicker";


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
    }
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
  navTitle:{
    textAlign: "center",
    [theme.breakpoints.down("sm")] : {
      fontSize:"1.3em"
    }
  },
}));


export default function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const [mobile] = useState(matchesSM)
   
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
                  sx={{ display: { xs: 'none', sm: 'none', md: 'undefined' } }}
                  className={classes.tab}
                  value="Today's Picture"
                  label="Today's Picture"
                  component={Link}
                  onClick={refreshPage}
                  to='/'
                />
              </Tabs>
              {mobile ? (
                <PhoneDatePicker date={props.date} setDate={props.setDate} />
              ) : (
                <BasicDatePicker date={props.date} setDate={props.setDate} />
              )}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    );
}