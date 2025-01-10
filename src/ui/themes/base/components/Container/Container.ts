import { DEFAULT_PROPS } from '@/ui/components/Container/Container';
import type { ContainerProps } from '@/ui/components/Container/Container.types';
import type { MantineThemeComponent } from '@mantine/core';

const Container: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
  } as ContainerProps,
};

export default Container;
