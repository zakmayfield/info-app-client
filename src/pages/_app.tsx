import { AuthProvider } from '@/Auth';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import type { AppProps } from 'next/app';
import { Nav } from '@/components';
import { Inter } from '@next/font/google';
import '@/styles/globals.css';
import '@picocss/pico';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>

          <Nav />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}
