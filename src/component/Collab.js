import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Button } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  colorTitle: {
    color: "#141C3A",
  },

  button: {
    backgroundColor: "#7510F7",
    color: "#FFFFFF",
    borderRadius: "50px",
    height: "3.5em",
    width: "15em",
  },
}));

export default function Collab() {
  const classes = useStyles();

  return (
    <>
      <Box pt={10} display="flex" flexDirection="column" textAlign="center">
        <Typography variant="h4" className={classes.colorTitle} gutterBottom>
          <strong>Vous souhaitez me contacter ?</strong>
        </Typography>
        <Typography variant="subtitle1">
          Je suis ouvert à discuter de travaux de conception de sites ou
          d'opportunités de travail.
        </Typography>
        <Box pt={5}>
          <MuiLink
            component={Button}
            href="/contact"
            className={classes.button}
          >
            Contactez-moi
          </MuiLink>
        </Box>
      </Box>
    </>
  );
}
