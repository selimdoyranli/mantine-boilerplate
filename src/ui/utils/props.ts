type KeyAndValuesSchema<T> = {
  [K in keyof T]?: T[K][];
};

export type AllowedPropsSchema<T> = KeyAndValuesSchema<T>;

export function getAllowedProps<T extends Record<string, any>>(
  props: T,
  defaultProps: Partial<T> = {},
  validators?: AllowedPropsSchema<T>
): Partial<T> {
  const validatedProps: Partial<T> = {};

  for (const key in validators) {
    if (props[key] !== undefined && Array.isArray(validators[key])) {
      validatedProps[key] = validators[key]!.includes(props[key]) ? props[key] : defaultProps[key];
    } else {
      validatedProps[key] = defaultProps[key];
    }
  }

  return validatedProps;
}
