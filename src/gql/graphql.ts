/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  id: Scalars['ID'];
  link?: Maybe<Link>;
  postedBy?: Maybe<User>;
};

export type Link = {
  __typename?: 'Link';
  comments?: Maybe<Array<Maybe<Comment>>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  postedBy?: Maybe<User>;
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteCommentOnLink?: Maybe<Comment>;
  deleteLink: Link;
  deleteUserAccount?: Maybe<User>;
  login?: Maybe<AuthPayload>;
  postCommentOnLink?: Maybe<Comment>;
  postLink?: Maybe<Link>;
  signup?: Maybe<AuthPayload>;
  updateCommentOnLink?: Maybe<Comment>;
  updateLink: Link;
};


export type MutationDeleteCommentOnLinkArgs = {
  commentId: Scalars['Int'];
};


export type MutationDeleteLinkArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserAccountArgs = {
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostCommentOnLinkArgs = {
  body: Scalars['String'];
  linkId: Scalars['Int'];
};


export type MutationPostLinkArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCommentOnLinkArgs = {
  body: Scalars['String'];
  commentId: Scalars['Int'];
};


export type MutationUpdateLinkArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  url?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  getUser: User;
  link?: Maybe<Link>;
  linkComments?: Maybe<Link>;
  linkFeed: Array<Maybe<Link>>;
};


export type QueryCommentArgs = {
  id: Scalars['Int'];
};


export type QueryLinkArgs = {
  id: Scalars['Int'];
};


export type QueryLinkCommentsArgs = {
  linkId: Scalars['Int'];
};


export type QueryLinkFeedArgs = {
  filterNeedle?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comment>>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<Link>>>;
  name: Scalars['String'];
};

export type LinkFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type LinkFeedQuery = { __typename?: 'Query', linkFeed: Array<{ __typename?: 'Link', id: string, description: string, url: string, postedBy?: { __typename?: 'User', id: string, name: string } | null, comments?: Array<{ __typename?: 'Comment', id: string, body: string, postedBy?: { __typename?: 'User', id: string, name: string } | null } | null> | null } | null> };


export const LinkFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LinkFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkFeed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"postedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"postedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LinkFeedQuery, LinkFeedQueryVariables>;