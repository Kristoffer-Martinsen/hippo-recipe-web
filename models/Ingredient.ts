import { z } from 'zod';

export const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  unit: z.string(),
  amount: z.number()
});

export const IngredientResultSchema = z.object({
  data: z.array(IngredientSchema)
});
export type Ingredient = z.infer<typeof IngredientSchema>;
export type IngredientResult = z.infer<typeof IngredientResultSchema>;