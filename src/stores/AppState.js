import { observable, action } from "mobx";
import axios from "axios";
import data from "./mock.js";

export default class AppState {
  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;
  @observable page;
  @observable take;
  @observable testval;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};
    this.page = 1;
    this.take = 10;

    this.testval = "Footer text";
  }

  fetchData(page, id) {
    if (id) {
      this.setSingle(data.events.find(i => i.id === id));
    }
    if (page) {
      this.setPage(page);
    } else {
      this.setPage(1);
    }
  }

  @action setPage(page) {
    this.page = page;
    this.setData(data.events.slice(this.page * this.take, this.page * this.take + this.take));
  }
  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
