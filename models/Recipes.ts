import { z } from 'zod';
import { IngredientSchema } from './Ingredient';
import { InstructionStepSchema } from './InstructionStep';
import { TagSchema } from './Tag';

const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  ingredients: z.array(IngredientSchema),
  steps: z.array(InstructionStepSchema),
  tags: z.nullable(z.array(TagSchema)),
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