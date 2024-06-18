import { z } from 'zod';

export const TagSchema = z.object({
  id: z.number(),
  tagName: z.string(),
});
export const TagResultSchema = z.object({
  data: z.array(TagSchema)
});
export type TagResult = z.infer<typeof TagResultSchema>;