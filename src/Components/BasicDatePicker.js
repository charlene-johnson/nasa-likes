import React from "react";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";




export default function BasicDatePicker(props) {
  const {date, setDate} = props;

  return (
    <DesktopDatePicker
      label='Choose a Date'
      value={dayjs(date)}
      onChange={(date) => setDate(date)}
      disableFuture
    />
  );
}
