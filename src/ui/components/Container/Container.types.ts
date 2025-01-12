import { z } from 'zod';

export const ContainerPropsSchema = z.object({
  children: z.any().optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  fluid: z.boolean().optional(),
  padding: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
});

export type ContainerProps = z.infer<typeof ContainerPropsSchema>;
