import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default function Title() {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.title}>
      Astronomy Picture of the Day
    </Typography>
  );
}
