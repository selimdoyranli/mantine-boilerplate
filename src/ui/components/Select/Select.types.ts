import { z } from 'zod';

export const SelectPropsSchema = z.object({
  className: z.string().optional(),
  classNames: z
    .object({
      wrapper: z.string().optional(),
      input: z.string().optional(),
      section: z.string().optional(),
      root: z.string().optional(),
      label: z.string().optional(),
      required: z.string().optional(),
      description: z.string().optional(),
      error: z.string().optional(),
      dropdown: z.string().optional(),
      options: z.string().optional(),
      option: z.string().optional(),
      empty: z.string().optional(),
      group: z.string().optional(),
      groupLabel: z.string().optional(),
    })
    .optional(),
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
  onChange: z.function().args(z.string().nullable()).optional(),
  error: z.union([z.string(), z.boolean()]).optional(),
});

export type SelectProps = z.infer<typeof SelectPropsSchema>;
