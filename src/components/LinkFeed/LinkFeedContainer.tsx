import { LinkFeedDocument } from '@/gql/graphql';
import { Links } from './Links';
import { useQuery } from '@apollo/client';

// props --- data: Link[]
export function LinkFeedContainer() {
  const { data, loading, error } = useQuery(LinkFeedDocument)

  if (loading) return <div>Feed loading...</div>
  if (error) return <div>Error {error.message}</div>

  const links = data?.linkFeed

  console.log('LinkFeedContainer ::: linkFeed', links)

  return (
    <section>
      {/* <Links links={links}/> */}
    </section>
  );
}
