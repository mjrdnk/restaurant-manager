import { observable, action, computed } from "mobx";

export interface INotificationStore {
  message: string;
  notify(message: string): void;
}

export class NotificationStore implements INotificationStore {
  @observable private _message: string = "";

  @computed
  public get message(): string {
    return this._message;
  }

  @action.bound
  public notify(message: string): void {
    this._message = message;
  }
}
