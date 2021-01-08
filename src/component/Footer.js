import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Container, Button } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import Logo from "./Logo";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7510F7",
    display: "flex",
    flexDirection: "column",
    color: "#D6B8FC",
    alignItems: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Box mt={10} className={classes.root}>
        <Logo />
        <Typography align="center" variant="h6" gutterBottom>
          Vivre, apprendre & progresser un jour à la fois.
        </Typography>
        <Box
          pt={7}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <TwitterIcon style={{ color: "#FFFFFF" }} />
          <LinkedInIcon style={{ color: "#FFFFFF" }} />
          <FacebookIcon style={{ color: "#FFFFFF" }} />
          <MailIcon style={{ color: "#FFFFFF" }} />
          <InstagramIcon style={{ color: "#FFFFFF" }} />
        </Box>
        <Box pt={7}>
          <Typography>Benjamin Pernot &#169;</Typography>
        </Box>
      </Box>
    </>
  );
}
