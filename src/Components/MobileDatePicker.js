import React from "react";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";

export default function PhoneDatePicker(props) {
  const { date, setDate } = props;

  return (
    <MobileDatePicker
      label="Choose a Date"
      value={date}
      onChange={(date) => setDate(date)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
