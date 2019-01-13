import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { INotificationStore } from "../../stores/notificationStore";
import DishList from "./DishList";
import { IDish, IPagination } from "../../models";
import { messages, paginationConfig } from "../../config";
import Button from "@material-ui/core/Button";

const DISHES_ENDPOINT = "/fakeDishesList.json";

interface IDishListContainerProps {
  notificationStore?: INotificationStore;
}

interface IDishListContainerState {
  dishList: IDish[];
  cachedDishList: IDish[];
  pagination: IPagination;
}

@inject("notificationStore")
@observer
class DishListContainer extends Component<
  IDishListContainerProps,
  IDishListContainerState
> {
  state: IDishListContainerState = {
    dishList: [],
    cachedDishList: [],
    pagination: {
      position: paginationConfig.POSITION,
      pageSize: paginationConfig.PAGE_SIZE
    }
  };

  // done in the container for simplicity
  // as it's the only 'API' call in the app,
  // but could be moved to MobX store and cached,
  async fetchDishes(): Promise<IDish[]> {
    return await fetch(DISHES_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      // res could have probably some better type
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

  appendDishes(position: number, pageSize: number): void {
    const { dishList } = this.state;

    // pagination should be done on the server side
    this.setState({
      dishList: [...dishList, ...this.getCacheSlice(position, pageSize)],
      pagination: {
        position: ++position,
        pageSize
      }
    });
  }

  getCacheSlice(position: number, pageSize: number): IDish[] {
    const { cachedDishList } = this.state;
    const startIndex = pageSize * position + position;
    const endIndex = (position + 1) * pageSize + position;

    const cacheSlice = cachedDishList.filter(
      (cachedDish: IDish, index: number) =>
        index >= startIndex && index <= endIndex
    );

    console.log("cache slice: ", cacheSlice);

    return cacheSlice;
  }

  componentDidMount() {
    const { dishList, pagination } = this.state;

    if (dishList.length === 0) {
      this.fetchDishes().then((response: IDish[]) => {
        this.setState({ cachedDishList: response });
        this.appendDishes(pagination.position, pagination.pageSize);
      });
    }
  }

  render() {
    const { dishList, pagination } = this.state;

    console.log("pagination: ", pagination);

    return (
      <ErrorBoundary>
        <Button
          onClick={() =>
            this.appendDishes(pagination.position, pagination.pageSize)
          }
        >
          Load more
        </Button>
        <DishList dishList={dishList} />
      </ErrorBoundary>
    );
  }
}

export default DishListContainer;
