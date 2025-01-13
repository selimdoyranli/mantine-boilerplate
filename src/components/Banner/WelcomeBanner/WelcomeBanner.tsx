import Anchor from '@/ui/components/Anchor/Anchor';
import Container from '@/ui/components/Container/Container';
import Text from '@/ui/components/Text/Text';
import Title from '@/ui/components/Title/Title';
import classes from './WelcomeBanner.module.css';
import type { WelcomeBannerProps } from './WelcomeBanner.types';

export default function WelcomeBanner({ title = 'Welcome to', description }: WelcomeBannerProps) {
  return (
    <>
      <Container>
        <Title classNames={{ root: classes.title }}>
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
