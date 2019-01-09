import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface IAuthStore {
  isAuthenticated: boolean;
  authenticate(isAuthenticated: boolean): void;
}

export class AuthStore implements IAuthStore {
  @persist @observable private _isAuthenticated = false;

  @computed
  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  @action.bound
  public authenticate(isAuthenticated: boolean): void {
    this._isAuthenticated = isAuthenticated;
  }
}
