import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    // height: 200,
    position: "relative"
  },
  btnWrapper: {
    width: 150,
    height: 150,
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
  },
  text: {
    fontSize: 20,
    fontWeight: "600"
  },
  userText: {
    position: "absolute",
    top: -22
  }
};

export function RPSCard({ user, type }) {
  const [clicked, setClicked] = useState(false);
  const items = {
    rock: {
      logo: require("../../assets/images/rock.png"),
      label: "Rock"
    },
    paper: {
      logo: require("../../assets/images/paper.png"),
      label: "Paper"
    },
    scissors: {
      logo: require("../../assets/images/scissors.png"),
      label: "Scissors"
    }
  };
  return (
    <div style={styles.container}>
      <Button
        variant="contained"
        style={styles.btnWrapper}
        onClick={() => setClicked(!clicked)}
      >
        <img
          src={items[type].logo}
          style={
            clicked ? { ...styles.logo } : { ...styles.logo, opacity: 0.2 }
          }
        />
      </Button>
    </div>
  );
}
