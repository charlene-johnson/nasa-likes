import React, {useState, useEffect} from "react";
import ToggleHearts from "./ToggleHearts"
import {
    Button,
    Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.buttons,
    fontFamily: "Orbitron",
    padding: "0.7em",
    fontSize: "1.5em",
    width: "3.2em",
    height: "3.2em",
    background: theme.palette.primary.mainGradient,
    border: "2px solid pink",
    "&:hover": {
      background: theme.palette.secondary.mainGradient,
    },
  },
}));


const Likes = () => {
    const classes = useStyles();
    const [liked, setLiked] = useState(false)
    const handleChangeHeart = () => {
        setLiked((previousHeart) => {
            return !previousHeart;
        });
    };
    useEffect(() => {
        setLiked(JSON.parse(window.localStorage.getItem("liked")));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('liked', liked);
    }, [liked])

    return (
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleChangeHeart}
      >
        <Typography style={{ fontFamily: "Orbitron" }}>
          <ToggleHearts liked={liked}/>
        </Typography>
      </Button>
    );
}

export default Likes