import React from "react";
import solidlike from "../images/heart-solid.svg";
import outlinelike from "../images/heart.svg";
import { makeStyles } from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  hearts: {
   height: "45px",
   [theme.breakpoints.down("sm")] : {
    height: "27px"
    }
  },
  liked: {
    fontFamily: "Orbitron",
    [theme.breakpoints.down("sm")] : {
      fontSize: "0.7em"
    }
  },
  
}));

function ToggleHearts({liked}) {
    const classes = useStyles()
    return (
      <React.Fragment>
        {liked ? (
          <div>
            <img
              className={classes.hearts}
              src={outlinelike}
              alt="solidheart"
            />
            <Typography className={classes.liked}>Like</Typography>
          </div>
        ) : (
          <div>
            <img
              className={classes.hearts}
              src={solidlike}
              alt="outlineheart"
            />
            <Typography className={classes.liked}>Liked!</Typography>
          </div>
        )}
      </React.Fragment>
    );
}

export default ToggleHearts
