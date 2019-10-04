import React from "react";
import { RPSCard } from "./components/ItemCard";

function App() {
  return (
    <div style={styles.container}>
      <ActionBoundary user="com" />
      <MsgBoundary />
      <ActionBoundary user="user" />
    </div>
  );
}

function MsgBoundary() {
  return (
    <div style={styles.msgBoundary}>
      <p style={styles.msg}>You win</p>
    </div>
  );
}

function ActionBoundary({ user }) {
  return (
    <div style={styles.actionBoundary}>
      <RPSCard user={user} type="rock" />
      <RPSCard user={user} type="scissors" />
      <RPSCard user={user} type="paper" />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#282c34"
  },
  msgBoundary: {
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  msg: { fontSize: "10vh", fontWeight: "600", color: "whitesmoke" },
  actionBoundary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  }
};

export default App;
