import { Nav } from './Nav';
import { PropsWithChildren } from 'react';
export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}
