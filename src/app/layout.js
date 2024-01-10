import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import { Footer, Navbar } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuyMyGear.',
  description: 'Selling my video gear. Buy it.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head className="layout">
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={inter.url} />
      </Head>

      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
