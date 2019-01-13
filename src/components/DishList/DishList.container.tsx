import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { INotificationStore } from "../../stores/notificationStore";
import { IDish, IPagination } from "../../models";
import { messages, paginationConfig, endpoints } from "../../config";
import DishList from "./DishList";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface IDishListContainerProps {
  notificationStore?: INotificationStore;
}

interface IDishListContainerState {
  dishList: IDish[];
  cachedDishList: IDish[];
  pagination: IPagination;
  canFetchMore: boolean;
}

@inject("notificationStore")
@observer
class DishListContainer extends Component<
  IDishListContainerProps,
  IDishListContainerState
> {
  constructor(props: IDishListContainerProps) {
    super(props);
    this.state = {
      dishList: [],
      cachedDishList: [],
      pagination: {
        position: paginationConfig.POSITION,
        pageSize: paginationConfig.PAGE_SIZE
      },
      canFetchMore: true
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  // done in the container for simplicity
  // as it's the only 'API' call in the app,
  // but could be moved to MobX store and cached.
  async fetchDishes(): Promise<IDish[]> {
    return await fetch(endpoints.DISHES_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      // res could have probably some better type
      .then((res: any) => {
        // JSON comes already sorted by createdAt
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

    const newDishes = this.getCacheSlice(position, pageSize);

    // pagination should be done on the server side
    this.setState({
      dishList: [...dishList, ...newDishes],
      pagination: {
        position: ++position,
        pageSize
      },
      canFetchMore: newDishes.length >= pageSize
    });
  }

  getCacheSlice(position: number, pageSize: number): IDish[] {
    const { cachedDishList } = this.state;
    const startIndex = pageSize * position + position;
    const endIndex = (position + 1) * pageSize + position;

    const cacheSlice = cachedDishList.filter(
      (_cachedDish: IDish, index: number) =>
        index >= startIndex && index <= endIndex
    );

    console.info(
      "Cache slice ",
      cacheSlice,
      " got appended to ",
      this.state.dishList
    );

    return cacheSlice;
  }

  handleLoadMore(): void {
    const { pagination } = this.state;

    this.appendDishes(pagination.position, pagination.pageSize);
  }

  componentDidMount() {
    console.log("BELOW CONSOLE LOGS ARE JUST TO PRESENT PAGINATION.");
    const { dishList, pagination } = this.state;

    if (dishList.length === 0) {
      this.fetchDishes().then((response: IDish[]) => {
        this.setState({ cachedDishList: response });
        this.appendDishes(pagination.position, pagination.pageSize);
      });
    }
  }

  componentWillUnmount() {
    console.log("END OF PAGINATION PRESENTATION.");
  }

  render() {
    const { dishList, canFetchMore } = this.state;

    return (
      <ErrorBoundary>
        <DishList
          dishList={dishList}
          canFetchMore={canFetchMore}
          onLoadMore={this.handleLoadMore}
        />
      </ErrorBoundary>
    );
  }
}

export default DishListContainer;
