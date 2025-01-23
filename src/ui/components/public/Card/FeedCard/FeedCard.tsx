import classes from './FeedCard.module.css';
import type { FeedCardProps } from './FeedCard.types';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';

export default function FeedCard(props: FeedCardProps) {
  const { title, description, image = 'https://loremflickr.com/600/250' } = props;

  return (
    <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image className={classes.image} src={image} height={160} alt={title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text className={classes.title} fw={500}>
          {title}
        </Text>
        <Badge color="pink">Trending</Badge>
      </Group>

      <Text className={classes.description} size="sm" c="dimmed">
        {description}
      </Text>

      <Button fullWidth mt="md">
        Read more
      </Button>
    </Card>
  );
}
