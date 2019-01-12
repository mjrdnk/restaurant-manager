import React, { Component } from "react";
import "./DishListItem.scss";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
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

  getSecondaryText(dish: IDish): string {
    const { comment } = dish;
    return comment ? `${dish.orderedAt}, ${comment}` : `${dish.orderedAt}`;
  }

  render() {
    const { dish } = this.props;

    return (
      <ListItem
        key={dish.orderedAt}
        role={undefined}
        button
        onClick={this.handleCooked}
      >
        <ListItemText primary={`q-ty: ${dish.quantity}`} />
        <ListItemText
          primary={dish.name}
          secondary={this.getSecondaryText(dish)}
        />
        <Checkbox checked={!!this.state.checked} tabIndex={-1} disableRipple />
      </ListItem>
    );
  }
}

export default DishListItem;
