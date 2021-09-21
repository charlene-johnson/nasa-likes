import React from "react";
import DatePicker from '@mui/lab/DatePicker';
import TextField from "@mui/material/TextField";

export default function BasicDatePicker(props) {
  const {date, setDate} = props;

  return(
    <DatePicker
        label="Select a Date"
        value={date}
        onChange={(date) => {
            setDate(date);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
  )
}