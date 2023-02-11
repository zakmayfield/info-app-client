import { AuthProvider } from '@/Auth';
import ClientProvider from '@/Client';
import type { AppProps } from 'next/app';
import { Nav } from '@/components';
import { Inter } from '@next/font/google';
import '@/styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
      <ClientProvider>

        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Nav />
        <Component {...pageProps} />

      </ClientProvider>
      </AuthProvider>
    </>
  );
}
