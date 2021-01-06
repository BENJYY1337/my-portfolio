import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import MuiLink from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Logo from './Logo'

const useStyles = makeStyles((theme) => ({

    root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    paddingBottom: "50px",
    },

    posNav: {
        flexGrow: 1,
    },

    button: {
        borderRadius: "50px",
        height: "3.5em",
        backgroundColor: "#7510F7",
        color: "#FFFFFF",
    },

}));

export default function Navbar() {

  const classes = useStyles();

  return (

    <Container>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography className={classes.posNav}>
            <Logo />
            </Typography>
            <MuiLink component={Button} href="/contact" className={classes.button}>Contactez-moi</MuiLink>
          </Toolbar>
        </AppBar>
    </Container>

  );
}
