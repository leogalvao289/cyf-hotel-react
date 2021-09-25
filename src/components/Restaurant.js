import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [OrderOne, setOrders] = useState(0);
  const increment = () => {
    setOrders(OrderOne + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {OrderOne}
          <RestaurantButton increment={increment} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
