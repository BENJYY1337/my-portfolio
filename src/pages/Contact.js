import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../component/Navbar";
import ContactComp from "../component/ContactComp";

const useStyles = makeStyles((theme) => ({}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <Navbar contact />
      <ContactComp />
    </>
  );
}
