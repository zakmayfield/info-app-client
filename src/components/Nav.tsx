import Link from 'next/link';
import { Box, Button } from '@chakra-ui/react';
import { MdNightlightRound, MdWbSunny } from 'react-icons/md';
import { useColorMode } from '@chakra-ui/react';

export function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='nav' p='1'>
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
        <li>
          <Link href='/sign-up'>Sign Up</Link>
        </li>

        <li>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MdNightlightRound /> : <MdWbSunny />}
          </Button>
        </li>
      </ul>
    </Box>
  );
}
