import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import moment from "moment";
import {
  Typography,
  Box,
  Modal,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Likes from "./Likes";

// modal styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderWidth: "20px",
  borderStyle: "solid",
  borderImage: "linear-gradient(to right, lightblue, pink)",
  borderImageSlice: "20%",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  titleGridItem: {
    margin: "2.5em",
    [theme.breakpoints.down("sm")]: {
      margin: "1em",
      fontSize: "0.7em",
      textAlign:"center"
    },
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
  image: {
    padding: "20px",
    border: "1px solid pink",
    background: theme.palette.secondary.mainGradient,
    maxWidth: "1000px",
    maxHeight: "700px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "350px",
      maxHeight: "300px",
      padding: "13px",
    },
    [theme.breakpoints.down("xs")] : {
      maxWidth: "300px",
      maxHeight:"300px",
      padding: "12px",
    }
  },
  video: {
    padding: "20px",
    border: "1px solid pink",
    background: theme.palette.secondary.mainGradient,
    width: 800,
    height: 600,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "350px",
      maxHeight: "300px",
      padding: "13px",
    },
    [theme.breakpoints.down("xs")] : {
      maxWidth: "300px",
      maxHeight: "300px",
      padding: "12px",
    }
  },
  copyright: {
    fontSize: "1rem",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: 295,
    },
  },
  explanationTitle: {
    borderBottom: "1px solid pink",
    fontFamily: "'Orbitron', sans-serif",
    marginBottom: "1em",
    fontSize: "1.4em",
    background: "linear-gradient(to right, lightblue, pink)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
    },
  },
  explanation: {
    fontSize: "1.2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
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
  console.log(props.title)

  return (
    <React.Fragment>
      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={classes.titleGridItem}>
          <Typography variant="h2">Date: {newDate}</Typography>
        </Grid>
        <Grid item className={classes.titleGridItem}>
          <Typography variant="h2">Title of Photo: {props.title}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={classes.titleGridItem}>
          {props.media === "video" ? (
            <iframe
              className={classes.video}
              title="video"
              src={props.image}
              width="800px"
              height="600px"
            ></iframe>
          ) : (
            <img className={classes.image} alt="nasa" src={props.image} />
          )}
        </Grid>
        <Likes/>
        <Grid item className={classes.titleGridItem} align="center">
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleOpen}
          >
            Click here for an explanation!
          </Button>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modal} sx={style}>
            <Typography
              className={classes.explanationTitle}
              id="modal-modal-title"
            >
              Information about: {props.title}
            </Typography>
            <Typography
              className={classes.explanation}
              id="modal-modal-description"
              variant="subtitle2"
              style={{ textAlign: "left" }}
            >
              {props.explanation}
            </Typography>
          </Box>
        </Modal>
        <footer>
          <Typography variant="subtitle2" className={classes.copyright}>
            &copy;2023 Charlene Johnson
          </Typography>
        </footer>
      </Grid>
    </React.Fragment>
  );
}
