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
        <Link href='/login' onClick={() => window.localStorage.clear()}>
          Login
        </Link>
      </li>
      <li>
        <Link href='/sign-up' onClick={() => window.localStorage.clear()}>
          Sign Up
        </Link>
      </li>
      <li>
        <Link href='/' onClick={() => window.localStorage.clear()}>
          Log Out
        </Link>
      </li>
    </ul>
  );
}
