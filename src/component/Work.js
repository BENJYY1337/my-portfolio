import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CardMedia,
  Divider,
  Container,
} from "@material-ui/core";
import MuiLink from "@material-ui/core/link";

import demtovideo from "../img/demtovideo.jpg";
import siteVitrine from "../img/siteVitrine.png";
import reactCrud from "../img/reactCrud.png";
import reactForm from "../img/reactForm.png";

const useStyles = makeStyles({
  colorTitle: {
    color: "#141C3A",
  },

  customLine: {
    marginTop: "100px",
  },
});

export default function Work() {
  const classes = useStyles();

  return (
    <>
      <Box pt={20} display="flex" flexDirection="column" textAlign="center">
        <Typography variant="h4" className={classes.colorTitle} gutterBottom>
          <strong>Mes projets recents</strong>
        </Typography>
        <Typography>
          Voici mes projets divers et variés. Si vous voulez en savoir plus{" "}
          <MuiLink
            href="mailto:pernot.benjamin@outlook.fr"
            style={{ textDecoration: "none" }}
          >
            {" "}
            contactez-moi.
          </MuiLink>
        </Typography>
      </Box>

      <Box mt={10} align="center">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" style={{ maxWidth: "100%" }}>
              <CardActionArea href="https://www.demtovideo.tv/app/">
                <CardMedia
                  style={{ height: "210px" }}
                  image={demtovideo}
                  title="demtovideo.tv"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    demtovideo.tv
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Site de passionné de csgo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" style={{ maxWidth: "100%" }}>
              <CardActionArea href="https://github.com/BENJYY1337/react-form">
                <CardMedia
                  style={{ height: "210px" }}
                  image={reactForm}
                  title="react formulaire"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Formulaire
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Formulaire react complet
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" style={{ maxWidth: "100%" }}>
              <CardActionArea href="https://github.com/BENJYY1337/react-auth">
                <CardMedia
                  style={{ height: "210px" }}
                  image={reactCrud}
                  title="react crud"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Authentification
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Authentification avec facebook, google, gmail et firebase
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" style={{ maxWidth: "100%" }}>
              <CardActionArea href="https://github.com/BENJYY1337/react-vitrine">
                <CardMedia
                  style={{ height: "210px" }}
                  image={siteVitrine}
                  title="Site vitrine react"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Site Vitrine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Projet de site vitrine en react avec des animations
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Divider
            orientation="horizontal"
            variant="middle"
            className={classes.customLine}
          />
        </Container>
      </Box>
    </>
  );
}
