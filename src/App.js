import React from "react";
import { RPSCard } from "./components/ItemCard";

import { inject, observer } from "mobx-react";
const CLIENT_HEIGHT = window.innerHeight;

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

  ActionBoundary = ({ user }) => {
    // style
    const readyStyle = this.props.store.ready
      ? { ...styles.actionBoundary }
      : { ...styles.actionBoundary, visibility: "hidden" };

    const func = {
      user: text => this.props.store.setUser(text),
      com: text => this.props.store.setCom(text)
    };
    return (
      <div style={readyStyle}>
        <RPSCard
          user={user}
          type="r"
          func={func[user]}
          ready={this.props.store.ready}
        />
        <RPSCard
          user={user}
          type="s"
          func={func[user]}
          ready={this.props.store.ready}
        />
        <RPSCard
          user={user}
          type="p"
          func={func[user]}
          ready={this.props.store.ready}
        />
      </div>
    );
  };

  render() {
    return (
      <div style={styles.container}>
        {this.props.store.ready ? (
          <>
            <this.ActionBoundary user="com" />
            <this.MsgBoundary />
            <this.ActionBoundary user="user" />
            {this.props.store.calc && <this.ModalScreen end />}
          </>
        ) : (
          <this.ModalScreen />
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: CLIENT_HEIGHT,
    backgroundColor: "#282c34",
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
    fontSize: "10vh",
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
