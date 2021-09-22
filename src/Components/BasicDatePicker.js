import React from "react";
import DatePicker from '@mui/lab/DatePicker';
import TextField from "@mui/material/TextField";

export default function BasicDatePicker(props) {
  const {date, setDate} = props;

  return (
    <DatePicker
      label="Choose a Date"
      value={date}
      onChange={(date) => setDate(date)}
      renderInput={(params) => <TextField style={{margin:16}} {...params} />}
    />
  );
}