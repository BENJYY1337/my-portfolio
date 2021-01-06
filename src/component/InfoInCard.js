import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {},
});

export default function InfoInCard(props) {
  const classes = useStyles();

  return (
    <Box my={2} align="center">
      <Card variant="outlined" style={{ maxWidth: "300px" }}>
        <CardContent align="center">
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs>
                <Typography>Developer Front-end</Typography>
              </Grid>
              <Grid item xs>
                <Typography>ntm</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
