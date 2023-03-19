import React, { Component } from "react";
import { CiCircleRemove } from "react-icons/ci";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="pic" />
        <h2>{this.props.item.title}</h2>
        <b>${this.props.item.price}</b>
        <CiCircleRemove
          className="delete-icon"
          onClick={() => {
            this.props.onDelete(this.props.item.id);
          }}
        />
      </div>
    );
  }
}

export default Order;
