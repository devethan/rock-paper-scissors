import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    width: 150,
    height: 150,
    // backgroundColor: "#282c34",
    backgroundColor: "transparent",
    border: "3px solid #09d3ac",
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  logo: {
    height: 90
  }
};

function Container({ type }) {
  const logos = {
    rock: require("./assets/images/rock.png"),
    paper: require("./assets/images/paper.png"),
    scissors: require("./assets/images/scissors.png")
  };
  return (
    <Button variant="contained" style={styles.container}>
      <img src={logos[type]} style={styles.logo} />
    </Button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container type="rock" />
        <Container type="scissors" />
        <Container type="paper" />
      </header>
    </div>
  );
}

export default App;
