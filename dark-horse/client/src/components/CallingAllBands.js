import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import "../styles/CallingAllBands.css";
import indiebandimg from "../images/IndieBand.png";



const CallingAllBands = () => {


    return (
        <div className="root">
            <Paper className="paper">
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <ButtonBase className="image">
                            <img className="img" alt="Indie Band" src={indiebandimg} />
                        </ButtonBase>
                    </Grid>
                    <Grid item sm={6} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid className="callbands" item sm>
                                <Typography className="title" gutterBottom variant="subtitle1">
                                    Calling All Bands
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <Button variant="contained" className="bandbtn">Learn More</Button>

                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}


export default CallingAllBands;