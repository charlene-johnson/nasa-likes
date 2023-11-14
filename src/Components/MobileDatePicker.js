import React from "react";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from "dayjs";

export default function PhoneDatePicker(props) {
  const { date, setDate } = props;

  return (
    <MobileDatePicker
      label='Choose a Date'
      value={dayjs(date)}
      onChange={(date) => setDate(date)}
      disableFuture
    />
  );
}
