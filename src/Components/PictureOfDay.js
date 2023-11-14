import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureInfo from "./PictureInfo";
import Loader from "react-loader-spinner";
import { makeStyles } from "@mui/styles";
import dayjs from 'dayjs';


const useStyles = makeStyles(() => ({
  keySpinner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    fontFamily:"Orbitron",
    fontSize:"1.5em"
  },
}));

export default function PictureOfDay(props) {
  const classes = useStyles();
  const [picture, setPicture] = useState([]);
  const { date } = props;
  const [isLoading, setIsLoading] = useState(false);
  let selectDate = dayjs(date, "ddd MMM DD YYYY HH:mm:ss Z-HHmm");
  let formatDate = selectDate.format("YYYY-MM-DD");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=QQpTYaQHDUvPAyVorMgxfKhQEoSQikBYt5WuFCf6&date=${formatDate}`
      )
      .then((response) => {
        setPicture(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [formatDate]);

  return (
    <div>
      {!isLoading && picture ? (
        <PictureInfo
          date={picture.date}
          title={picture.title}
          image={picture.url}
          media={picture.media_type}
          explanation={picture.explanation}
        />
      ) : (
        <div className={classes.keySpinner}>
          <Loader type="Puff" color="#800080" height="60" width="60" />
          <p>Loading!</p>
        </div>
      )}
    </div>
  );
}
