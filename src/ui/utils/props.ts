import { ZodSchema } from 'zod';

type ThemeType = {
  components?: Record<string, { defaultProps?: Record<string, any> }>;
};

export function getThemeProps<T>(theme: ThemeType, componentName: string): Partial<T> {
  return (theme.components?.[componentName]?.defaultProps || {}) as Partial<T>;
}

export function validateProps<T extends Record<string, any>>(
  props: T,
  schema: ZodSchema<T>,
  defaultProps: Partial<T>
): T {
  // Validate all props using the provided schema
  const result = schema.safeParse(props);

  // If validation successful, return the parsed props
  if (result.success) {
    return result.data;
  }

  // If validation fails, validate each prop individually
  return Object.keys(props).reduce(
    (acc, key) => {
      const propKey = key as keyof T;
      const propSchema = (schema as any).shape?.[propKey];

      if (!propSchema) {
        return acc;
      }

      // Validate individual prop
      const propResult = propSchema.safeParse(props[propKey]);
      acc[propKey] = propResult.success
        ? props[propKey]
        : (defaultProps[propKey] ?? props[propKey]);

      return acc;
    },
    { ...defaultProps } as T
  );
}
