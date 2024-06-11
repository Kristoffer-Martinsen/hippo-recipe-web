import { z } from 'zod';
import { TagSchema } from '@/models/Tag';

const IngredientSchema = z.object({
  id: z.number(),
  name: z.string(),
  unit: z.string(),
  amount: z.number()
});

const InstructionStepSchema = z.object({
  id: z.number(),
  instruction: z.string(),
})

const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  ingredients: z.array(IngredientSchema),
  steps: z.array(InstructionStepSchema),
  tags: z.array(TagSchema)
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