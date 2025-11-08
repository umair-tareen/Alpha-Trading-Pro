import Head from 'next/head'
import MentorshipLanding from '../components/MentorshipLanding'

export default function Mentorship() {
  return (
    <>
      <Head>
        <title>Alpha Trading Mentorship Programs - Stocks, Options & Futures Training</title>
        <meta name="description" content="Professional trading mentorship programs starting at $995. Learn stocks, options, and futures trading from experts. Comprehensive curriculum with lifetime access, community support, and proven strategies." />

        {/* SEO Keywords */}
        <meta name="keywords" content="trading mentorship, options trading course, futures trading education, stocks mentorship, trading bootcamp, professional trading training, prop firm preparation, trading psychology, risk management, technical analysis course" />

        {/* Viewport and basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alpha Trading Pros" />
        <link rel="canonical" href="https://alphatradingpros.com/mentorship" />

        {/* Favicon */}
        <link rel="icon" href="/Alpha Trading.png" />
        <link rel="apple-touch-icon" href="/Alpha Trading.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphatradingpros.com/mentorship" />
        <meta property="og:title" content="Alpha Trading Mentorship Programs - Transform Your Trading Career" />
        <meta property="og:description" content="Comprehensive trading mentorship from $995. Learn stocks, options, and futures with expert guidance, proven strategies, and lifetime support." />
        <meta property="og:image" content="https://alphatradingpros.com/Alpha Trading.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Alpha Trading Pros" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AlphaTradingHQ" />
        <meta property="twitter:creator" content="@AlphaTradingHQ" />
        <meta property="twitter:url" content="https://alphatradingpros.com/mentorship" />
        <meta property="twitter:title" content="Alpha Trading Mentorship Programs" />
        <meta property="twitter:description" content="Transform your trading career with professional mentorship in stocks, options, and futures." />
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
              "@type": "EducationalOrganization",
              "name": "Alpha Trading Pros Mentorship",
              "url": "https://alphatradingpros.com/mentorship",
              "logo": "https://alphatradingpros.com/Alpha Trading.png",
              "description": "Professional trading mentorship programs for stocks, options, and futures trading",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Stocks Mentorship",
                  "price": "995",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Entry-level 12-week stocks trading mentorship with technical analysis"
                },
                {
                  "@type": "Offer",
                  "name": "Stocks + Options Mentorship",
                  "price": "1995",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Intermediate 6-month mentorship covering stocks and options strategies"
                },
                {
                  "@type": "Offer",
                  "name": "Options + Futures Mentorship",
                  "price": "2995",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Advanced 12-month mentorship with prop firm preparation"
                },
                {
                  "@type": "Offer",
                  "name": "Alpha Elite Mentorship",
                  "price": "3995",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "description": "Flagship lifetime mentorship with one-on-one sessions"
                },
                {
                  "@type": "Offer",
                  "name": "Alpha Stocks Premium Bot",
                  "price": "95",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/LimitedAvailability",
                  "description": "Automated trading bot subscription (50% off for first 10 members)"
                }
              ],
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
      <MentorshipLanding />
    </>
  )
}
