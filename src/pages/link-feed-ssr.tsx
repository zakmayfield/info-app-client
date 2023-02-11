import { Link, LinkFeedDocument } from '@/gql/graphql';
import { NextPage, GetServerSidePropsContext } from 'next';

import { addApolloState, initializeApollo } from '@/lib/apollo';
import { LinkFeedContainer } from '@/components';

interface LinkFeedSSRPageProps {
  links: Link[];
}

// Data is already available in the UsersList components, because it's been rehydrated.
// But we still have an access to this data via props, if needed.
const LinkFeedSSR: NextPage<LinkFeedSSRPageProps> = () => {
  return (
    <section>
      <h1>Server-Side Rendering</h1>
      <LinkFeedContainer />
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo(null, context);

  const { data } = await apolloClient.query({ query: LinkFeedDocument });

  return addApolloState(apolloClient, {
    props: {
      links: data.linkFeed,
    },
  });
}

export default LinkFeedSSR;
