import Head from 'next/head'
import AlphaTradingLanding from '../components/AlphaTradingLanding'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Trading Pros - Live Trading Signals & Options Education | $159.99/Month</title>
        <meta name="description" content="Get live trading signals, monthly webinars, and exclusive educational resources for options and futures trading. Disciplined, rules-based ORB strategy education. Subscribe for $159.99/month." />
        
        {/* SEO Keywords */}
        <meta name="keywords" content="trading signals, options trading, futures trading, trading education, prop firm trading, ORB strategy, trading subscription, live trading alerts, trading webinars, options signals, day trading, swing trading" />
        
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
        <meta property="og:title" content="Alpha Trading Pros - Live Trading Signals & Options Education" />
        <meta property="og:description" content="Live trading signals, monthly webinars, and structured educational resources for options and futures trading." />
        <meta property="og:image" content="https://alphatradingpros.com/Alpha Trading.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Alpha Trading Pros" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AlphaTradingHQ" />
        <meta property="twitter:creator" content="@AlphaTradingHQ" />
        <meta property="twitter:url" content="https://alphatradingpros.com/" />
        <meta property="twitter:title" content="Alpha Trading Pros - Live Trading Signals & Options Education" />
        <meta property="twitter:description" content="Live trading signals, monthly webinars, and structured education for options and futures traders." />
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
              "description": "Professional trading signals and education for options and futures traders",
              "founder": {
                "@type": "Person",
                "name": "Alpha Trading Pros Team"
              },
              "offers": {
                "@type": "Offer",
                "name": "Alpha Trading Subscription",
                "price": "159.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "url": "https://alphatradingpros.com",
                "description": "Monthly subscription for live trading signals, webinars, and educational resources"
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
