import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Bot,
  Users,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  TrendingUp,
  CalendarDays,
  Shield,
  MessageSquare,
  PlayCircle,
  BarChart3,
  Target,
  Compass,
} from 'lucide-react';

const calendlyUrl = 'https://calendly.com/bo-umair/charting-mentorship';

const pillars = [
  {
    icon: GraduationCap,
    title: 'Mentorship Program',
    description: 'Live coaching and a structured path to help traders build discipline, confidence, and consistency.',
  },
  {
    icon: BookOpen,
    title: 'Trading Education',
    description: 'Courses, strategy playbooks, journaling systems, and preparation frameworks.',
  },
  {
    icon: Bot,
    title: 'Algo Tools',
    description: 'AI-assisted scanners and alerts to support decision-making with speed and structure.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Private Discord, webinars, chart reviews, and mentorship feedback from serious traders.',
  },
];

const mentorshipModules = [
  'Market structure and support/resistance',
  'Options and futures market foundations',
  'Technical setups and small-cap momentum',
  'Scanner configuration and alert interpretation',
  'Risk management and position sizing',
  'Trade journaling and performance review',
  'Weekly live chart reviews and Q&A',
];

const mentorshipTiers = [
  {
    title: 'Core Mentorship',
    details: 'Best for traders who want structure, accountability, and weekly direction.',
  },
  {
    title: 'Mentorship + Tools',
    details: 'Includes mentorship plus AI-assisted scanner tools for faster opportunity detection.',
  },
  {
    title: 'Private Intensive',
    details: 'A selective hands-on track with deeper feedback and direct execution coaching.',
  },
];

const playbooks = [
  'Pre-Market Momentum Strategy',
  'VWAP Reclaim Strategy',
  'Short Squeeze Strategy',
  'Support Bounce Strategy',
  'Breakout Continuation Strategy',
];

const routine = [
  'Market news and economic events',
  'Top pre-market movers',
  'Relative volume and momentum scans',
  'Key support and resistance levels',
  'Daily trade plan and risk parameters',
];

const botFeatures = [
  'Pre-market scanners',
  'Real-time alerts',
  'Momentum detection',
  'Liquidity sweep detection',
  'Breakout notifications',
];

