import {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { LOGIN, SIGN_UP } from '@/schema';
import { LoginArgs, AuthContext, SignUpArgs } from '@/types';
import { setContext } from '@apollo/client/link/context';
import useGetLocalStorage from './hooks/useGetLocalStorage';

const authContext = createContext<AuthContext>(null!);

function useProvideAuth() {
  const [authToken, setAuthToken] = useState('');

  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = window.localStorage.getItem('token');

    console.log('::: token/authMiddleware :::', token)

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));

    return forward(operation);
  });

  function createApolloClient(): ApolloClient<NormalizedCacheObject> {
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      credentials: 'same-origin',
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path }) =>
          console.log(`[GraphQL error] ::: ${message} ::: ${path}`)
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
      // link: authMiddleware.concat(errorLink).concat(httpLink),
      link: from([errorLink, authMiddleware, httpLink]),
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

    if (data?.login?.token) {
      let token: string = data.login.token;
      
      setAuthToken(token);
      window.localStorage.setItem('token', token)
      
      const { login } = data
      
      console.log(`::: direct client mutation/login :::`, login);
      
      return login
    }
  }

  async function signUp({ name, email, password }: SignUpArgs) {
    const client = createApolloClient();

    const { data } = await client.mutate({
      mutation: SIGN_UP,
      variables: { name, email, password },
    });

    console.log(`::: signUp :::`, data.signUp);

    if (data?.signUp?.token) {
      let token: string = data.signUp.token;

      setAuthToken(token);

      const { signUp } = data;

      return signUp;
    }
  }

  return {
    createApolloClient,
    login
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
