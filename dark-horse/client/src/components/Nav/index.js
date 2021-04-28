import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import "../../styles/Nav.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="bg-img">
      <div class="container">
        <div class="topnav">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Dark Horse
          </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
              <Button color="inherit">For Bands</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}