import { DEFAULT_PROPS } from '@/ui/components/Button/Button';
import type { MantineThemeComponent } from '@mantine/core';

const Button: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
    variant: 'filled',
    fullWidth: false,
  },
};

export default Button;
