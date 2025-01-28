import { FeedCard } from "@ys/ui";

export function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to YS Web</h1>
      <FeedCard
        title="Example Feed"
        description="This is an example feed card from our UI library"
        image="https://picsum.photos/200"
      />
    </div>
  );
}
