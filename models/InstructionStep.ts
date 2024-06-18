import { z } from 'zod';

export const InstructionStepSchema = z.object({
  id: z.number(),
  instruction: z.string(),
});
export const InstructionStepResultSchema = z.object({
  data: z.array(InstructionStepSchema)
});

export type InstructionStep = z.infer<typeof InstructionStepSchema>;
export type InstructionStepResult = z.infer<typeof InstructionStepResultSchema>;