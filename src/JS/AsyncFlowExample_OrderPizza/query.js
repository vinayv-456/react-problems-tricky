import { DRINKS, PIZZAS } from "./data";

// import {
//   addDelay,
//   getBevarageDetails,
//   getBeveragesByShopId,
//   getNearestShopByLocation,
//   getPizzaDetails,
//   getPizzasListByShopId,
//   selectRandomElementFromArray,
// } from "./utilis";

export const query = ({ apiEndpoint, payload }) => {
  let result;
  if (apiEndpoint === "/api/pizzahub/shop") {
    console.log("Find Nearby Shop by location");
    result = getNearestShopByLocation(payload);
  } else if (apiEndpoint.includes("/api/pizzahub/pizza")) {
    const parts = apiEndpoint.split("/");
    if (parts.length === 4) {
      console.log("List of Pizzas by shopId");
      result = getPizzasListByShopId(payload);
    } else {
      console.log("Details of pizza");
      const id = parts[parts.length - 1];
      result = getPizzaDetails(PIZZAS, id);
      console.log("piza id", id, result);
    }
  } else if (apiEndpoint.includes("/api/pizzahub/drink")) {
    const parts = apiEndpoint.split("/");
    if (parts.length === 4) {
      console.log("Explore List of Beverages");
      result = getBeveragesByShopId(payload);
    } else {
      console.log("Select a bevarage");
      const id = parts[parts.length - 1];
      result = getBevarageDetails(DRINKS, id);
    }
  }

  return result;
};

export const addDelay = (callback, ...params) => {
  setTimeout(() => {
    callback(...params);
  }, [300]);
};

// get the nearest shop based on location
const getNearestShopByLocation = (location) => {
  const { lat, lang } = location;
  if (lat > 25 && lat < 30 && lang < 30 && lang > 25) {
    return {
      shopId: "s1",
    };
  }
  // default result
  return {
    shopId: "s0",
  };
};

// get the list of pizzas based on shopId
const getPizzasListByShopId = ({ shopId }) => {
  if (shopId === 1) {
    return PIZZAS;
  }
  // default result
  return PIZZAS.slice(0, 10);
};

// Select a pizza
const getPizzaDetails = (list, pizzaId) => {
  return list.find(({ id }) => id === parseInt(pizzaId));
};

// Explore List of Beverages
const getBeveragesByShopId = ({ shopId }) => {
  if (shopId === 1) {
    return DRINKS;
  }
  // default result
  return DRINKS.slice(0, 5);
};

// Select a bevarage
const getBevarageDetails = (list, beavarageId) => {
  return list.find(({ id }) => id === parseInt(beavarageId));
};

export const selectRandomElementFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
