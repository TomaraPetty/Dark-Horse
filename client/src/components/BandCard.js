import React, { useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import BandInfo from '../Utils/bands.json';
import BandAPI from '../Utils/bandApi';
import '../styles/BandCard.css';
import Button from '@material-ui/core/Button';

const BandCard = () => {


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
    <div className="card">
      <GridList className="bandcover" cols={4}>
        {bands.map((band) => (
          <>
          <GridListTile key={band.name}>
          <Button onClick={event =>  window.location.href='/bandprofile'}>
            <img href={band._id} src={band.image} alt={band.name} className="bandimg" />
          </Button>
            <GridListTileBar className="cardbar"></GridListTileBar>
          </GridListTile>
          
          </>
        ))}
      </GridList>
    </div>
  );
};

export default BandCard;
