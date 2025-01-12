import { DEFAULT_PROPS } from '@/ui/components/Input/Input';
import type { InputProps } from '@/ui/components/Input/Input.types';
import type { MantineThemeComponent } from '@mantine/core';

const Input: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
  } as InputProps,
};

export default Input;
