import { z } from 'zod';

export const UIProviderPropsSchema = z.object({
  children: z.any(),
});

export type UIProviderProps = z.infer<typeof UIProviderPropsSchema>;
