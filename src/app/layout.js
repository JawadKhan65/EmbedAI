import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { mongo_connection } from '../../lib/db';
import { UserProvider } from '../../context/userdetails';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Embed AI - AI-powered Customer Support and Business Automation',
  description: 'Embed AI provides AI-powered customer support, automation, and intelligent insights to optimize workflows and improve decision-making with advanced NLP, machine learning, and predictive analytics.',
  openGraph: {
    title: 'Embed AI - AI-powered Business Process Automation and Customer Support',
    description: 'Embed AI offers AI-powered customer support, automation, data insights, predictive analytics, and decision-making through custom AI models, NLP, and advanced machine learning.',
    url: 'https://embedai.io',
    site_name: 'Embed AI',
    images: [
      {
        url: 'https://embedai.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Embed AI - AI-powered Business and Customer Support Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@embedai',
    title: 'Embed AI - AI-powered Automation and Data Insights',
    description: 'Embed AI delivers AI-powered customer support, automation, predictive analytics, and intelligent decision-making through NLP, machine learning, and custom AI models.',
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
        <meta name="description" content="Embed AI provides AI-powered customer support, automation, and intelligent insights with advanced machine learning, NLP, and predictive analytics to drive business decisions and optimize workflows." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Embed AI - AI-powered Business Process Automation and Customer Support" />
        <meta property="og:description" content="Embed AI offers AI-powered customer support, automation, data insights, predictive analytics, and decision-making through custom AI models, NLP, and advanced machine learning." />
        <meta property="og:url" content="https://embedai.io" />
        <meta property="og:site_name" content="Embed AI" />
        <meta property="og:image" content="https://embedai.io/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embedai" />
        <meta name="twitter:title" content="Embed AI - AI-powered Automation and Data Insights" />
        <meta name="twitter:description" content="Embed AI delivers AI-powered customer support, automation, predictive analytics, and intelligent decision-making through NLP, machine learning, and custom AI models." />
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
