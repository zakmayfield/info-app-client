import { useState, useContext, createContext, PropsWithChildren } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  concat,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { LOGIN } from '@/schema';
import { LoginArgs, AuthContext, AuthHeaders } from '@/types';

const authContext = createContext<AuthContext>(null!);

function useProvideAuth() {
  const [authToken, setAuthToken] = useState('');

  function getAuthHeaders(): AuthHeaders {
    let token: string = authToken;

    return {
      authorization: token ? `Bearer ${token}` : '',
    };
  }

  function createApolloClient(): ApolloClient<NormalizedCacheObject> {
    const httpLink = new HttpLink({
      uri: `http://localhost:4000/graphql`,
      credentials: 'same-origin',
      headers: getAuthHeaders(),
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path }) =>
          console.log(`[GraphQL error] ::: ${message} ::: ${path}`)
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
      link: concat(errorLink, httpLink),
      cache: new InMemoryCache(),
      name: 'collars-client-v3',
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });
  }

  async function login({ email, password }: LoginArgs) {
    const client = createApolloClient();

    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: { email, password },
    });

    console.log(`::: login :::`, data.login);

    if (data?.login?.token) {
      let token: string = data.login.token;

      setAuthToken(token);

      localStorage.setItem('token', token)
    }
  }

  return {
    createApolloClient,
    login,
  };
}

export function AuthProvider({ children }: PropsWithChildren) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
