import React,{useState, useEffect} from "react";
import axios from "axios";
import PictureInfo from "./PictureInfo";
import moment from "moment";


export default function PictureOfDay(props) {
    const [picture, setPicture] = useState([])
    const {date} = props;
    let selectDate = moment(date, "ddd MMM DD YYYY HH:mm:ss Z-HHmm");
    let formatDate = selectDate.format("YYYY-MM-DD");

    useEffect(() => {
        axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=QQpTYaQHDUvPAyVorMgxfKhQEoSQikBYt5WuFCf6&date=${formatDate}`
        )
        .then((response) => {
            console.log(response.data);
            setPicture(response.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, [formatDate]);


    return(
        <div className="info">
            <PictureInfo
                date={picture.date}
                title={picture.title}
                image={picture.url}
                media={picture.media_type}
                explanation={picture.explanation}
            />
        </div>
    );
}