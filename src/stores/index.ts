import { create } from "mobx-persist";

import { AuthStore } from "./authStore";
import { NotificationStore } from "./notificationStore";

interface Stores {
  [key: string]: any;
}

export const stores: Stores = {
  authStore: new AuthStore(),
  notificationStore: new NotificationStore()
};

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

Object.keys(stores).map(val => hydrate(val, stores[val]));
