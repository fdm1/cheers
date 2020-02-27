export type DrinkType = {
  title: string;
  ingredients: IngredientType[];
  directions?: string;
  image_url?: string;
};

export type IngredientType = {
  name: string;
  amount: string;
}
