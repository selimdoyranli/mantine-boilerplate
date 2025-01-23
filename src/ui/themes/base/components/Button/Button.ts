import type { MantineThemeComponent } from '@mantine/core';

const Button: MantineThemeComponent = {
  defaultProps: {
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export default Button;
