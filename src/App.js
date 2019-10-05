import React from "react";
import { RPSCard } from "./components/ItemCard";

import { inject, observer } from "mobx-react";

const App = inject("store")(
  observer(({ store }) => {
    const { ready, com, user } = store;
    const { setReady, setCom, setUser } = store;
    // const [ready, setReady] = useState(false);
    // const [com, setCom] = useState(null);
    // const [user, setUser] = useState(null);

    // calc score
    function calc(user, com) {
      if (user && user === com) return "none"; // draw
      const resultSet = {
        rs: "user",
        rp: "com",
        pr: "user",
        ps: "com",
        sr: "com",
        sp: "user"
      };
      return resultSet[`${user}${com}`]; // score or none of state
    }

    // set item
    const func = {
      user: item => setUser(item),
      com: item => setCom(item)
    };

    // clear State
    function clear() {
      // window.location.reload();
      setReady(false);
      setCom(null);
      setUser(null);
    }

    return (
      <div style={styles.container}>
        <ActionBoundary user="com" func={func} ready={ready} />
        <MsgBoundary func={{ ready, setReady }} winner={calc(user, com)} />
        <ActionBoundary user="user" func={func} ready={ready} />
        {calc(user, com) && <EndModal clear={clear} />}
      </div>
    );
  })
);

function EndModal({ clear }) {
  return (
    <div style={styles.modalContainer}>
      <div style={styles.modalBtn} onClick={() => clear()}>
        Restart
      </div>
    </div>
  );
}

function MsgBoundary({ func: { ready, setReady }, winner }) {
  const resultMsg = {
    user: "You win",
    com: "You lose",
    none: "You draw"
  };
  return (
    <div style={styles.msgBoundary} onClick={() => setReady(true)}>
      <p style={styles.msg}>{ready ? resultMsg[winner] : `Ready`}</p>
    </div>
  );
}

function ActionBoundary({ user, ready, func }) {
  // style
  const readyStyle = ready
    ? { ...styles.actionBoundary }
    : { ...styles.actionBoundary, visibility: "hidden" };
  return (
    <div style={readyStyle}>
      <RPSCard user={user} type="r" func={func[user]} ready={ready} />
      <RPSCard user={user} type="s" func={func[user]} ready={ready} />
      <RPSCard user={user} type="p" func={func[user]} ready={ready} />
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
  msg: { fontSize: "10vh", fontWeight: "600", color: "whitesmoke" },
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
