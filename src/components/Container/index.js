import React from "react";
import { Container } from "@material-ui/core";
import { ModalContainer } from "./ModalContainer";

const WINDOW_HEIGHT = window.innerHeight;

const BasicContainer = ({ children }) => {
  return (
    <Container fixed style={styles.root}>
      {children}
    </Container>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: WINDOW_HEIGHT
  }
};

export default BasicContainer;
export { ModalContainer };
