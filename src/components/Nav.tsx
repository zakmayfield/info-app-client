import Link from 'next/link';

export function Nav() {
  return (
    <ul>
      <li>
        <Link href='/'>Feed</Link>
      </li>
      <li>
        <Link href='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link href='/login'>Login</Link>
      </li>
    </ul>
  );
}
