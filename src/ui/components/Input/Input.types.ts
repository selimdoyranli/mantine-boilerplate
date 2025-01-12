import { z } from 'zod';

export const InputPropsSchema = z.object({
  id: z.string().optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  error: z.boolean().optional(),
  required: z.boolean().optional(),
  variant: z.enum(['default', 'filled']).optional(),
  placeholder: z.string().optional(),
});

export type InputProps = z.infer<typeof InputPropsSchema>;
