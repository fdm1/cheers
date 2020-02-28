import {parseResposne} from '@app/Apis/CocktailDb';
import {DrinkType} from '@app/Types/DrinkTypes';

const fakeResponse = (): any => {
  const fs = require('fs');
  let contents = JSON.parse(
    fs.readFileSync('./test/support/a_drink.json', 'utf-8'),
  );
  return contents;
};

describe('parseResponse', function() {
  it('correctly parses the drink', function() {
    const expectedDrink = fakeResponse().drinks[0];
    const drink: DrinkType = parseResposne(expectedDrink);

    expect(drink.name).toEqual(expectedDrink.strDrink);
    expect(drink.directions).toEqual(expectedDrink.strInstructions);
    expect(drink.ingredients.length).toEqual(5);
  });
});
