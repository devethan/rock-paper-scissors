import { observable, action, decorate } from "mobx";

class Store {
  ready = false;
  com = null;
  user = null;

  setReady = bool => {
    this.ready = bool;
  };
  setCom = item => {
    this.com = item;
  };
  setUser = item => {
    this.user = item;
  };
}

decorate(Store, {
  ready: observable,
  com: observable,
  user: observable,
  setReady: action,
  setCom: action,
  setUser: action
});

export { Store };
