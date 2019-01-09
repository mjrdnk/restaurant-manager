import { AuthStore } from "./authStore";
import { create } from "mobx-persist";

interface Stores {
  [key: string]: any;
}

export const stores: Stores = {
  authStore: new AuthStore()
};

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

Object.keys(stores).map(val => hydrate(val, stores[val]));
