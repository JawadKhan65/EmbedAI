import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '../../context/userdetails';
import Link from 'next/link';
import Footer from '../../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Embed AI',
  description: 'Embed AI offers end-to-end AI services, including customer support, business process automation, data-driven insights, predictive analytics, custom AI models, and intelligent decision-making solutions.',
  openGraph: {
    title: 'Embed AI - AI Solutions for Businesses',
    description: 'Embed AI provides automation, predictive analytics, and tailored AI services to meet your business needs.',
    url: 'https://embedai.io',
    site_name: 'Embed AI',
    images: [
      {
        url: 'https://embedai.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Embed AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@embedai',
    title: 'Embed AI - Transform Your Business with AI',
    description: 'Embed AI delivers cutting-edge AI solutions for automation, insights, and decision-making.',
    image: 'https://embedai.io/twitter-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon and Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Embed AI',
              url: 'https://embedai.io',
              logo: 'https://embedai.io/og-image.png',
              sameAs: [
                'https://twitter.com/embedai',
                'https://www.linkedin.com/company/embedai',
              ],
              description:
                'Embed AI provides comprehensive AI services: customer support, business automation, predictive analytics, and data-driven insights.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 AI Street',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94105',
                addressCountry: 'US',
              },
            }),
          }}
        />

        {/* External Stylesheets
        <Link rel="stylesheet" href="https://unpkg.com/animate.css@4.1.1/animate.css" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        /> */}
      </head>
      <body className={inter.className}>
        <ChakraProvider>

          <UserProvider>
            <Navbar />

            {children}

            <Footer />
          </UserProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
