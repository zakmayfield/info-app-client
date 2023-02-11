import { Link } from '@/gql/graphql';

type LinkItemArgs = {
  link: Link;
};

// props --- link: Link
export function LinkItem({ link }: LinkItemArgs) {
  return (
    <div>
      <h2>{link.url}</h2>
      <p>{link.description}</p>
    </div>
  );
}
