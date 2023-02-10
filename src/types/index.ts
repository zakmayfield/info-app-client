import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Link, User } from '@/gql/graphql';

export interface LoginArgs {
  email: string;
  password: string;
}

export type AuthContext = {
  login: ({ email, password }: LoginArgs) => Promise<void>;
  createApolloClient: () => ApolloClient<NormalizedCacheObject>;
};

export type AuthHeaders = {
  authorization: string;
};

export type LinkFeedProps = {
  linkFeed: Link[];
};

export type DashboardProps = {
  user: User
};