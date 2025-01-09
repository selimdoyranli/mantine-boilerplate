import { DEFAULT_THEME, MantineShadowsValues } from '@mantine/core';

const shadows: MantineShadowsValues = {
  ...DEFAULT_THEME.shadows,
  default: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sharp: '1px 2px var(--mantine-color-blue-5)',
};

export default shadows;
