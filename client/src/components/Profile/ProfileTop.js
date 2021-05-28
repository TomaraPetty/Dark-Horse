import React, { Fragment, useState, useEffect } from "react";
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { grey } from '@material-ui/core/colors';
import BandAPI from '../../Utils/bandApi';
import MapField from '../MapField';
import Box from '@material-ui/core/Box';

const ProfileTop = () => {

  const [bands, setBands] = useState([]);
  // Load all bands and store them with setBands
  useEffect(() => {
    loadBands();
  }, []);
  // Loads all bands and sets them to bands
  function loadBands() {
    BandAPI.getBands()
      .then(res => {
        setBands(res.data);
      })
      .catch(err => console.log(err));
  }


  return (
    <div className="profile-top bg-primary p-2">
    {bands.map((profile) => (
      <div>
      <img className="round-img my-1" src={profile.image} alt={profile.name} />
      <h1 className="large">{profile.name}</h1>
      <p className="lead">Cast your vote to bring {profile.name} to YOU!</p>
      <p>{profile.location}</p>

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

      <br/>

      <div className='profile-about bg-light p-2'>
      <Fragment>
        <h2 className='text-primary'>About</h2>

        <p>{profile.about}</p>

        <div className='line' />
        <img style={{ width: 700 }} className="progress-bar" src="https://miro.medium.com/max/2520/0*A9Ke7sg6rCEq51FG.jpeg" alt="progress bar"/>
      </Fragment>

      </div>

      <div className='profile-about bg-light p-2'>

      <Fragment>
        <h2 className='text-primary'>Promo Video</h2>
        <iframe width="560" height="315" src={profile.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Fragment>


      </div>
      <div className='profile-about bg-light p-2'>
      <h2 className='text-primary'>{profile.name}'s Live Campaign</h2>
      <MapField />
      
      </div>
      <br/><br/>
      </div>

    ))}   
      
    </div>
  );
};

export default ProfileTop;