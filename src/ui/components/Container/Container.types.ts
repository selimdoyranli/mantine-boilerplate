import type { MantineSize } from '@mantine/core';

export interface ContainerProps {
  children?: React.ReactNode;
  size?: MantineSize;
  fluid?: boolean;
  padding?: MantineSize;
}
