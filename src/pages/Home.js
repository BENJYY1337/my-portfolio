import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Information from "../component/Information";
import InfoInCard from "../component/InfoInCard";
import Box from "@material-ui/core/Box";
import Work from "../component/Work";
import Collab from "../component/Collab";
import Footer from "../component/Footer";

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
        <Collab />
        <Footer />
      </Box>
    </>
  );
}
