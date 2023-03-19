import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";

import Order from "./Order";

const showOrder = (props) => {
  let total = 0;
  props.orders.forEach((el) => (total += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <p className="total"> Total: ${total}</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no items in the cart</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">TUN</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Account </li>
        </ul>
        <BiShoppingBag
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrder(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presenation"></div>
    </header>
  );
}
