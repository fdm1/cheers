export type DrinkType = {
  name: string;
  ingredients: IngredientType[];
  glass?: string;
  directions?: string;
  image_url: string;
};

export type IngredientType = {
  key: string;
  name: string;
  amount?: string;
};
