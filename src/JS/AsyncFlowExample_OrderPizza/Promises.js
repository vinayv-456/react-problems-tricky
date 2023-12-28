import { query, selectRandomElementFromArray } from "./query";

const queryByPromise = (details) => {
  return new Promise((res, rej) => {
    try {
      const result = query(details);
      res(result);
    } catch (e) {
      rej(e);
    }
  });
};

export const orderFoodByPromises = async () => {
  //   1. Find Nearby Shop by location
  const { shopId } = await queryByPromise({
    apiEndpoint: "/api/pizzahub/shop",
    payload: {
      lang: 30,
      lat: 30,
    },
  });
  //   2. List of Pizzas by shopId
  const pizzas = await queryByPromise({
    apiEndpoint: "/api/pizzahub/pizza",
    payload: { shopId },
  });

  const selectedPizzaId = await selectRandomElementFromArray(pizzas).id;
  //   3. Select a pizza
  const selectedPizza = await queryByPromise({
    apiEndpoint: `/api/pizzahub/pizza/${selectedPizzaId}`,
  });
  //   4. Explore List of Beverages
  const drinks = await queryByPromise({
    apiEndpoint: `/api/pizzahub/drink`,
    payload: { shopId },
  });
  const selectedDrinkId = await selectRandomElementFromArray(drinks).id;
  //   5. Select a bevarage
  const selectedDrink = await queryByPromise({
    apiEndpoint: `/api/pizzahub/drink/${selectedDrinkId}`,
  });
  //   6. Place the Order
  console.log(`odering ${selectedPizza.name} and ${selectedDrink.name}`);
};
