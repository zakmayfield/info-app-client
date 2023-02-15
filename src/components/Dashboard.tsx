import { Link } from '@/gql/graphql';
import { GET_USER } from '@/schema';
import { useQuery } from '@apollo/client';
import { LinkFeed } from './LinkFeed';

export function Dashboard() {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <div>loading...</div>;
  if (error) return <div style={{ color: 'red' }}>Error {error.message}</div>;

  const user = data?.getUser;

  console.log('data ::: dashboard ::: getUser', data);

  return (
    <>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>

      <p>{user.name}s Links:</p>
      {user.links && <LinkFeed feed={user.links} />}
    </>
  );
}
