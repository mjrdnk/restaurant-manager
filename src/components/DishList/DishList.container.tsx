import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { INotificationStore } from "../../stores/notificationStore";
import DishList from "./DishList";
import { IDish } from "../../models";
import { messages } from "../../config";

const DISHES_ENDPOINT = "/fakeDishesList.json";

interface IDishListContainerProps {
  notificationStore?: INotificationStore;
}

interface IDishListContainerState {
  dishList: IDish[];
}

@inject("notificationStore")
@observer
class DishListContainer extends Component<
  IDishListContainerProps,
  IDishListContainerState
> {
  state: IDishListContainerState = {
    dishList: []
  };

  // this could be done in MobX store
  // caching could be done also
  async fetchDishes(): Promise<IDish[]> {
    return await fetch(DISHES_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((res: any) => {
        return res ? (res.json() as IDish[]) : [];
      })
      .catch(err => {
        const { notify } = this.props.notificationStore!;
        notify(messages.DISH_LIST.ERROR);

        // log this error in sentry or other system
        console.log("DISH_LIST.ERROR: ", err);

        return [];
      });
  }

  componentDidMount() {
    const { dishList } = this.state;

    if (dishList.length === 0) {
      this.fetchDishes().then((response: IDish[]) =>
        this.setState({ dishList: response })
      );
    }
  }

  render() {
    const { dishList } = this.state;

    return (
      <ErrorBoundary>
        <DishList dishList={dishList} />
      </ErrorBoundary>
    );
  }
}

export default DishListContainer;
