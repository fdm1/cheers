const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const getRandomDrink = () => {
  return fetch(endpoint)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.drinks[0];
    })
    .catch(error => {
      console.error(error);
    });
};
