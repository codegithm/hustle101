import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ActiveClient from "../Active/Active";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 170,
  },
});

const Active = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <ActiveClient />
    </Container>
  );
};

export default Active;
