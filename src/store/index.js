import { observable, action, computed } from "mobx";

class Store {
  @observable ready = false;
  @observable com = null;
  @observable user = null;

  @action setReady = bool => {
    this.ready = bool;
  };
  @action setCom = item => {
    this.com = item;
  };
  @action setUser = item => {
    this.user = item;
  };
  @action clearState = () => {
    this.ready = false;
    this.com = null;
    this.user = null;
  };

  @computed get calc() {
    if (this.user && this.user === this.com) return "none"; // draw
    const resultSet = {
      rs: "user",
      rp: "com",
      pr: "user",
      ps: "com",
      sr: "com",
      sp: "user"
    };
    return resultSet[`${this.user}${this.com}`]; // score or none of state
  }
}

export { Store };
