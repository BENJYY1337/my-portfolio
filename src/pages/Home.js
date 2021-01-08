import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Information from "../component/Information";
import InfoInCard from "../component/InfoInCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Work from "../component/Work";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Navbar />
        <Header />
        <Information />
        <InfoInCard />
        <Work />
      </Box>
    </>
  );
}
