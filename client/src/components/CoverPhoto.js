import React from 'react';
import HomePhoto from "../../src/images/CoverPhoto.png";
import "../styles/CoverPhoto.css";
import Wrapper from './Wrapper';


const CoverPhoto = () => {
    return (
        <Wrapper>
        <div className="container">
        <h1 className="centered">Find fans | Book events | Support your favorite artists</h1>
        <img className="coverpic"src={HomePhoto} alt="Cover Photo"></img>
        </div>
        </Wrapper>
    )
    
}



export default CoverPhoto;