import React from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: "75%",
    margin: 16,
    [theme.breakpoints.down("sm")] : {
      marginLeft: 40
    }
  }
}));


export default function BasicDatePicker(props) {
  const { date, setDate } = props;
  const classes = useStyles();

  return (
    <DatePicker
      label="Choose a Date"
      value={date}
      onChange={(date) => setDate(date)}
      renderInput={(params) => (
        <TextField className={classes.datePicker} {...params} />
      )}
    />
  );
}
