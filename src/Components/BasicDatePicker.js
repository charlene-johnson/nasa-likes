import React from "react";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function BasicDatePicker(props) {
  const {date, setDate} = props;

  return (
    <DatePicker
      label='Choose a Date'
      value={dayjs(date)}
      onChange={(date) => setDate(date)}
      disableFuture
      sx={{marginRight:1.5}}
    />
  );
}
