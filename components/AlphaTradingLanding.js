import React from 'react';
import { ChevronDown, TrendingUp, Users, BookOpen, Zap, Bell, Play, CheckCircle, ArrowRight, Calendar, Clock, Target, BarChart3, MessageCircle, Mail } from 'lucide-react';

const AlphaTradingLanding = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinNow = () => {
    window.open('https://buy.stripe.com/dRmdR876a15ebf183c5os0a', '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
      color: 'white'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
{/* Your Actual Alpha Logo */}
<div style={{ width: '3rem', height: '3rem', position: 'relative' }}>
  <img 
    src="/Alpha Trading.png" 
    alt="Alpha Trading Logo" 
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Alpha Trading Pros</div>
          </div>
          <button 
            onClick={handleJoinNow}
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: '600',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
          >
            Subscribe Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '5rem'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
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
            <TrendingUp style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', color: '#10b981' }} />
            <span style={{ color: '#10b981', fontWeight: '500' }}>Live Trading Signals</span>
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
            Turn Market Moves into
            <span style={{ display: 'block', color: '#10b981' }}>Profits</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            marginBottom: '3rem',
            color: '#cbd5e1',
            maxWidth: '48rem',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures.
          </p>

          <button 
            onClick={handleJoinNow}
            style={{
              position: 'relative',
              background: 'linear-gradient(to right, #10b981, #2563eb)',
              color: 'white',
              fontWeight: 'bold',
              padding: '1.5rem 3rem',
              borderRadius: '0.75rem',
              fontSize: '1.25rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(16, 185, 129, 0.25)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center' }}>
              Join Now – Start Your Trading Journey
              <ArrowRight style={{ marginLeft: '0.75rem', width: '1.5rem', height: '1.5rem' }} />
            </span>
          </button>

          <div style={{ marginTop: '4rem' }}>
            <ChevronDown style={{ width: '2rem', height: '2rem', margin: '0 auto', color: '#64748b', animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* About/Credibility Section */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.3)',
            backdropFilter: 'blur(16px)',
            borderRadius: '1rem',
            padding: '3rem',
            border: '1px solid rgba(71, 85, 105, 0.5)'
          }}>
            <div style={{
              width: '6rem',
              height: '6rem',
              background: 'linear-gradient(to bottom right, #10b981, #2563eb)',
              borderRadius: '50%',
              margin: '0 auto 2rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp style={{ width: '3rem', height: '3rem', color: 'white' }} />
            </div>
            
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Meet Your Trading Guide</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.5rem' }}>MBA</div>
                <div style={{ color: '#cbd5e1' }}>Specializing in CFA</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.5rem' }}>2019</div>
                <div style={{ color: '#cbd5e1' }}>Trading Options Since</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '1.5rem' }}>Recent</div>
                <div style={{ color: '#cbd5e1' }}>Started Futures Trading</div>
              </div>
            </div>
            
            <p style={{ fontSize: '1.125rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              I'm focused on documenting my trading journey and sharing actionable signals that work. 
              My mission is to help retail traders navigate the markets with confidence through proven strategies and real-time insights.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Offer Section */}
      <section id="subscription" style={{
        padding: '5rem 0',
        background: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.5), rgba(37, 99, 235, 0.5))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              What You Get as an
              <span style={{ color: '#10b981' }}> Alpha Trading Subscriber</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '48rem', margin: '0 auto' }}>
              Everything you need to trade smarter, learn faster, and manage risk with discipline
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              { icon: Calendar, title: 'Monthly Webinars', desc: 'Exclusive strategies, live Q&A sessions, and market analysis', color: '#10b981' },
              { icon: Zap, title: 'Live Trading Signals', desc: 'Real-time alerts delivered via WhatsApp or Telegram', color: '#3b82f6' },
              { icon: Play, title: 'Recorded Webinars', desc: 'Access to all past sessions – watch anytime, anywhere', color: '#a855f7' },
              { icon: BookOpen, title: 'Educational Mini-Series', desc: 'Learn trading foundations from beginner to advanced', color: '#f59e0b' },
              { icon: Target, title: 'Resources & Reading Lists', desc: 'Curated trading books and premium materials', color: '#06b6d4' },
              { icon: Bell, title: 'Market News Alerts', desc: 'Live market-moving news delivered via Telegram', color: '#ef4444' },
              { icon: Mail, title: 'Weekly Newsletter', desc: 'Market insights, trade recaps, and upcoming opportunities', color: '#eab308' }
            ].map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(16px)',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = feature.color;
                e.currentTarget.querySelector('.icon').style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                e.currentTarget.querySelector('.icon').style.transform = 'scale(1)';
              }}
              >
                <feature.icon className="icon" style={{
                  width: '3rem',
                  height: '3rem',
                  color: feature.color,
                  marginBottom: '1.5rem',
                  transition: 'transform 0.3s'
                }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: '#cbd5e1' }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(37, 99, 235, 0.2))',
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>$159.99</div>
              <div style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>per month</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>Cancel anytime • No long-term commitment</div>
            </div>
            
            <button 
              onClick={handleJoinNow}
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
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(16, 185, 129, 0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
            >
              Subscribe Now – Start Trading Smarter
            </button>
          </div>
        </div>
      </section>

      {/* ORB Strategy Teaser */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Master the <span style={{ color: '#10b981' }}>ORB Strategy</span>
              </h2>
              
              <div style={{ marginBottom: '2rem' }}>
                {[
                  { color: '#10b981', title: 'Mark Pre-Market High (PMH) & Pre-Market Low (PML)', desc: 'Identify key levels before market open' },
                  { color: '#3b82f6', title: 'Break Above = Calls (Bullish)', desc: 'Enter long positions on upward breakouts' },
                  { color: '#a855f7', title: 'Break Below = Puts (Bearish)', desc: 'Enter short positions on downward breakouts' },
                  { color: '#ef4444', title: 'Avoid the "No Trade Zone"', desc: 'Stay disciplined and wait for clear signals' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: item.color, marginTop: '0.25rem', marginRight: '1rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ color: '#cbd5e1' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleJoinNow}
                style={{
                  background: 'linear-gradient(to right, #10b981, #2563eb)',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Learn This Strategy in Our Monthly Webinars
              </button>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(30, 41, 59, 0.3)',
              backdropFilter: 'blur(16px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(71, 85, 105, 0.5)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>ORB Strategy Visualization</h3>
              </div>
              
              <div style={{
                position: 'relative',
                height: '16rem',
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderRadius: '0.5rem',
                padding: '1rem'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '2rem',
                  left: '1rem',
                  right: '1rem',
                  borderTop: '2px dashed #10b981'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '-0.75rem' }}>PMH</div>
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '1rem',
                  right: '1rem',
                  borderTop: '2px dashed #ef4444'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '-0.75rem' }}>PML</div>
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '1rem',
                  right: '1rem',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(234, 179, 8, 0.2)',
                  height: '4rem',
                  borderRadius: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: '#eab308', fontSize: '0.875rem', fontWeight: '500' }}>No Trade Zone</span>
                </div>
                
                <div style={{ position: 'absolute', top: '0.5rem', right: '1rem', fontSize: '0.75rem', color: '#10b981' }}>📈 Calls Zone</div>
                <div style={{ position: 'absolute', bottom: '0.5rem', right: '1rem', fontSize: '0.75rem', color: '#ef4444' }}>📉 Puts Zone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(126, 34, 206, 0.3))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              What You Get as an <span style={{ color: '#10b981' }}>Alpha Trader</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '48rem', margin: '0 auto' }}>
              Everything in the subscription, laid out plainly — live signals, structured education, and weekly market context
            </p>
          </div>

          {/* What's Included */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {[
                { number: 'Live', label: 'Signals via WhatsApp & Telegram', color: '#10b981' },
                { number: 'Monthly', label: 'Live Strategy Webinars', color: '#3b82f6' },
                { number: 'Weekly', label: 'Newsletter & Trade Recaps', color: '#a855f7' },
                { number: 'ORB', label: 'Strategy Education & Mentorship', color: '#eab308' }
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: stat.color, marginBottom: '0.5rem' }}>{stat.number}</div>
                  <div style={{ color: '#cbd5e1' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '1rem',
              padding: '2rem',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#10b981' }}>Ready to Trade with Structure?</h3>
              <p style={{ fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Join a community focused on disciplined, rules-based trading — learn the process before you risk capital
              </p>
              <button 
                onClick={handleJoinNow}
                style={{
                  background: 'linear-gradient(to right, #10b981, #2563eb)',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '1rem 2.5rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                Get Started Now - $159.99/Month
              </button>
              <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '1.5rem', lineHeight: '1.5' }}>
                Trading futures and options involves substantial risk of loss and is not suitable for every investor.
                Signals and education are provided for informational purposes only and are not financial advice.
                Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(to right, #10b981, #2563eb)'
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Don't Trade Alone – Learn a Structured, Rules-Based Approach
          </h2>

          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
            Join Alpha Trading today for live signals, education, and a community that takes risk management seriously
          </p>
          
          <button 
            onClick={handleJoinNow}
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
            Join Alpha Trading Today
          </button>
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
          href="mailto:info@alphadatacapital.com?subject=Support Request"
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

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `
      }} />
    </div>
  );
};

export default AlphaTradingLanding;
