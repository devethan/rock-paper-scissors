import React, { useState, useEffect } from "react";
import { RPSCard } from "./components/ItemCard";

import { inject, observer } from "mobx-react";
// import { Motion, spring, StaggeredMotion } from "react-motion";

const CLIENT_WIDTH = window.innerWidth;
const CLIENT_HEIGHT = window.innerHeight;

const imageComponent = require("./assets/images/robocop.png");

@inject("store")
@observer
class App extends React.Component {
  ModalScreen = ({ end }) => {
    const modalStyle = end
      ? styles.modalContainer
      : {
          ...styles.modalContainer,
          justifyContent: "center"
        };
    const modalBtnStyle = end ? styles.modalBtn : styles.msg;
    const modalFunc = () => {
      const ready = this.props.store.ready;
      this.props.store.setReady(!ready);
      if (ready) this.props.store.clearState();
    };
    return (
      <div style={modalStyle}>
        <div style={modalBtnStyle} onClick={modalFunc}>
          {end ? "Restart" : "You ready?"}
        </div>
      </div>
    );
  };

  MsgBoundary = () => {
    const resultMsg = {
      user: "You win",
      com: "You lose",
      none: "You draw"
    };
    return (
      <div style={styles.msgBoundary}>
        <p style={styles.msg}>{resultMsg[this.props.store.calc]}</p>
      </div>
    );
  };

  ActionBoundary = ({ user, com }) => {
    const userType = user ? "user" : "com";
    return (
      <div style={styles.actionBoundary}>
        {com && !this.props.store.com ? (
          <ComImageBox />
        ) : (
          <>
            <RPSCard userType={userType} type="r" />
            <RPSCard userType={userType} type="s" />
            <RPSCard userType={userType} type="p" />
          </>
        )}
      </div>
    );
  };

  render() {
    const { ready, calc, loading } = this.props.store;
    return (
      <div style={styles.container}>
        {ready && !loading && (
          <>
            <this.ActionBoundary com />
            <this.MsgBoundary />
            <this.ActionBoundary user />
            {calc && <this.ModalScreen end />}
          </>
        )}
        {ready && loading && <LoadingBox />}
        {!ready && <this.ModalScreen />}
      </div>
    );
  }
}

const ComImageBox = () => (
  <div style={styles.comImageBox}>
    <img src={imageComponent} style={styles.comImage} alt="computer" />
    <p style={{ fontSize: 20, color: "rgb(255, 255, 255, 0.5)" }}>Computer</p>
  </div>
);

const LoadingBox = () => {
  let [idx, setIdx] = useState(0);
  const typeArr = ["r", "p", "s"];

  useEffect(() => {
    // console.log("render");
    if (idx === 2) return;
    setTimeout(() => setIdx(++idx), 500);
  });

  return <RPSCard type={typeArr[idx]} />;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: CLIENT_WIDTH,
    minHeight: CLIENT_HEIGHT,
    position: "relative"
  },
  msgBoundary: {
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  msg: {
    fontSize: "8vh",
    fontWeight: "600",
    color: "whitesmoke",
    cursor: "pointer"
  },
  actionBoundary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  comImageBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 170
  },
  comImage: {
    height: 120,
    opacity: 0.8,
    marginBottom: 10
  },
  modalContainer: {
    width: 500,
    height: "100vh",
    position: "absolute",
    backgroundColor: "rgb(40, 44, 52, 0.3)",
    zIndex: 2,

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },
  modalBtn: {
    width: "inherit",
    heigth: "5vh",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    cursor: "pointer",
    marginBottom: "5vh",
    color: "white",
    fontSize: "5vh",
    fontWeight: "600",
    backgroundColor: "rgb(0, 0, 0, 0.5)"
  }
};

export default App;
