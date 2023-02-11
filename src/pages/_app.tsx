import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { Nav } from '@/components';

import { useApollo } from '../lib/apollo';

import { Inter } from '@next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
