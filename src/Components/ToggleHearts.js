import React from "react";
import solidlike from "../images/heart-solid.svg";
import outlinelike from "../images/heart.svg";
import { makeStyles } from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
  hearts: {
   height: "45px",
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
            <Typography style={{ fontFamily: "Orbitron" }}>Like</Typography>
          </div>
        ) : (
          <div>
            <img
              className={classes.hearts}
              src={solidlike}
              alt="outlineheart"
            />
            <Typography style={{ fontFamily: "Orbitron" }}>Liked!</Typography>
          </div>
        )}
      </React.Fragment>
    );
}

export default ToggleHearts
