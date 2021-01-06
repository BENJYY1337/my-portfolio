import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "./Avatar";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },

  colorTitle: {
    color: "#141C3A",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.root}>
        <Box className={classes.colorTitle}>
          <Typography variant="h3" gutterBottom>
            <strong>Front-end Junior Developer</strong>
          </Typography>
        </Box>
        <Typography variant="h6">
          Je conçois et code des choses et j'aime ce que je fais
        </Typography>
        <Box pt={10} pb={10}>
          <Avatar />
        </Box>
      </Box>
    </Container>
  );
}
