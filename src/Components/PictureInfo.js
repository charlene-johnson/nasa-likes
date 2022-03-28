import React, {useState} from "react";
import {makeStyles, useTheme} from "@mui/styles";
import moment from "moment";
import {
    Typography,
    Box,
    Modal,
    Button,
    Grid,
    useMediaQuery
} from "@mui/material";
import Likes from "./Likes";

// modal styling
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    background: "linear-gradient(to right, lightblue, pink)",
    border: "1px solid purple",
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles((theme) => ({
  formGridItem: {
    margin: "2.5em",
  },
  logoContainer: {
    padding: 0,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    ...theme.typography.buttons,
    fontFamily: "Orbitron",
    padding: "1.1em",
    fontSize: "1.1em",
    background: theme.palette.primary.mainGradient,
    border: "2px solid pink",
    "&:hover": {
      background: theme.palette.secondary.mainGradient,
    },
  },
  explanation: {
    background: "white",
    border: "1px solid purple",
    padding: "1em",
  },
  image: {
    padding: "20px",
    border: "1px solid pink",
    background: theme.palette.secondary.mainGradient,
    maxWidth: "1000px",
    maxHeight: "700px",
    [theme.breakpoints.down("sm")] : {
      maxWidth: "700px",
      maxHeight: "300px",
      padding: "13px",
    }
  },
}));

export default function PictureInfo(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const newDate = moment(props.date).format("dddd, MMMM, Do YYYY");
    
  
    return (
      <React.Fragment>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.formGridItem}>
            <Typography variant="h2">Date: {newDate}</Typography>
          </Grid>
          <Grid item className={classes.formGridItem}>
            <Typography variant="h2">Title of Photo: {props.title}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.formGridItem}>
            {props.media === "video" ? (
              <iframe
                className={classes.image}
                title="video"
                src={props.image}
                width="800px"
                height="600px"
              ></iframe>
            ) : (
              <img className={classes.image} alt="nasa" src={props.image} />
            )}
          </Grid>
          <Likes />
          <Grid item className={classes.formGridItem} align="center">
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleOpen}
            >
              Click here for an explanation!
            </Button>
          </Grid>

          <footer>
            <Typography
              variant="subtitle2"
              style={{ fontSize: "1rem", color: "black" }}
            >
              &copy;2022 Charlene Johnson
            </Typography>
          </footer>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              style={{
                borderBottom: "1px solid pink",
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: "1em",
                fontSize: "1.4em",
              }}
            >
              Explanation of: {props.title}
            </Typography>
            <Box
              style={{
                background: "white",
                border: "1px solid purple",
                padding: "2em",
              }}
            >
              <Typography
                id="modal-modal-description"
                variant="subtitle2"
                style={{ fontSize: "1.2em" }}
              >
                {props.explanation}
              </Typography>
            </Box>
          </Box>
        </Modal>
      </React.Fragment>
    );
}