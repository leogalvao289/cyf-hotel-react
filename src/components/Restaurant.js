import React from "react";
import { useState } from "react";
import Order from "./Order";
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
        <Order OrderOne={OrderOne} setOrders={setOrders} />
        <RestaurantButton increment={increment} />
      </ul>
    </div>
  );
};

export default Restaurant;
