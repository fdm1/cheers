export type DrinkType = {
  name: string;
  ingredients: IngredientType[];
  directions?: string;
  image_url?: string;
};

export type IngredientType = {
  name: string;
  amount: string;
};
