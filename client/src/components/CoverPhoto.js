import React from 'react';
import HomePhoto from "../../src/images/CoverPhoto.png";
import "../styles/CoverPhoto.css";
import Wrapper from './Wrapper';


const CoverPhoto = () => {
    return (
        <Wrapper>
        <div className="container">
        <h1 className="slogan centered">FIND FANS | BOOK EVENTS | SUPPORT YOUR FAVORITE ARTISTS</h1>
        <img className="coverpic"src={HomePhoto} alt="Cover Photo"></img>
        </div>
        </Wrapper>
    )
    
}



export default CoverPhoto;