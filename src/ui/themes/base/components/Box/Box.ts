import { DEFAULT_PROPS } from '@/ui/components/Box/Box';
import type { BoxProps } from '@/ui/components/Box/Box.types';
import type { MantineThemeComponent } from '@mantine/core';

const Box: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
  } as BoxProps,
};

export default Box;
