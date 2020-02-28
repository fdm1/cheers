import {DrinkType} from '../Types/DrinkTypes';
const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// TODO: Get all ingredients, not just first two
const parseResposne = (jsonResponse: any): DrinkType => {
  const drink: DrinkType = {
    name: jsonResponse.strDrink,
    ingredients: [
      {name: jsonResponse.strIngredient1, amount: jsonResponse.strMeasure1},
      {name: jsonResponse.strIngredient2, amount: jsonResponse.strMeasure2},
    ],
    directions: jsonResponse.strInstructions,
  };
  console.log(drink);
  return drink;
};

export const getRandomDrink = async (): Promise<DrinkType | undefined> => {
  let drink;
  console.log('Getting a drink');
  fetch(endpoint)
    .then(response => response.json())
    .then(responseJson => {
      const drinkJson = responseJson.drinks[0];
      console.log(drinkJson);
      drink = parseResposne(drinkJson);
    })
    .catch(error => {
      console.error(error);
    });

  return drink;
};
