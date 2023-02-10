import { Link } from '@/gql/graphql';
import { LinkItem } from '@/components';

type LinkFeedArgs = {
  feed: Link[];
};

// props --- data: Link[]
export function LinkFeed({ feed }: LinkFeedArgs) {
  return (
    <section>
      {feed.map((link: Link) => {
        return <LinkItem key={link.id} link={link} />
      })}
    </section>
  );
}
