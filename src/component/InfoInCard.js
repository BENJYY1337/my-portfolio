import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles({
  root: {},

  colorTitle: {
    color: "#141C3A",
  },

  colorSubtitle: {
    color: "#7510F7",
  },
});

export default function InfoInCard(props) {
  const classes = useStyles();

  return (
    <Box my={-5} align="center">
      <Card variant="outlined" style={{ maxWidth: "300px" }}>
        <CardContent align="center">
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs>
                <CodeIcon />
              </Grid>

              <Box mt={3}>
                <Grid item xs>
                  <Typography variant="h5" className={classes.colorTitle}>
                    <strong>Front-end Developer</strong>
                  </Typography>
                </Grid>
              </Box>

              <Box mt={3}>
                <Grid item xs>
                  <Typography>
                    J'aime coder des choses à partir de zéro et j'aime donner
                    vie à des idées
                  </Typography>
                </Grid>
              </Box>

              <Box mt={3}>
                <Grid item xs>
                  <Typography className={classes.colorSubtitle}>
                    Languages:
                  </Typography>
                </Grid>
              </Box>

              <Box mt={1}>
                <Grid item xs>
                  <Typography>HTML, CSS, Sass, ReactJS, MaterialUI</Typography>
                </Grid>
              </Box>

              <Box mt={3}>
                <Grid item xs>
                  <Typography className={classes.colorSubtitle}>
                    Outils dev:
                  </Typography>
                </Grid>
              </Box>

              <Box mt={1}>
                <Grid item xs>
                  <Typography>Github</Typography>
                  <Typography>Figma</Typography>
                  <Typography>Adobe XD</Typography>
                  <Typography>Slack</Typography>
                  <Typography>VSCode</Typography>
                  <Typography>Terminal</Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
