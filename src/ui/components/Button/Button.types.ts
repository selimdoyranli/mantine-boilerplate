import { z } from 'zod';

export const ButtonPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      root: z.string().optional(),
      loader: z.string().optional(),
      inner: z.string().optional(),
      section: z.string().optional(),
      label: z.string().optional(),
    })
    .optional(),
  children: z.any().optional(),
  variant: z.enum(['default', 'filled', 'outline']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  fullWidth: z.boolean().optional(),
  onClick: z.function().args(z.custom<React.MouseEvent<HTMLButtonElement>>()).optional(),
});

export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
