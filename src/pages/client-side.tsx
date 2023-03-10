import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { gql } from '@apollo/client';
import { Link } from '@/gql/graphql';
import { LinkFeed } from '@/components';
import { ClientOnly } from '@/components';
import { client } from '@/Client';
const inter = Inter({ subsets: ['latin'] });

type LinkFeedArgs = {
  linkFeed: Link[];
};

export default function ClientSide({ linkFeed }: LinkFeedArgs) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <ClientOnly>
            <LinkFeed feed={linkFeed} />
          </ClientOnly>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query LinkFeed {
        linkFeed {
          id
          description
          url
          postedBy {
            id
            name
          }
          comments {
            id
            body
            postedBy {
              id
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      linkFeed: data.linkFeed,
    },
  };
}