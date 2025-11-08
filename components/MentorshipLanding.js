import React from 'react';
import { Check, TrendingUp, Target, BarChart3, Trophy, Star, CheckCircle, ArrowRight, MessageCircle, DollarSign, Clock, Users, BookOpen, Zap } from 'lucide-react';

const MentorshipLanding = () => {
  const mentorshipPackages = [
    {
      id: 1,
      emoji: '1️⃣',
      name: 'STOCKS MENTORSHIP',
      price: '$995',
      level: 'Entry-Level Membership',
      focus: 'Core Technical Analysis & Small-Cap Stocks',
      access: '3-Month Access to Materials',
      color: '#10b981',
      gradient: 'linear-gradient(to bottom right, #10b981, #059669)',
      stripeLink: '#', // Replace with actual Stripe link
      features: [
        '12-Week Mentorship (Foundations + Live Labs)',
        'Master Technical Analysis (Structure, Zones, Volume)',
        'Market Psychology & Journaling Routine',
        'Risk Management Blueprint (1–2% Rule)',
        'Trade Journal Template + Review',
        'Access to Weekly Live Trading (SPY & Small Caps)',
        'Bonus: Catalyst & Dilution Tracker Guide'
      ],
      goal: 'Build consistent profitability in equities.'
    },
    {
      id: 2,
      emoji: '2️⃣',
      name: 'STOCKS + OPTIONS MENTORSHIP',
      price: '$1,995',
      level: 'Intermediate Membership',
      focus: 'Stocks + Options Strategies',
      access: '6-Month Access to Materials',
      color: '#3b82f6',
      gradient: 'linear-gradient(to bottom right, #3b82f6, #2563eb)',
      stripeLink: '#', // Replace with actual Stripe link
      popular: true,
      features: [
        'Everything in Stocks Mentorship, plus:',
        'Deep Dive: Options Trading (Calls, Puts, Spreads)',
        'Covered Calls & Cash-Secured Puts',
        'Portfolio Hedging & Income Generation',
        'Weekly Newsletter Access',
        'Private WhatsApp Community (Real-Time Updates)',
        'Midweek Live "Options Playbook" Sessions'
      ],
      goal: 'Make your owned stocks pay you back through covered calls/puts.'
    },
    {
      id: 3,
      emoji: '3️⃣',
      name: 'OPTIONS + FUTURES MENTORSHIP',
      price: '$2,995',
      level: 'Advanced Membership',
      focus: 'Multi-Asset Execution (Options + Futures)',
      access: '12-Month Access + Prop Firm Prep Tools',
      color: '#a855f7',
      gradient: 'linear-gradient(to bottom right, #a855f7, #7e22ce)',
      stripeLink: '#', // Replace with actual Stripe link
      features: [
        'Everything in Previous Tiers, plus:',
        'Futures Mastery (Micro/Nano Contracts)',
        'Liquidity Maps & Smart Money Concepts',
        'Divergence Spotting & Institutional Order Flow',
        'Scaling & PnL Optimization System',
        'Live "Funded Trader" Readiness Reviews',
        'Weekly Strategy Masterclass'
      ],
      goal: 'Develop cross-market precision and build a funded trading portfolio.'
    },
    {
      id: 4,
      emoji: '4️⃣',
      name: 'ALPHA ELITE',
      price: '$3,995',
      level: 'Flagship Mentorship (All-In Access)',
      focus: 'Stocks + Options + Futures + Psychology',
      access: 'Lifetime Access + Alpha Elite Certification',
      color: '#eab308',
      gradient: 'linear-gradient(to bottom right, #f59e0b, #eab308)',
      stripeLink: '#', // Replace with actual Stripe link
      premium: true,
      features: [
        'Full Access to the Mentorship Curriculum (Phases 1–3)',
        'Exclusive Alpha Elite Community',
        'One-on-One Mentorship Sessions (2x Monthly)',
        'Full Trading Psychology & Discipline Module',
        'Automation Templates (PnL Dashboard, Win-Rate Tracker)',
        'Lifetime Access to Recordings + Future Updates',
        'Priority Support + Direct Chat Access'
      ],
      goal: 'Become a fully self-sufficient trader mastering multiple asset classes.'
    }
  ];

  const handleEnroll = (stripeLink) => {
    if (stripeLink !== '#') {
      window.open(stripeLink, '_blank');
    } else {
      // Scroll to contact or show message
      alert('Please contact us to enroll in this program: info@alphadatacapital.com');
    }
  };

  const handleBotSubscribe = () => {
    // Replace with actual bot Stripe link
    alert('Bot subscription coming soon! Contact: info@alphadatacapital.com');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
      color: 'white'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.5rem',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(71, 85, 105, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '3rem', height: '3rem', position: 'relative' }}>
              <img
                src="/Alpha Trading.png"
                alt="Alpha Trading Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Alpha Trading Pros</div>
          </div>
          <a
            href="/"
            style={{
              color: '#cbd5e1',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#10b981'}
            onMouseOut={(e) => e.target.style.color = '#cbd5e1'}
          >
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '5rem 1.5rem 3rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            marginBottom: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '9999px',
            padding: '0.5rem 1.5rem',
            backdropFilter: 'blur(4px)'
          }}>
            <Trophy style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', color: '#10b981' }} />
            <span style={{ color: '#10b981', fontWeight: '500' }}>Professional Trading Mentorship</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, white, #bfdbfe, #10b981)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            ALPHA TRADING
            <span style={{ display: 'block', background: 'linear-gradient(to right, #10b981, #eab308)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MENTORSHIP PACKAGES</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            marginBottom: '3rem',
            color: '#cbd5e1',
            maxWidth: '48rem',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Transform your trading career with comprehensive mentorship programs designed to take you from beginner to professional trader
          </p>
        </div>
      </section>

      {/* Mentorship Packages Grid */}
      <section style={{ padding: '3rem 1.5rem 5rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {mentorshipPackages.map((pkg) => (
              <div key={pkg.id} style={{
                position: 'relative',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(16px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: pkg.popular ? `2px solid ${pkg.color}` : '1px solid rgba(71, 85, 105, 0.5)',
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: pkg.premium ? `0 0 40px ${pkg.color}40` : 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${pkg.color}40`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = pkg.premium ? `0 0 40px ${pkg.color}40` : 'none';
              }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: pkg.gradient,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Star style={{ width: '1rem', height: '1rem' }} />
                    POPULAR
                  </div>
                )}

                {/* Premium Badge */}
                {pkg.premium && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: pkg.gradient,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Trophy style={{ width: '1rem', height: '1rem' }} />
                    PREMIUM
                  </div>
                )}

                {/* Package Header */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{pkg.emoji}</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: pkg.color
                  }}>
                    {pkg.name}
                  </h3>
                  <div style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    {pkg.level}
                  </div>
                  <div style={{
                    background: `${pkg.color}20`,
                    border: `1px solid ${pkg.color}40`,
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0'
                  }}>
                    <strong style={{ color: pkg.color }}>Focus:</strong> {pkg.focus}
                  </div>
                </div>

                {/* Price */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: pkg.color,
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.price}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: `${pkg.color}20`,
                    border: `1px solid ${pkg.color}40`,
                    borderRadius: '9999px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    color: '#e2e8f0',
                    gap: '0.5rem'
                  }}>
                    <Clock style={{ width: '1rem', height: '1rem', color: pkg.color }} />
                    {pkg.access}
                  </div>
                </div>

                {/* Features */}
                <div style={{ flex: 1, marginBottom: '2rem' }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#e2e8f0'
                  }}>
                    Includes:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {pkg.features.map((feature, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem',
                        fontSize: '0.875rem'
                      }}>
                        <CheckCircle style={{
                          width: '1.25rem',
                          height: '1.25rem',
                          color: pkg.color,
                          marginRight: '0.75rem',
                          marginTop: '0.125rem',
                          flexShrink: 0
                        }} />
                        <span style={{ color: '#cbd5e1' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Goal */}
                <div style={{
                  background: `${pkg.color}15`,
                  border: `1px solid ${pkg.color}30`,
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    color: pkg.color,
                    marginBottom: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Target style={{ width: '1rem', height: '1rem' }} />
                    Goal:
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>
                    {pkg.goal}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleEnroll(pkg.stripeLink)}
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = `0 10px 25px ${pkg.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Enroll Now
                  <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bot Subscription Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(37, 99, 235, 0.3))'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(16px)',
            borderRadius: '1.5rem',
            padding: '3rem',
            border: '2px solid rgba(16, 185, 129, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-20%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>

            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '9999px',
                padding: '0.5rem 1.5rem',
                marginBottom: '1.5rem',
                gap: '0.5rem'
              }}>
                <Zap style={{ width: '1.25rem', height: '1.25rem', color: '#10b981' }} />
                <span style={{ color: '#10b981', fontWeight: '600' }}>AUTOMATED TRADING</span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(to right, white, #10b981)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Alpha Stocks Premium Bot
              </h2>

              <p style={{
                fontSize: '1.125rem',
                color: '#cbd5e1',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Get AlphaStocks Premium for just <span style={{ color: '#10b981', fontWeight: 'bold' }}>$95/month</span> — a 50% discount from the original $195/month — available only for the first 10 members
              </p>

              {/* Features Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                {[
                  { icon: BarChart3, text: 'Algorithmic Trading Signals', color: '#10b981' },
                  { icon: Zap, text: 'Real-Time Execution', color: '#3b82f6' },
                  { icon: Target, text: 'Optimized Entry & Exit Points', color: '#a855f7' },
                  { icon: Users, text: 'Limited to First 10 Members', color: '#eab308' }
                ].map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <feature.icon style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      color: feature.color,
                      flexShrink: 0
                    }} />
                    <span style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Box */}
              <div style={{
                background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(37, 99, 235, 0.2))',
                borderRadius: '1rem',
                padding: '2rem',
                marginBottom: '2rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: '#64748b',
                    textDecoration: 'line-through'
                  }}>
                    $195
                  </span>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#10b981'
                  }}>
                    $95
                  </span>
                  <div style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    50% OFF
                  </div>
                </div>
                <div style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>per month</div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#ef4444',
                  fontWeight: '600'
                }}>
                  ⚡ Only first 10 members get this discount!
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBotSubscribe}
                style={{
                  background: 'linear-gradient(to right, #10b981, #2563eb)',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '1.5rem 3rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.25rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(16, 185, 129, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(16, 185, 129, 0.25)';
                }}
              >
                Subscribe to AlphaStocks Bot Now
                <ArrowRight style={{ width: '1.5rem', height: '1.5rem' }} />
              </button>

              <div style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                fontSize: '0.875rem',
                color: '#64748b'
              }}>
                Billed monthly • Cancel anytime • Secure payment via Stripe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Why Choose <span style={{ color: '#10b981' }}>Alpha Trading</span> Mentorship?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '48rem', margin: '0 auto' }}>
              Join hundreds of successful traders who've transformed their trading with our proven mentorship programs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: Users,
                title: 'Expert Mentorship',
                description: 'Learn from professionals with years of real trading experience',
                color: '#10b981'
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Curriculum',
                description: 'Structured learning path from basics to advanced strategies',
                color: '#3b82f6'
              },
              {
                icon: Target,
                title: 'Proven Strategies',
                description: 'Battle-tested techniques used by professional traders',
                color: '#a855f7'
              },
              {
                icon: MessageCircle,
                title: 'Community Support',
                description: 'Join a network of traders supporting each other',
                color: '#f59e0b'
              },
              {
                icon: BarChart3,
                title: 'Real Results',
                description: 'Track your progress with actionable metrics and feedback',
                color: '#06b6d4'
              },
              {
                icon: Trophy,
                title: 'Lifetime Access',
                description: 'Keep learning with ongoing updates and resources',
                color: '#eab308'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(16px)',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                transition: 'all 0.3s',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = benefit.color;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: `${benefit.color}20`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <benefit.icon style={{ width: '2rem', height: '2rem', color: benefit.color }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: benefit.color }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(to right, #10b981, #2563eb)'
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Ready to Transform Your Trading Career?
          </h2>

          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
            Choose the mentorship package that fits your goals and start your journey to consistent profitability today
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="mailto:info@alphadatacapital.com?subject=Mentorship Inquiry"
              style={{
                backgroundColor: 'white',
                color: '#10b981',
                fontWeight: 'bold',
                padding: '1.5rem 3rem',
                borderRadius: '0.75rem',
                fontSize: '1.25rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f1f5f9';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
              Contact Us to Get Started
            </a>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
              Or email us directly at: info@alphadatacapital.com
            </p>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50
      }}>
        <a
          href="mailto:info@alphadatacapital.com?subject=Mentorship Question"
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem',
            borderRadius: '50%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s',
            display: 'block'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3b82f6';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
        </a>
      </div>
    </div>
  );
};

export default MentorshipLanding;
