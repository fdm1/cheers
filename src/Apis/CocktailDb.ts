import {DrinkType} from '@app/Types/DrinkTypes';

// https://www.thecocktaildb.com/api.php
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
  return drink;
};

export const getRandomDrink = async (): Promise<DrinkType | undefined> => {
  try {
    let response = await fetch(endpoint);
    let responseJson = await response.json();
    let drinkJson = responseJson.drinks[0];
    return parseResposne(drinkJson);
  } catch (error) {
    console.error(error);
  }
};
