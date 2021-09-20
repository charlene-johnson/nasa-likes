import React from "react";
import Calendar from "react-calendar";

export default function Calendars(props) {
    const {date, setDate} = props;
    return(
        <div>
            <Calendar onChange={(date)=> setDate(date)} value={date} />
        </div>
    );
}