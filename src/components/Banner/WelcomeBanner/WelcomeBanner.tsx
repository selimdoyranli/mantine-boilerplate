import classes from './WelcomeBanner.module.css';
import type { WelcomeBannerProps } from './WelcomeBanner.types';
import { Anchor, Container, Text, Title } from '@mantine/core';

export default function WelcomeBanner({ title = 'Welcome to', description }: WelcomeBannerProps) {
  return (
    <>
      <Container>
        <Title className={classes.title}>
          {title}{' '}
          <Text inherit variant="gradient" gradient={{ from: '#339af0', to: '#58c4dc' }}>
            mantine-boilerplate
          </Text>
        </Title>

        <Text className={classes.description} ta="center">
          {description ||
            'This starter Vite project includes a minimal setup, if you want to learn more on Mantine + Vite integration follow '}
          <Anchor href="https://mantine.dev/guides/vite/" size="lg">
            this guide
          </Anchor>
          . To get started edit pages/Home.page.tsx file.
        </Text>
      </Container>
    </>
  );
}
