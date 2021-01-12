import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Divider,
  Box,
  Typography,
  TextField,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import avatar from "../img/avatar.png";

const useStyles = makeStyles((theme) => ({
  customLine: {
    marginTop: "-30px",
  },

  avatarPos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  colorTitle: {
    color: "#141C3A",
  },

  formPos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    borderRadius: "50px",
    width: "300px",
    height: "3.5em",
    backgroundColor: "#7510F7",
    color: "#FFFFFF",
  },
}));

export default function ContactComp() {
  const classes = useStyles();

  return (
    <>
      <Divider
        orientation="horizontal"
        variant="middle"
        className={classes.customLine}
      />
      <Box mt={-7} className={classes.avatarPos}>
        <img src={avatar} height="100px" alt="avatar website" />
      </Box>
      <Box my={5} className={classes.colorTitle}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
            Merci d'avoir pris le temps de me contacter. Comment puis-je vous
            aider aujourd'hui ?
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Box align="center" my={5}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={5}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={10}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button}>Envoyer</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
