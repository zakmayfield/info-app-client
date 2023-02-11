import { Link } from '@/gql/graphql';
import { LinkItem } from './LinkItem';

interface LinkFeedProps {
  links?: Link[];
}

export function Links({ links }: LinkFeedProps) {
  return (
    <div>
      {links?.map((link: Link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </div>
  );
}
