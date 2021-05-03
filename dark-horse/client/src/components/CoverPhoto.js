import React from 'react';
import HomePhoto from "../../src/images/CoverPhoto.png";
import "../styles/CoverPhoto.css";


const CoverPhoto = () => {
    return (
        <img className="coverpic"src={HomePhoto} alt="Cover Photo"></img>
    )
    
}



export default CoverPhoto;