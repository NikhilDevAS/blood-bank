import ContextProvider from '@/components/Context';
import '@/styles/globals.css';

import { Fira_Sans } from 'next/font/google';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={fira_sans.className}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </main>
  );
}
