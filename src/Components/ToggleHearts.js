import React from "react";
import solidlike from "../images/heart-solid.svg";
import outlinelike from "../images/heart.svg";
import { makeStyles } from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  hearts: {
   height: "45px",
   marginTop:"3px",
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
          <span>
            <img
              className={classes.hearts}
              src={outlinelike}
              alt="solidheart"
            />
            <Typography component={"span"} className={classes.liked}>
              Like
            </Typography>
          </span>
        ) : (
          <span>
            <img
              className={classes.hearts}
              src={solidlike}
              alt="outlineheart"
            />
            <Typography component={"span"} className={classes.liked}>
              Liked!
            </Typography>
          </span>
        )}
      </React.Fragment>
    );
}

export default ToggleHearts
