import { z } from 'zod';

export const SelectPropsSchema = z.object({
  data: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  label: z.string().optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  searchable: z.boolean().optional(),
  clearable: z.boolean().optional(),
  disabled: z.boolean().optional(),
  readOnly: z.boolean().optional(),
  allowDeselect: z.boolean().optional(),
  placeholder: z.string().optional(),
  className: z.string().optional(),
  onChange: z.function().args(z.string().nullable()).optional(),
  error: z.union([z.string(), z.boolean()]).optional(),
});

export type SelectProps = z.infer<typeof SelectPropsSchema>;
