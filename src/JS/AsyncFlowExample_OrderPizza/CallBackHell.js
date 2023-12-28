import { addDelay, query, selectRandomElementFromArray } from "./query";

const queryByCallback = (details, callback) => {
  const result = query(details);
  // callback implementation
  addDelay(callback, result);
};

export const orderFoodByCallbacks = () => {
  //   1. Find Nearby Shop by location
  queryByCallback(
    {
      apiEndpoint: "/api/pizzahub/shop",
      payload: {
        lang: 30,
        lat: 30,
      },
    },
    (result) => {
      console.log("res 1", result);
      const { shopId } = result;
      //   2. List of Pizzas by shopId
      queryByCallback(
        {
          apiEndpoint: "/api/pizzahub/pizza",
          payload: { shopId },
        },
        (result) => {
          const pizzas = result;
          const selectedPizzaId = selectRandomElementFromArray(pizzas)?.id;
          console.log("pp", pizzas, selectedPizzaId);
          //   3. Select a pizza
          queryByCallback(
            {
              apiEndpoint: `/api/pizzahub/pizza/${selectedPizzaId}`,
            },
            (result) => {
              const selectedPizza = result;
              //   4. Explore List of Beverages
              queryByCallback(
                {
                  apiEndpoint: `/api/pizzahub/drink`,
                  payload: { shopId },
                },
                (result) => {
                  const drinks = result;
                  const selectedDrinkId =
                    selectRandomElementFromArray(drinks)?.id;
                  //   5. Select a bevarage
                  queryByCallback(
                    {
                      apiEndpoint: `/api/pizzahub/drink/${selectedDrinkId}`,
                    },
                    (result) => {
                      const selectedDrink = result;
                      console.log(
                        "Placed order...",
                        selectedDrink,
                        selectedPizza
                      );
                      //   6. Place the Order
                      console.log(
                        `odering ${selectedPizza.name} and ${selectedDrink.name}`
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
};
