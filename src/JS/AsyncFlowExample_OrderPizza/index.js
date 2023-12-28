import React from "react";
import { orderFoodByCallbacks } from "./CallBackHell";
import { orderFoodByPromises } from "./Promises";

function AsyncHandling() {
  const handleOrderFoodByCallbacks = () => {
    console.log("Ordering food by callbacks...");
    orderFoodByCallbacks();
  };

  const handleOrderFoodByPromises = async () => {
    console.log("Ordering food by promises...");
    await orderFoodByPromises();
  };
  return (
    <div>
      <h1>Order Food (check logs)</h1>
      <button onClick={handleOrderFoodByCallbacks}>
        Order Food by Callbacks
      </button>
      <button onClick={handleOrderFoodByPromises}>
        Order Food by Promises
      </button>
    </div>
  );
}

export default AsyncHandling;
