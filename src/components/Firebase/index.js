import "firebase/firestore";

import app from "firebase/app";
import config from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  // userRef = () => app.firestore().collection("users");
}

export default Firebase;
