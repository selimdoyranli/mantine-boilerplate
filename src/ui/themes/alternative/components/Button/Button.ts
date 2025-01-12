import { DEFAULT_PROPS } from '@/ui/components/Button/Button';
import type { ButtonProps } from '@/ui/components/Button/Button.types';
import type { MantineThemeComponent } from '@mantine/core';

const Button: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
    variant: 'outline',
    fullWidth: false,
  } as ButtonProps,
};

export default Button;
