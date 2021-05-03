import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import BandInfo from '../Utils/bands.json';
import '../styles/BandCard.css';

const BandCard = () => {
  return (
    <div className="card">
      <GridList className="bandcover" cols={4}>
        {BandInfo.map((tile) => (
          <GridListTile key={tile.name}>
            <img src={tile.img} alt={tile.name} className="bandimg" />
            <GridListTileBar className="cardbar"></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default BandCard;