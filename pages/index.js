import Head from 'next/head'
import AlphaTradingLanding from '../components/AlphaTradingLanding'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Trading Pros - 1-on-1 Trading Mentorship | Stocks, Options & Futures</title>
        <meta name="description" content="Education-first, 1-on-1 trading mentorship that teaches decision-making, risk management, and a repeatable process. Stocks, options, and futures mentorship packages plus the Sigma Terminal." />

        {/* SEO Keywords */}
        <meta name="keywords" content="trading mentorship, 1-on-1 trading coach, options mentorship, futures mentorship, stock trading mentorship, wheel strategy, risk management, trading psychology, trade management, SPY trading, small cap trading, trading education" />
        
        {/* Viewport and basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alpha Trading Pros" />
        <link rel="canonical" href="https://alphatradingpros.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/Alpha Trading.png" />
        <link rel="apple-touch-icon" href="/Alpha Trading.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphatradingpros.com/" />
        <meta property="og:title" content="Alpha Trading Pros - 1-on-1 Trading Mentorship" />
        <meta property="og:description" content="Education-first mentorship in stocks, options, and futures. Learn decision-making, risk management, and a repeatable process, not someone else's alerts." />
        <meta property="og:image" content="https://alphatradingpros.com/Alpha Trading.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Alpha Trading Pros" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AlphaTradingHQ" />
        <meta property="twitter:creator" content="@AlphaTradingHQ" />
        <meta property="twitter:url" content="https://alphatradingpros.com/" />
        <meta property="twitter:title" content="Alpha Trading Pros - 1-on-1 Trading Mentorship" />
        <meta property="twitter:description" content="Education-first mentorship in stocks, options, and futures. Learn a repeatable process, not someone else's alerts." />
        <meta property="twitter:image" content="https://alphatradingpros.com/Alpha Trading.png" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        
        {/* Schema.org structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alpha Trading Pros",
              "url": "https://alphatradingpros.com",
              "logo": "https://alphatradingpros.com/Alpha Trading.png",
              "description": "1-on-1 trading mentorship and education for stocks, options, and futures traders",
              "founder": {
                "@type": "Person",
                "name": "Alpha Trading Pros Team"
              },
              "offers": {
                "@type": "AggregateOffer",
                "name": "Alpha Trading Pros Mentorship Packages",
                "lowPrice": "2495",
                "highPrice": "5995",
                "priceCurrency": "USD",
                "offerCount": "3",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "url": "https://alphatradingpros.com/#packages",
                "description": "1-on-1 mentorship packages in stocks, options, and futures, plus the Sigma Terminal subscription"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@alphadatacapital.com"
              },
              "sameAs": [
                "https://x.com/AlphaTradingHQ",
                "https://instagram.com/alphatradinghq",
                "https://alphatradingpros.com"
              ]
            })
          }}
        />
      </Head>
      <AlphaTradingLanding />
    </>
  )
}
