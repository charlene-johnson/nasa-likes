import React,{useState} from "react";
import {makeStyles} from "@mui/styles";
import moment from "moment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
export default function PictureInfo(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const newDate = moment(props.date).format("dddd, MMMM, Do YYYY");

    return (
        <>
            
        </>
    )
}