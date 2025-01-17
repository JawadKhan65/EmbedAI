import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '../../context/userdetails';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Embed AI',
  description: 'Embed AI offers end-to-end AI services, including customer support, business process automation, data-driven insights, predictive analytics, custom AI models, and intelligent decision-making solutions.',
  openGraph: {
    title: 'Embed AI',
    description: 'Embed AI delivers a full suite of AI services: business automation, intelligent insights, customer support, predictive analytics, and custom AI solutions tailored to your needs.',
    url: 'https://embedai.io',
    site_name: 'Embed AI',
    images: [
      {
        url: 'https://embedai.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Embed AI - Comprehensive AI Solutions for Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@embedai',
    title: 'Embed AI - Your Partner in AI-Driven Transformation',
    description: 'From automation to predictive analytics, Embed AI offers a complete range of AI services to help businesses thrive in the digital era.',
    image: 'https://embedai.io/twitter-image.png',
  },
};

export default function RootLayout({ session, children }) {
  // mongo_connection().catch(console.error);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content="Embed AI provides comprehensive AI services: customer support, business automation, predictive analytics, and data-driven insights to optimize workflows and empower decision-making." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Embed AI - Complete AI Solutions for Modern Businesses" />
        <meta property="og:description" content="Embed AI delivers a full suite of AI services: business automation, intelligent insights, customer support, predictive analytics, and custom AI solutions tailored to your needs." />
        <meta property="og:url" content="https://embedai.io" />
        <meta property="og:site_name" content="Embed AI" />
        <meta property="og:image" content="https://embedai.io/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embedai" />
        <meta name="twitter:title" content="Embed AI - Your Partner in AI-Driven Transformation" />
        <meta name="twitter:description" content="From automation to predictive analytics, Embed AI offers a complete range of AI services to help businesses thrive in the digital era." />
        <meta name="twitter:image" content="https://embedai.io/twitter-image.png" />

        <link rel="stylesheet" href="https://unpkg.com/animate.css@4.1.1/animate.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                @keyframes fade-in-left {
                  0% { opacity: 0; transform: translateX(-20px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
              </style>
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <UserProvider>
            <Navbar />
            {children}
          </UserProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
