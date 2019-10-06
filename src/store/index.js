import { observable, action, computed } from "mobx";

class Store {
  @observable ready = false;
  @observable loading = false;
  @observable com = null;
  @observable user = null;

  // Random item from 'Com user'
  async makeRandomItem() {
    const itemArr = ["r", "p", "s"];
    const randomIdx = await Math.round((Math.random() * 10) / 3);
    console.log("created random item");
    return itemArr[randomIdx];
  }

  @action setReady = bool => {
    this.ready = bool;
  };
  @action setUser = item => {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1600);
    this.user = item;
    this.setCom(); // create com's result
  };
  @action setCom = async () => {
    while (!this.com) {
      this.com = await this.makeRandomItem();
    }
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
