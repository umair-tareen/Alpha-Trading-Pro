import Head from 'next/head';
import AlphaTradingLanding from '../components/AlphaTradingLanding';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Trading Pro | Trading Mentorship, Education & Algo Tools</title>
        <meta
          name="description"
          content="Alpha Trading Pro offers structured trading mentorship for options and futures, community coaching, and AI-assisted market scanning tools to help traders build skill and discipline."
        />
        <meta
          name="keywords"
          content="trading mentorship, learn stock trading, day trading course, small cap trading strategy, stock scanner strategies, momentum trading strategies, how to trade stocks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alpha Trading Pro" />
        <link rel="canonical" href="https://alphatradingpros.com" />
        <link rel="icon" href="/Alpha Trading.png" />
        <link rel="apple-touch-icon" href="/Alpha Trading.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphatradingpros.com/" />
        <meta property="og:title" content="Alpha Trading Pro | Mentorship and Structured Trading Education" />
        <meta
          property="og:description"
          content="Learn to trade with structure, discipline, and confidence through mentorship, strategy playbooks, and AI-assisted tools."
        />
        <meta property="og:image" content="https://alphatradingpros.com/Alpha Trading.png" />
        <meta property="og:site_name" content="Alpha Trading Pro" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Alpha Trading Pro | Trading Mentorship" />
        <meta
          property="twitter:description"
          content="Structured mentorship for options and futures traders focused on discipline, market structure, and repeatable execution."
        />
        <meta property="twitter:image" content="https://alphatradingpros.com/Alpha Trading.png" />

        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Alpha Trading Pro',
              url: 'https://alphatradingpros.com',
              logo: 'https://alphatradingpros.com/Alpha Trading.png',
              description:
                'A structured options and futures trading mentorship program focused on market structure, discipline, strategy playbooks, and AI-assisted market scanning tools.',
              offers: {
                '@type': 'OfferCatalog',
                name: 'Alpha Trading Programs',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    name: 'Trading Mentorship Program',
                    description: 'Structured education, live mentorship sessions, and community coaching.',
                  },
                  {
                    '@type': 'Offer',
                    name: 'AI-Assisted Market Scanning Tools',
                    description: 'Algorithmic scanners and alerts designed to support trader decision-making.',
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <AlphaTradingLanding />
    </>
  );
}
