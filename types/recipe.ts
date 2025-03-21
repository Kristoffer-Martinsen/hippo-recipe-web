export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
};

export type RecipePayload = {
  recipe: string;
  description: string;
  ingredients: string;
  instructions: string;
};
