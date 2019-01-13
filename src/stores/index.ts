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

// only these stores will be "hydrated"
const persistantStores: Stores = {
  authStore: new AuthStore()
};

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

Object.keys(persistantStores).map(val => hydrate(val, stores[val]));
