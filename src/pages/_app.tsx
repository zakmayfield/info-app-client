import { AuthProvider } from '@/Auth';
import type { AppProps } from 'next/app';
import { Layout, Nav } from '@/components';

// font optimization
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {/* injecting into <head> ::: optimized Inter font w/o classname */}
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
        <Nav />
        <Component {...pageProps} />
    </AuthProvider>
  );
}
