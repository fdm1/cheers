import {getRandomDrink} from '@app/src/Apis/CocktailDb';

// const fakeResponse = (): string => {
//   const fs = require('fs');
//   return fs.readFileSync('a_drink.json', 'utf-8');
// };
//
describe('getRandomDrink', function() {
  beforeEach(() => {
    /* fetch.resetMocks(); */
  });

  describe('successful responses', function() {
    /* fetch.mockResponse(fakeResponse); */

    it('returns a DrinkType', function() {});
    it('includes all ingredients', function() {});
  });
  it('returns nothing if error response', function() {});
});
