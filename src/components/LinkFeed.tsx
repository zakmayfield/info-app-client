import { Link } from '@/gql/graphql';

type LinkFeedArgs = {
  feed: Link[];
};

// props --- data: Link[]
export function LinkFeed({ feed }: LinkFeedArgs) {
  return (
    <section>
      {feed.map((link: Link) => {
        return (
          <div key={link.id}>
            <h2>{link.url}</h2>
            <p>{link.description}</p>
          </div>
        );
      })}
    </section>
  );
}
