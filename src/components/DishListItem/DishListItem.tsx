import React, { Component } from "react";
import "./DishListItem.scss";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import moment from "moment";

import { IDish } from "../../models";

interface IDishListItemProps {
  dish: IDish;
}

class DishListItem extends Component<IDishListItemProps> {
  state = {
    checked: false
  };

  handleCooked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  transformTimestamp(timestamp: number): string {
    return moment(timestamp).format("hh:mm");
  }

  getTargetDetails(dish: IDish): string {
    return `${this.transformTimestamp(dish.orderedAt)}, ${dish.table}`;
  }

  render() {
    const { dish } = this.props;

    return (
      <ListItem
        className="DishListItem"
        key={dish.id}
        button
        onClick={this.handleCooked}
      >
        <ListItemText
          className="DishListItem-details quantity"
          primary={`${dish.quantity}`}
        />
        <ListItemText
          className="DishListItem-details target"
          primary={this.getTargetDetails(dish)}
        />
        <ListItemText
          className="DishListItem-details dish"
          primary={dish.name}
          secondary={dish.comment || ""}
        />

        <Checkbox checked={!!this.state.checked} tabIndex={-1} disableRipple />
      </ListItem>
    );
  }
}

export default DishListItem;
