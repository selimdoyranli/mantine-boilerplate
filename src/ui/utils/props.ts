type ValidatorType<T> = T extends number
  ? 'number'
  : T extends boolean
    ? 'boolean'
    : T extends string
      ? T extends string & {}
        ? never
        : 'string'
      : T extends (...args: any[]) => any
        ? 'function'
        : never;

export type AllowedPropsSchema<T> = {
  [K in keyof T]?: T[K][] | ValidatorType<T[K]>;
};

type ThemeType = {
  components?: Record<string, { defaultProps?: Record<string, any> }>;
};

export function getThemeProps<T>(theme: ThemeType, componentName: string): Partial<T> {
  return (theme.components?.[componentName]?.defaultProps || {}) as Partial<T>;
}

export function getAllowedProps<T extends Record<string, any>>(
  props: T,
  defaultProps: Partial<T> = {},
  validators?: AllowedPropsSchema<T>
): Partial<T> {
  const validatedProps: Partial<T> = {};

  for (const key in validators) {
    if (props[key] !== undefined) {
      const validator = validators[key];
      if (validator === 'number' && typeof props[key] === 'number') {
        validatedProps[key] = props[key];
      } else if (validator === 'boolean' && typeof props[key] === 'boolean') {
        validatedProps[key] = props[key];
      } else if (validator === 'function' && typeof props[key] === 'function') {
        validatedProps[key] = props[key];
      } else if (Array.isArray(validator) && validator.includes(props[key])) {
        validatedProps[key] = props[key];
      } else {
        validatedProps[key] = defaultProps[key];
      }
    } else {
      validatedProps[key] = defaultProps[key];
    }
  }

  return validatedProps;
}
