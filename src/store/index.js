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
  clearState = () => {
    this.ready = false;
    this.com = null;
    this.user = null;
  };
}

decorate(Store, {
  ready: observable,
  com: observable,
  user: observable,
  setReady: action,
  setCom: action,
  setUser: action,
  clearState: action
});

export { Store };
