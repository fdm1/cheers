import {DrinkType, IngredientType} from '@app/Types/DrinkTypes';

// https://www.thecocktaildb.com/api.php
const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const parseIngredients = (jsonResponse: Object): IngredientType[] => {
  let entries = Object.entries(jsonResponse);
  let ingredients = entries.filter(v => v[0].includes('Ingredient') && v[1]);
  const resp: IngredientType[] = ingredients.map(i => {
    const amountEntry = entries.find(
      e => e[0] === i[0].replace('Ingredient', 'Measure'),
    );
    return {
      key: i[0],
      name: i[1],
      amount: amountEntry ? amountEntry[1] : undefined,
    };
  });
  return resp;
};

export const parseResposne = (jsonResponse: any): DrinkType => {
  const drink: DrinkType = {
    name: jsonResponse.strDrink,
    ingredients: parseIngredients(jsonResponse),
    glass: jsonResponse.strGlass,
    directions: jsonResponse.strInstructions,
    image_url: jsonResponse.strDrinkThumb,
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
