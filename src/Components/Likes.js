import React, {useState} from "react";
import like from "../images/heart.svg";
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
    width:"3.2em",
    height:"3.2em",
    backgrond: theme.palette.primary.mainGradient,
    border: "2px solid pink",
    "&:hover": {
      background: theme.palette.secondary.mainGradient,
    },
  },
}));

const Likes = props => {
    const classes = useStyles();
    const [liked, setLiked] = useState(false);
    const toggledLiked = () => {
        setLiked(!liked);
        if (!liked) {
            props.setLikes(props.likes +1)
        } else {
            props.setLikes(props.likes -1)
        }
    }

    return (
      <Button
        className={classes.button}
        variant="contained"
        onclick={toggledLiked}
      >
        <Typography style={{fontFamily:"Orbitron"}}>
          <img src={like} alt="heart" /> Like!
        </Typography>
      </Button>
    );
}

export default Likes