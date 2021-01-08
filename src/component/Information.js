import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#7510F7",
    backgroundColor: "#7510F7",
    color: "#FFFFFF",
  },
}));

export default function Information() {
  const classes = useStyles();

  return (
    <Box pt={10} className={classes.root}>
      <Typography align="center" variant="h4" gutterBottom>
        Bonjour, je m'appelle Benjamin. Ravi de vous rencontrer.
      </Typography>
      <Box pb={10} pt={2}>
        <Container>
          <Typography align="center">
            J'ai debuté par l'école 42 qui m'a fait comprendre que le code était
            fait pour moi ! Ensuite je me suis dirigé vers le developement web
            front-end principalement car j'adore vraiment cette branche, j'ai
            suivis une formation qui m'a appris beaucoup de chose. Maintenant je
            m'auto forme en codant vraiment tout les jours et fais de la veille
            techno pour rester informé de ce qui ce fait à l'heure actuelle.
            J'ai hâte de commencer mon parcours en tant que developpeur web avec
            des personnes qui vont m'apprendre et me pousser vers le haut et
            c'est avec plaisir que je partage ce que j'ai pu acquerir à travers
            les differents chemins que j'ai parcouru.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
