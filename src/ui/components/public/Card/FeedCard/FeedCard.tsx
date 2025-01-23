import { Button } from '@/ui/components/private';
import type { FeedCardProps } from './FeedCard.types';
import { Card } from '@mantine/core';

export default function FeedCard(props: FeedCardProps) {
  const { title, description } = props;
  return (
    <Card>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>Go to detail</Button>
    </Card>
  );
}
