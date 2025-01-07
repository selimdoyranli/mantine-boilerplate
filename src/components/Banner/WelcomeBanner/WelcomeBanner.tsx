import { Anchor, Text, Title } from '@mantine/core';
import type { WelcomeBannerProps } from './WelcomeBanner.types';

import classes from './WelcomeBanner.module.css';

/**
 * Welcome component displays a title and description with Mantine styling
 */
export default function WelcomeBanner({ title = 'Welcome to', description }: WelcomeBannerProps) {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {title}{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: '#339af0', to: '#58c4dc' }}>
          mantine-boilerplate
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {description || 'This starter Vite project includes a minimal setup, if you want to learn more on Mantine + Vite integration follow '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}
