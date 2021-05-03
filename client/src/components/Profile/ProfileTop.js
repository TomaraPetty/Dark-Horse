import React from "react";
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { grey } from '@material-ui/core/colors';
import BandInfo from '../../Utils/bands.json';

const ProfileTop = () => {
  
  

  return (
    <div className="profile-top bg-primary p-2">
    {BandInfo.map((profile) => (
      <div>
      <img className="round-img my-1" src={profile.img} alt={profile.name} />
      <h1 className="large">{profile.name}</h1>
      <p className="lead">Cast your vote to bring {profile.name} to YOU!</p>
      <p>{profile.location}</p>
      </div>
    ))}
      
      
      <Grid container direction="row" justify="center" alignItems="center">
        <a href='#' target="_blank" rel="noopener noreferrer">
          <LanguageIcon fontSize="large" style={{ color: grey[50] }} />
        </a>
        <a href='#' target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" style={{ color: grey[50] }} />
        </a>
        <a href='#' target="_blank" rel="noopener noreferrer">
          <FacebookIcon fontSize="large" style={{ color: grey[50] }} />
        </a>
        <a href='#' target="_blank" rel="noopener noreferrer">
          <TwitterIcon fontSize="large" style={{ color: grey[50] }} />
        </a>
        <a href='#' target="_blank" rel="noopener noreferrer">
          <YouTubeIcon fontSize="large" style={{ color: grey[50] }} />
        </a>
      </Grid>
    </div>
  );
};

export default ProfileTop;