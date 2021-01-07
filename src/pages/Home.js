import React from "react";

import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Information from "../component/Information";
import InfoInCard from "../component/InfoInCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Work from "../component/Work";

const cards = [
  {
    title: "Developer Front-end",
    text:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    text1: "Languages I speak",
    icon: "fas fa-cog",
  },
  {
    title: "Developer Back-end",
    text: "Soon",
    icon: "far fa-star",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Information />
      <InfoInCard />
      <Work />
    </>
  );
}
