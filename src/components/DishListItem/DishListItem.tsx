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
        // plugging real database, key would be probably some id, rather then timestamp
        key={dish.orderedAt}
        role={undefined}
        button
        onClick={this.handleCooked}
      >
        <ListItemText primary={`${dish.quantity}`} />
        <ListItemText primary={this.getTargetDetails(dish)} />
        <ListItemText primary={dish.name} secondary={dish.comment || ""} />

        <Checkbox checked={!!this.state.checked} tabIndex={-1} disableRipple />
      </ListItem>
    );
  }
}

export default DishListItem;
