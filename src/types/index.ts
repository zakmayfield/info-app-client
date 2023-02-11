import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Link, User } from '@/gql/graphql';


export interface LoginArgs {
  email: string;
  password: string;
}

export interface SignUpArgs {
  name: string;
  email: string;
  password: string;
}

export type AuthContext = {
  login: ({ email, password }: LoginArgs) => Promise<AuthContextReturn>;
  signUp: ({ name, email, password }: SignUpArgs) => Promise<AuthContextReturn>;
  createApolloClient: () => ApolloClient<NormalizedCacheObject>;
};

export type AuthContextReturn = {
  token: string;
  user: User;
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