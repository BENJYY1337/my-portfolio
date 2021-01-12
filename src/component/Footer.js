import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography } from "@material-ui/core";
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
        <Box pt={7} display="flex">
          <Box mx={2}>
            <a href="https://twitter.com/BENJYY1337">
              <TwitterIcon style={{ color: "#FFFFFF" }} />
            </a>
          </Box>
          <Box mx={2}>
            <a href="https://www.linkedin.com/in/benjamin-pernot-975916153/">
              <LinkedInIcon style={{ color: "#FFFFFF" }} />
            </a>
          </Box>
          <Box mx={2}>
            <a href="https://www.facebook.com/pernot.b">
              <FacebookIcon style={{ color: "#FFFFFF" }} />
            </a>
          </Box>
          <Box mx={2}>
            <a href="mailto:pernot.benjamin@outlook.fr">
              <MailIcon style={{ color: "#FFFFFF" }} />
            </a>
          </Box>
          <Box mx={2}>
            <a href="https://www.instagram.com/pernot_benjamin/?hl=fr">
              <InstagramIcon style={{ color: "#FFFFFF" }} />
            </a>
          </Box>
        </Box>
        <Box pt={7}>
          <Typography>Benjamin Pernot &#169;</Typography>
        </Box>
      </Box>
    </>
  );
}
