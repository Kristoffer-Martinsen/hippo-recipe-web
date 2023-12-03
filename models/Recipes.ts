import { z } from 'zod';

const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  unit: z.string(),
});

export type Ingredient = z.infer<typeof IngredientSchema>;

const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export const RecipeResultSchema = z.object({
  data: z.array(RecipeSchema)
});

export type Recipe = z.infer<typeof RecipeSchema>;
export type RecipeResult = z.infer<typeof RecipeResultSchema>;