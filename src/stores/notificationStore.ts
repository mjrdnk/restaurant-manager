import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface INotificationStore {
  messages: string[];
  addMessage(message: string): void;
}

export class NotificationStore implements INotificationStore {
  @persist @observable private _messages: string = "";

  @computed
  public get messages(): string[] {
    return JSON.parse(this._messages);
  }

  @action.bound
  public addMessage(message: string): void {
    this._messages = JSON.stringify([message, ...this.messages]);
  }
}
