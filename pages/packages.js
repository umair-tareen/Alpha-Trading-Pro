import React from 'react';
import Head from 'next/head';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      name: 'STOCKS MENTORSHIP',
      price: '$995',
      level: 'Entry-Level Membership',
      focus: 'Core Technical Analysis & Small-Cap Stocks',
      stripeLink: 'YOUR_STRIPE_LINK_1', // Replace with actual Stripe link
      features: [
        'Morning Checklist & Dilution Tracker Guide',
        '1 x One-on-One Mentorship guided sessions',
        'Risk Management Blueprint',
        'Master Technical Analysis (Market Structure: Entry & Exit Zones)',
        'Basic Market Foundations (fundamentals) + Walkthrough of Trade Setup',
        'Market Psychology (FOMO) & Journaling Routine (TraderSync, TradeZella)',
        'Trade Journal Template + Review',
      ],
      goal: 'Build consistent profitability in equities.',
      optional: 'Optional: Access to a trading bot ($199 month), $5000 Valued Technical Analysis Algo Bot',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      borderColor: '#10b981'
    },
    {
      id: 2,
      name: 'STOCKS + OPTIONS MENTORSHIP',
      price: '$1,995',
      level: 'Intermediate Membership',
      focus: 'Stocks + Options Strategies',
      stripeLink: 'YOUR_STRIPE_LINK_2', // Replace with actual Stripe link
      features: [
        'Entry-level membership included',
        '2 x One-on-One Mentorship guided sessions',
        'Building Dividend Wealth with Equities & Options',
        'Deep Dive: Options Trading (Calls, Puts, Spreads)',
        'Covered Calls & Cash-Secured Puts',
        'Portfolio Hedging against market downturns',
        'Weekly Newsletter Access',
        'Access to Daily Live Trading in Discords Included for 2 months; $200 Monthly Membership',
        'Private WhatsApp Community (Real-Time Updates)',
      ],
      optional: 'Optional: Access to a trading bot ($199 month), $5000 Valued Technical Analysis Algo Bot',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      borderColor: '#3b82f6'
    },
    {
      id: 3,
      name: 'OPTIONS + FUTURES MENTORSHIP',
      price: '$2,995',
      level: 'Advanced Membership',
      focus: 'Multi-Asset Execution (Options + Futures)',
      stripeLink: 'YOUR_STRIPE_LINK_3', // Replace with actual Stripe link
      features: [
        'Intermediate Membership Included',
        '3 x One-on-One Mentorship Sessions',
        'Futures Mastery (Micro/Nano Contracts)',
        'Liquidity Maps & Smart Money Concepts',
        'Market Divergence Spotting (VIX, TICKS) & Institutional Order Flow (Level II + Time & Sales)',
        'Scaling & PnL Optimization System',
        'Live "Funded Trader" Readiness Reviews',
        'Access to Daily Live Trading in Discords Included for 3 months; $200 Monthly Membership',
      ],
      optional: 'Optional: Access to a trading bot ($199 month), $5000 Valued Technical Analysis Algo Bot',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
      borderColor: '#a855f7'
    },
    {
      id: 4,
      name: 'ELITE',
      price: '$3,995',
      level: 'Flagship Mentorship (All-In Access)',
      focus: 'Stocks + Options + Futures + Psychology',
      stripeLink: 'YOUR_STRIPE_LINK_4', // Replace with actual Stripe link
      features: [
        'Full Access to the Mentorship Curriculum (Entry-level, Intermediate & Advanced)',
        'Exclusive Alpha Elite Community',
        '4 x One-on-One Mentorship Sessions',
        'Full Trading Psychology & Discipline Module',
        'Automation Templates (PnL Dashboard, Win-Rate Tracker)',
        'Lifetime Access to Recordings + Future Updates',
        'Optional: Access to a trading bot ($199 month), $5000 Valued Technical Analysis Algo Bot',
        'Priority Support + Direct Chat Access',
      ],
      goal: 'Become a fully self-sufficient trader mastering multiple asset classes.',
      badge: '💎 Lifetime Access + Alpha Elite Certification',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      borderColor: '#f59e0b'
    }
  ];

  const handlePackageSelect = (stripeLink) => {
    if (stripeLink.startsWith('YOUR_STRIPE')) {
      alert('Please configure your Stripe payment links in /pages/packages.js');
      return;
    }
    window.open(stripeLink, '_blank');
  };

  return (
    <>
      <Head>
        <title>Mentorship Packages - Alpha Trading Pros</title>
        <meta name="description" content="Choose your Alpha Trading mentorship package. From entry-level stocks to elite multi-asset mastery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Alpha Trading.png" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
        color: 'white',
        padding: '2rem 1rem'
      }}>
        {/* Header */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          marginBottom: '3rem'
        }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#10b981',
            textDecoration: 'none',
            marginBottom: '2rem',
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            <ArrowLeft style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
            Back to Home
          </Link>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '1rem'
            }}>
              <img
                src="/Alpha Trading.png"
                alt="Alpha Trading Logo"
                style={{ width: '3rem', height: '3rem', objectFit: 'contain' }}
              />
              <h1 style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, white, #10b981)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0
              }}>
                ALPHA TRADING MENTORSHIP PACKAGES
              </h1>
            </div>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#cbd5e1',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Choose the mentorship package that fits your trading journey
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(16px)',
                borderRadius: '1rem',
                border: `2px solid ${pkg.borderColor}`,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${pkg.borderColor}40`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '2.5rem',
                height: '2.5rem',
                background: pkg.gradient,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.25rem'
              }}>
                {pkg.id}
              </div>

              {/* Package Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: 'white',
                  lineHeight: '1.2'
                }}>
                  {pkg.name}
                </h2>
                <div style={{
                  color: pkg.borderColor,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {pkg.level}
                </div>
                <div style={{
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  fontStyle: 'italic'
                }}>
                  Focus: {pkg.focus}
                </div>
              </div>

              {/* Price */}
              <div style={{
                background: pkg.gradient,
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: '1'
                }}>
                  {pkg.price}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '0.5rem'
                }}>
                  One-time payment
                </div>
              </div>

              {/* Features List */}
              <div style={{
                flex: 1,
                marginBottom: '1.5rem',
                maxHeight: '400px',
                overflowY: 'auto',
                paddingRight: '0.5rem'
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#e2e8f0'
                }}>
                  Includes:
                </h3>
                {pkg.features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '0.75rem',
                      gap: '0.5rem'
                    }}
                  >
                    <CheckCircle style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      color: pkg.borderColor,
                      flexShrink: 0,
                      marginTop: '0.125rem'
                    }} />
                    <span style={{
                      color: '#cbd5e1',
                      fontSize: '0.875rem',
                      lineHeight: '1.5'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Goal/Badge */}
              {(pkg.goal || pkg.badge) && (
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: `1px solid ${pkg.borderColor}40`,
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  {pkg.goal && (
                    <div style={{
                      color: '#cbd5e1',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      <strong style={{ color: pkg.borderColor }}>Goal:</strong> {pkg.goal}
                    </div>
                  )}
                  {pkg.badge && (
                    <div style={{
                      color: pkg.borderColor,
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginTop: pkg.goal ? '0.5rem' : '0'
                    }}>
                      {pkg.badge}
                    </div>
                  )}
                </div>
              )}

              {/* Optional Add-on */}
              {pkg.optional && (
                <div style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(71, 85, 105, 0.5)'
                }}>
                  {pkg.optional}
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={() => handlePackageSelect(pkg.stripeLink)}
                style={{
                  background: pkg.gradient,
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: '100%',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = `0 15px 35px -5px ${pkg.borderColor}60`;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Select {pkg.name.split(' ')[0]} Package
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(16px)',
          borderRadius: '1rem',
          border: '2px solid #10b981',
          padding: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#10b981'
          }}>
            Not Sure Which Package to Choose?
          </h3>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '1.5rem',
            lineHeight: '1.6'
          }}>
            Contact us for a free consultation to find the perfect mentorship package for your trading goals.
          </p>
          <a
            href="mailto:info@alphadatacapital.com?subject=Mentorship Package Inquiry"
            style={{
              display: 'inline-block',
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#059669';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#10b981';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Custom Scrollbar Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            div::-webkit-scrollbar {
              width: 8px;
            }
            div::-webkit-scrollbar-track {
              background: rgba(15, 23, 42, 0.5);
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb {
              background: #10b981;
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #059669;
            }
          `
        }} />
      </div>
    </>
  );
};

export default PackagesPage;
