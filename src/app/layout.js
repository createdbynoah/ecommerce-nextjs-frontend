import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
// import Head from 'next/head';
import { Footer, Navbar } from '../components';

const inter = Inter({
  subsets: ['latin'],
  // weight: ['200', '400', '500', '600', '700', '800'],
  // variable: '--font-poppins',
});

import { StateContext } from '@/context/StateContext';

export const metadata = {
  title: 'BuyMyGear.',
  description: 'Selling my video gear. Buy it.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head className="layout"> */}
      <meta charSet="utf-8" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/favicon.ico" />
      {/* </Head> */}

      <body className={inter.className}>
        <StateContext>
          <nav>
            <Navbar />
          </nav>
          <Toaster />
          <main className="main-container">{children}</main>
          <footer>
            <Footer />
          </footer>
        </StateContext>
      </body>
    </html>
  );
}