const AlphaTradingLanding = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookIntro = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #111827 100%)',
        color: 'white',
      }}
    >
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/Alpha Trading.png" alt="Alpha Trading logo" style={{ width: '2.25rem', height: '2.25rem' }} />
            <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Alpha Trading Pro</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollToSection('mentorship')}
              style={{
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0.6rem',
                padding: '0.6rem 1rem',
                background: 'linear-gradient(90deg, #10b981, #14b8a6)',
                color: 'white',
                fontWeight: 700,
              }}
            >
              Join the Mentorship
            </button>
            <button
              onClick={handleBookIntro}
              style={{
                border: '1px solid rgba(147, 197, 253, 0.6)',
                cursor: 'pointer',
                borderRadius: '0.6rem',
                padding: '0.6rem 1rem',
                background: 'transparent',
                color: '#dbeafe',
                fontWeight: 600,
              }}
            >
              Book Intro Call
            </button>
          </div>
        </div>
      </nav>

      <section style={{ padding: '5.5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6ee7b7', fontWeight: 700, marginBottom: '1rem' }}>
            Learn to Trade with Structure — Not Guesswork
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Master the Markets with Structure and Discipline
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', maxWidth: '760px', margin: '0 auto 2rem' }}>
            Alpha Trading provides a structured mentorship program designed to help traders develop real skills,
            build confidence, and execute with a repeatable strategy across options and futures.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollToSection('mentorship')}
              style={{
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0.8rem',
                padding: '0.95rem 1.4rem',
                background: 'linear-gradient(90deg, #10b981, #2563eb)',
                color: 'white',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Join the Mentorship <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              style={{
                border: '1px solid rgba(125, 211, 252, 0.7)',
                cursor: 'pointer',
                borderRadius: '0.8rem',
                padding: '0.95rem 1.4rem',
                background: 'transparent',
                color: '#dbeafe',
                fontWeight: 700,
              }}
            >
              View Trading Tools
            </button>
            <button
              onClick={handleBookIntro}
              style={{
                border: '1px solid rgba(110, 231, 183, 0.9)',
                cursor: 'pointer',
                borderRadius: '0.8rem',
                padding: '0.95rem 1.4rem',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#d1fae5',
                fontWeight: 700,
              }}
            >
              Book Demo / Intro Session
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.55)',
                border: '1px solid rgba(148, 163, 184, 0.25)',
                borderRadius: '0.9rem',
                padding: '1.2rem',
              }}
            >
              <pillar.icon style={{ color: '#34d399', marginBottom: '0.75rem' }} />
              <h3 style={{ marginBottom: '0.45rem' }}>{pillar.title}</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mentorship" style={{ padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>Alpha Trading Mentorship Program</h2>
          <p style={{ color: '#cbd5e1', maxWidth: '850px', marginBottom: '1.5rem' }}>
            This is not a signals group. This is a trading education community designed to help traders understand
            markets, build discipline, and develop independent decision-making.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <InfoCard icon={GraduationCap} title="Structured Curriculum" items={mentorshipModules} />
            <InfoCard
              icon={CalendarDays}
              title="Weekly Live Mentorship Sessions"
              items={['Strategy breakdowns', 'Live chart reviews', 'Q&A sessions', 'Trade walkthroughs']}
            />
            <InfoCard
              icon={ClipboardList}
              title="Trading Journal System"
              items={['Track daily trades', 'Review weekly performance', 'Log mistakes and lessons learned']}
            />
            <InfoCard
              icon={Users}
              title="Private Trading Community"
              items={['Discord access', 'Strategy discussions', 'Trade reviews', 'Mentorship feedback']}
            />
          </div>

          <div
            style={{
              marginTop: '1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              border: '1px solid rgba(52, 211, 153, 0.35)',
              borderRadius: '0.9rem',
              padding: '1.2rem',
            }}
          >
            <h3 style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="#6ee7b7" /> Alpha Trading Welcome Kit
            </h3>
            <p style={{ color: '#cbd5e1' }}>
              New members receive a physical package including a strategy journal, trading playbook, pre-market
              checklist guide, and trade logging system to reinforce discipline and execution.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Mentorship Tiers</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
            You can share your final tier names/pricing anytime and we can plug them in directly.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {mentorshipTiers.map((tier) => (
              <div key={tier.title} style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1rem', border: '1px solid rgba(148,163,184,0.3)' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{tier.title}</h3>
                <p style={{ color: '#cbd5e1' }}>{tier.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" style={{ padding: '4.5rem 1.5rem', backgroundColor: 'rgba(15, 23, 42, 0.45)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', marginBottom: '0.75rem' }}>AI-Assisted Market Scanning</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
              Our algorithmic scanning tools monitor market activity and identify potential opportunities using
              relative volume spikes, float rotation, breakout levels, and technical structure.
            </p>
            {botFeatures.map((feature) => (
              <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.55rem' }}>
                <CheckCircle size={16} color="#34d399" />
                <span style={{ color: '#e2e8f0' }}>{feature}</span>
              </div>
            ))}
            <p style={{ color: '#93c5fd', marginTop: '1rem', fontWeight: 600 }}>
              Important: Bots are tools that support traders. They are not guaranteed trade signals.
            </p>
          </div>
          <div
            style={{
              borderRadius: '0.9rem',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              backgroundColor: 'rgba(30, 41, 59, 0.55)',
              padding: '1.2rem',
            }}
          >
            <h3 style={{ marginBottom: '0.6rem' }}>Trading Playbooks</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '0.85rem' }}>
              Every playbook explains when to trade, entry conditions, risk rules, and example setups.
            </p>
            {playbooks.map((playbook) => (
              <div key={playbook} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem' }}>
                <PlayCircle size={15} color="#60a5fa" />
                <span>{playbook}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1.2rem', border: '1px solid rgba(148,163,184,0.3)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={20} color="#34d399" /> The Alpha Trading Pre-Market Routine</h3>
            <p style={{ color: '#cbd5e1', margin: '0.5rem 0 0.8rem' }}>Preparation reduces emotional decision-making and improves consistency.</p>
            {routine.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Target size={15} color="#93c5fd" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1.2rem', border: '1px solid rgba(148,163,184,0.3)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Compass size={20} color="#34d399" /> The Alpha Trading Path</h3>
            {['Step 1: Learn the foundations', 'Step 2: Build your trading plan', 'Step 3: Practice with structure', 'Step 4: Execute with confidence'].map((step) => (
              <div key={step} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem' }}>
                <CheckCircle size={16} color="#22c55e" />
                <span>{step}</span>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1.2rem', border: '1px solid rgba(148,163,184,0.3)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Shield size={20} color="#34d399" /> Why This Mentorship Is Different</h3>
            <p style={{ color: '#cbd5e1', marginTop: '0.55rem' }}>
              Most trading groups focus on selling signals. We focus on producing independent traders who can identify
              setups, manage risk, journal performance, and adapt to changing market conditions.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Book a Demo / Intro Session</h2>
          <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1.1rem', border: '1px solid rgba(148,163,184,0.3)' }}>
            <p style={{ color: '#cbd5e1', marginBottom: '0.7rem' }}>
              We use intro sessions to align expectations, assess fit, and ensure each member can complete the program.
              If we detect red flags during the conversation, we may decline enrollment to protect community quality.
            </p>
            <button
              onClick={handleBookIntro}
              style={{
                border: 'none',
                cursor: 'pointer',
                borderRadius: '0.75rem',
                padding: '0.8rem 1.2rem',
                background: 'linear-gradient(90deg, #10b981, #2563eb)',
                color: 'white',
                fontWeight: 700,
              }}
            >
              Open Calendly
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 1.5rem 4rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Student Wins & Testimonials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              '“I stopped chasing alerts and finally learned why trades work.”',
              '“My confidence improved because I now have a repeatable routine.”',
              '“Journaling and mentorship feedback changed my execution.”',
            ].map((quote) => (
              <div key={quote} style={{ backgroundColor: 'rgba(30, 41, 59, 0.55)', borderRadius: '0.9rem', padding: '1rem', border: '1px solid rgba(148,163,184,0.3)' }}>
                <MessageSquare size={16} color="#93c5fd" />
                <p style={{ marginTop: '0.6rem', color: '#e2e8f0' }}>{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(148,163,184,0.25)', padding: '1.2rem 1.5rem 2.3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/Alpha Trading.png" alt="Alpha Trading logo" style={{ width: '1.6rem', height: '1.6rem' }} />
            <strong>Alpha Trading Pro</strong>
          </div>
          <p style={{ color: '#94a3b8', maxWidth: '720px' }}>
            Disclaimer: All content is for educational purposes only and does not constitute investment or financial
            advice. Trading involves risk and may result in loss of capital.
          </p>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, items }) => (
  <div
    style={{
      backgroundColor: 'rgba(30, 41, 59, 0.55)',
      border: '1px solid rgba(148, 163, 184, 0.25)',
      borderRadius: '0.9rem',
      padding: '1.2rem',
    }}
  >
    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
      <Icon size={20} color="#34d399" /> {title}
    </h3>
    {items.map((item) => (
      <div key={item} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
        <BarChart3 size={15} color="#93c5fd" style={{ marginTop: '0.2rem' }} />
        <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{item}</span>
      </div>
    ))}
  </div>
);

export default AlphaTradingLanding;
