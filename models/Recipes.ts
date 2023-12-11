import { z } from 'zod';

const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  unit: z.string(),
});

const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  ingredients: z.array(IngredientSchema),
  imageURL: z.string(),
});

export const RecipeListResultSchema = z.object({
  data: z.array(RecipeSchema)
});

export const RecipeResultSchema = z.object({
  data: RecipeSchema
});

export type Recipe = z.infer<typeof RecipeSchema>;
export type RecipeResult = z.infer<typeof RecipeResultSchema>;
export type RecipeListResult = z.infer<typeof RecipeListResultSchema>;