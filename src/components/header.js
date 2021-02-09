import React from 'react';
import greet from './header/greetings';

import { Grid, Avatar, Box, Typography, makeStyles } from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

function Header() {
  const greetings = greet();
  const randomInt = Math.floor(Math.random() * greetings.length);
  const avatarImg = "https://avatars.githubusercontent.com/u/22408586?s=460&u=aaa75511b5d2d5f780698b562dafc965dd14d32d&v=4";

  const classes = useStyles();

  return (
    <div>
      <Grid container space={3}>

        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end" pt={4}>
            <Avatar alt="NB" src={avatarImg} className={classes.large} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box pt={3} pl={3}>
            <Typography 
              variant="h4" 
              component="h4" 
              color="textPrimary"
            >
              <ArrowForwardIosIcon />
              {greetings[randomInt]}
            </Typography>

            <Typography 
              variant="h5" 
              component="h5" 
              color="textSecondary"
            >
              I am Norfa Bagas
            </Typography>

            <Typography
              variant="subtitle1"
              component="subtitle1"
              color="textSecondary"
            >
              Web Developer & Machine Learning enthusiast
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default Header;