import React from 'react';
import {
  Check, X, ArrowRight, Brain, ShieldCheck, Target, LineChart, Activity,
  ListChecks, BookOpen, Layers, Cpu, LayoutDashboard, Bell, MessageCircle, Zap
} from 'lucide-react';

// Stripe payment links, one per product. Filled in after the links are created.
const CHECKOUT = {
  entry: 'https://buy.stripe.com/8x2dR82PUaFO3MzerA5os0m',
  intermediate: 'https://buy.stripe.com/6oUcN4cqu6pyaaXgzI5os0n',
  advanced: 'https://buy.stripe.com/cNi00ifCG4hq82Pbfo5os0o',
  terminal: 'https://buy.stripe.com/cNi3cu1LQ01adn90AK5os0p',
};

const PACKAGES = [
  {
    key: 'entry',
    name: 'Entry-Level',
    sub: 'Stocks mentorship, 1-on-1',
    price: '$3,400',
    cadence: 'one-time',
    featured: false,
    cta: 'Start at Entry-Level',
    features: [
      '4x one-on-one mentorship sessions',
      'Morning checklist & dilution tracker guide',
      'Entry setups & indicators',
      'Technical analysis for entry and exit zones',
      'Risk management & position sizing fundamentals',
      'Trade journaling framework',
      'SPY & small-cap watchlist process',
    ],
  },
  {
    key: 'intermediate',
    name: 'Intermediate',
    sub: 'Stocks + options mentorship',
    price: '$4,900',
    cadence: 'one-time',
    featured: true,
    cta: 'Choose Intermediate',
    features: [
      'Everything in Entry-Level, included',
      '6x one-on-one mentorship sessions',
      'Dividend income with the Wheel strategy',
      'Options trading: calls, puts & spreads',
      'Income strategies & covered calls',
      'Options risk management & Greeks basics',
      'Catalyst & earnings playbook',
    ],
  },
  {
    key: 'advanced',
    name: 'Advanced Elite',
    sub: 'Stocks + options + futures, 1-on-1',
    price: '$6,900',
    cadence: 'one-time',
    featured: false,
    cta: 'Go Advanced Elite',
    features: [
      'Everything in Intermediate, included',
      '10x one-on-one mentorship sessions',
      'Futures mastery (micro & nano contracts)',
      'Liquidity maps & smart money concepts',
      'Order flow & market structure reading',
      'Advanced risk & trade management',
      'Personal trading playbook development',
      'Trading psychology & discipline coaching',
      'Priority scheduling & support',
    ],
  },
];

const SELL = ['Indicators', 'Alerts', 'Discord access', '"Winning setups"', 'Lifestyle marketing'];
const TEACH = ['Decision making', 'Risk management', 'Trade management', 'Psychology', 'Consistency systems'];

const DAYS = [
  { n: 'Day 01', t: 'Foundations' },
  { n: 'Day 02', t: 'Market Structure' },
  { n: 'Day 03', t: 'Execution & Risk' },
  { n: 'Day 04', t: 'Playbook Development' },
];

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Small-cap & SPY focus',
    body: 'No jumping between forex, crypto, and penny stocks until you are overwhelmed. We focus on SPY, small caps, technical analysis, and catalysts. Far easier to actually master.',
  },
  {
    icon: LineChart,
    title: 'We teach the "why"',
    body: 'Not just "support is here." Why support exists, who is buying there, what volume confirms it, and what invalidates it. Understanding, not memorized lines.',
  },
  {
    icon: Activity,
    title: 'Real trading psychology',
    body: 'Built from real experience with blown accounts, overtrading, and FOMO. The material leads with discipline, patience, and execution, not the pretense that trading is easy.',
  },
];

const DELIVERABLES = [
  { icon: ListChecks, title: 'A watchlist process', desc: 'How to find stocks.' },
  { icon: ShieldCheck, title: 'A risk plan', desc: 'How much to risk.' },
  { icon: BookOpen, title: 'A journal', desc: 'How to improve.' },
  { icon: Layers, title: 'A playbook', desc: 'What setups you trade.' },
];

const TERMINAL_FEATURES = [
  { icon: Zap, label: 'Built for options day trading' },
  { icon: Cpu, label: 'Multi-agent persona (Zeus AI)' },
  { icon: LayoutDashboard, label: 'Full terminal & dashboard access' },
  { icon: Activity, label: 'Order flow monitor' },
  { icon: Bell, label: 'Automated watchlist & alerts' },
  { icon: BookOpen, label: 'AI-assisted journaling & analytics' },
  { icon: LineChart, label: 'Market structure tooling' },
];

const AlphaTradingLanding = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const checkout = (key) => {
    const url = CHECKOUT[key];
    if (url && url !== '#') window.open(url, '_blank');
    else scrollTo('packages');
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav__inner">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }}>
            <img src="/Alpha Trading.png" alt="Alpha Trading Pros" />
            <span>Alpha Trading Pros</span>
          </a>
          <div className="nav__links">
            <a href="#approach" onClick={(e) => { e.preventDefault(); scrollTo('approach'); }}>Approach</a>
            <a href="#packages" onClick={(e) => { e.preventDefault(); scrollTo('packages'); }}>Packages</a>
            <a href="#terminal" onClick={(e) => { e.preventDefault(); scrollTo('terminal'); }}>Terminal</a>
            <button className="btn btn-ghost" style={{ padding: '0.55rem 1.1rem', fontSize: '0.92rem' }} onClick={() => scrollTo('packages')}>Apply</button>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="hero__grid">
            <div>
              <span className="kicker rise rise-1"><span className="dot" />Mentorship in stocks, options &amp; futures</span>
              <h1 className="rise rise-2">Trade with a <span className="accent">process</span>, not someone else&apos;s alerts.</h1>
              <p className="hero__sub rise rise-3">
                Education-first, 1-on-1 mentorship in decision making, risk management, and trade management.
                You learn to find and manage trades yourself, so you trade with independence instead of following alerts.
              </p>
              <div className="hero__cta rise rise-4">
                <button className="btn btn-emerald" onClick={() => scrollTo('packages')}>
                  Choose your package <ArrowRight size={18} />
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo('approach')}>See the approach</button>
              </div>
              <p className="hero__note rise rise-5">Stocks. Options. Futures. Risk-first, always.</p>
            </div>

            {/* Custom market visualization */}
            <div className="viz rise rise-3" aria-hidden="true">
              <div className="viz__head">
                <span>SPY &middot; 4H</span>
                <span className="viz__tag">illustrative</span>
              </div>
              <svg viewBox="0 0 520 300" role="img">
                <defs>
                  <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6EE7B7" />
                    <stop offset="100%" stopColor="#0D9488" />
                  </linearGradient>
                  <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.22)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                  </linearGradient>
                </defs>
                {/* gridlines */}
                {[60, 120, 180, 240].map((y) => (
                  <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}
                {/* area + line */}
                <path d="M10,250 L60,232 L105,256 L150,205 L195,224 L240,176 L285,198 L330,150 L375,168 L420,116 L465,138 L510,86 L510,300 L10,300 Z" fill="url(#fill)" />
                <path className="viz__line" d="M10,250 L60,232 L105,256 L150,205 L195,224 L240,176 L285,198 L330,150 L375,168 L420,116 L465,138 L510,86"
                  fill="none" stroke="url(#stroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="510" cy="86" r="5" fill="#34D399" />
                <circle cx="510" cy="86" r="10" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </section>

        {/* Where the edge is */}
        <section className="section section--soft">
          <div className="wrap--narrow">
            <p className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '0.75rem' }}>The real edge</p>
            <h2 className="h2" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Most mentors sell products. Few teach skill.</h2>
            <p className="lead" style={{ textAlign: 'center', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
              The whole industry sells the same things. Almost none of it makes you a better trader.
            </p>
            <div className="split">
              <div className="col col--sell">
                <h3>Most mentors sell</h3>
                {SELL.map((item) => (
                  <div className="row" key={item}><X size={18} color="var(--red)" /><span>{item}</span></div>
                ))}
              </div>
              <div className="col col--teach">
                <h3>We actually teach</h3>
                {TEACH.map((item) => (
                  <div className="row" key={item}><Check size={18} color="var(--emerald-bright)" /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <p className="edge-line">That is where your <span className="accent">edge</span> is.</p>
          </div>
        </section>

        {/* Approach */}
        <section className="section" id="approach">
          <div className="wrap">
            <p className="eyebrow">The approach</p>
            <h2 className="h2" style={{ margin: '0.6rem 0 0.75rem' }}>The Alpha Trading Pros difference</h2>
            <p className="lead" style={{ maxWidth: '42rem' }}>
              We do not hand you tickers. We build the judgment that lets you find and manage trades on your own.
            </p>

            {/* Two pillars */}
            <div className="pillars">
              <div className="pillar">
                <Brain className="icon" size={30} />
                <h3>We teach you how to think, not what to buy</h3>
                <p>Most communities create dependency: buy this, watch that, here is today&apos;s alert. We do the opposite and teach you to spot opportunities yourself. The goal is independence.</p>
                <div className="qa">
                  <div className="qa-item"><span className="x">they say</span> "Buy this. Here is the alert."</div>
                  <div className="qa-item"><span className="c">we teach</span> "Here is how to find it yourself."</div>
                </div>
              </div>
              <div className="pillar">
                <ShieldCheck className="icon" size={30} />
                <h3>Risk management comes before profit</h3>
                <p>Most traders ask how much they can make. We start with how much they can lose. Position sizing, stop placement, scaling out, and journaling come before any advanced setup.</p>
                <div className="qa">
                  <div className="qa-item"><span className="x">they ask</span> "How much can I make?"</div>
                  <div className="qa-item"><span className="c">we ask</span> "How much can I lose?"</div>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="curriculum">
              <div className="curriculum__head">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2vw,1.7rem)' }}>A structured path, not random alerts</h3>
                <span className="mono" style={{ color: 'var(--text-faint)', fontSize: '0.82rem' }}>4-part progression</span>
              </div>
              <div className="days">
                {DAYS.map((d) => (
                  <div className="day" key={d.n}>
                    <div className="day__n mono">{d.n}</div>
                    <div className="day__t">{d.t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Three principles */}
            <div className="principles">
              {PRINCIPLES.map((p) => (
                <div className="principle" key={p.title}>
                  <p.icon className="icon" size={24} />
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div style={{ marginTop: 'clamp(3rem,6vw,4.5rem)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.25rem)', marginBottom: '0.5rem' }}>You leave with a repeatable process</h3>
              <p className="lead" style={{ maxWidth: '38rem' }}>Four things you own for life, long after the sessions end.</p>
              <div className="deliverables">
                {DELIVERABLES.map((d) => (
                  <div className="deliverable" key={d.title}>
                    <d.icon className="icon" size={26} />
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mentor */}
        <section className="section section--soft">
          <div className="wrap mentor">
            <div className="mentor__card">
              <img src="/Alpha Trading.png" alt="Alpha Trading Pros" />
              <div className="mentor__meta">MBA &middot; Options since 2019 &middot; Now trading futures</div>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Your mentor</p>
              <p className="body">
                I have lived the hard parts of this business: <strong>blown accounts, overtrading, FOMO, and sizing mistakes.</strong>
                {' '}That is exactly why my mentorship leads with discipline, risk, and a repeatable process instead of hype.
                My job is to make you independent, not dependent on me.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="section" id="packages">
          <div className="wrap">
            <p className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Mentorship</p>
            <h2 className="h2" style={{ textAlign: 'center', margin: '0.6rem 0 0.75rem' }}>Choose your package</h2>
            <p className="lead" style={{ textAlign: 'center', maxWidth: '34rem', margin: '0 auto' }}>
              Three levels of 1-on-1 mentorship. Pick the one that fits your goals.
            </p>

            <div className="packages">
              {PACKAGES.map((pkg) => (
                <div className={`pkg${pkg.featured ? ' pkg--featured' : ''}`} key={pkg.key}>
                  {pkg.featured && <div className="pkg__tag">Most chosen</div>}
                  <div className="pkg__name">{pkg.name}</div>
                  <div className="pkg__sub">{pkg.sub}</div>
                  <div className="pkg__price mono">{pkg.price}</div>
                  <div className="pkg__cadence">{pkg.cadence}</div>
                  <ul className="pkg__features">
                    {pkg.features.map((f) => (
                      <li key={f}><Check size={17} /><span>{f}</span></li>
                    ))}
                  </ul>
                  <div className="pkg__spacer" />
                  <button
                    className={`btn ${pkg.featured ? 'btn-emerald' : 'btn-ghost'} btn-block pkg__btn`}
                    onClick={() => checkout(pkg.key)}
                  >
                    {pkg.cta}
                  </button>
                </div>
              ))}
            </div>

            <p className="muted" style={{ textAlign: 'center', fontSize: '0.82rem', maxWidth: '46rem', margin: '2.5rem auto 0', lineHeight: 1.6 }}>
              Trading stocks, options, and futures involves substantial risk of loss and is not suitable for every investor.
              Mentorship and education are provided for informational purposes only and are not financial advice.
              Past performance is not indicative of future results.
            </p>
          </div>
        </section>

        {/* Terminal subscription (separate product) */}
        <section className="section section--soft" id="terminal">
          <div className="wrap">
            <div className="terminal">
              <div className="sigma" aria-hidden="true">
                <div className="sigma__top">
                  <div className="sigma__brand">
                    <span className="sigma__logo">&Sigma;</span>
                    <span><b>Sigma</b> Terminal<br /><i>Options Desk</i></span>
                  </div>
                  <span className="sigma__live"><span className="dot" />LIVE</span>
                </div>
                <div className="sigma__ticks">
                  <span>GOOGL <b className="up">+1.23%</b></span>
                  <span>AMZN <b className="down">-0.16%</b></span>
                  <span>MSFT <b className="down">-0.61%</b></span>
                  <span>NVDA <b className="up">+0.74%</b></span>
                </div>
                <div className="sigma__card">
                  <div className="sigma__cardtop">
                    <span className="sigma__sym">GOOGL <em className="badge-bear">BEARISH</em></span>
                    <span className="badge-open">OPEN</span>
                  </div>
                  <div className="sigma__price">$349.49 <span className="up">+1.23%</span><span className="sigma__u">UNDERLYING</span></div>
                  <div className="sigma__tp">
                    <div><span className="lbl">TAKE PROFIT</span><span className="up">$341.72 &rarr; $320.00</span> <span className="prem">+44% prem</span></div>
                    <div><span className="lbl">STOP</span><span className="down">$400.00</span> <span className="prem">-24% prem</span></div>
                  </div>
                  <div className="sigma__contract"><span>347.5P 07-02 paid $7.41 &rarr; now $6.63</span><b className="down">-10.5% -$78 &middot; 1 ct</b></div>
                  <div className="sigma__conf">
                    <div className="sigma__conflabel"><span>AI CONFIDENCE</span><span>65%</span></div>
                    <div className="sigma__bar"><i style={{ width: '65%' }} /></div>
                  </div>
                  <div className="sigma__why"><b>WHY</b> [PAPER] 31 put flow alerts totaling $4.9M premium. Support stack 342/320.</div>
                </div>
                <div className="sigma__nav">
                  <span className="on">Signals</span><span>Screener</span><span>Agents</span><span>Flow</span><span>Portal</span>
                </div>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Software, no mentorship required</p>
                <h2 className="h2" style={{ marginBottom: '0.75rem' }}>The Sigma Terminal</h2>
                <p className="lead" style={{ maxWidth: '34rem', marginBottom: '1.5rem' }}>
                  An options day trading desk with built-in AI automation. Want it on its own? Get it as a standalone monthly subscription, completely separate from mentorship.
                </p>
                <ul className="terminal__features">
                  {TERMINAL_FEATURES.map((f) => (
                    <li key={f.label}><f.icon size={18} /><span>{f.label}</span></li>
                  ))}
                </ul>
                <div className="sigma__pricing">
                  <span className="sigma__price-big mono">$395 <i>/month</i></span>
                  <button className="btn btn-emerald" onClick={() => checkout('terminal')}>
                    Start the terminal <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final">
          <div className="wrap">
            <h2>Build skill that outlasts any alert.</h2>
            <p>Pick the mentorship level that fits your goals and start trading a process you actually understand.</p>
            <button className="btn btn-emerald" onClick={() => scrollTo('packages')}>
              Choose your package <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <div>
            <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top'); }}>
              <img src="/Alpha Trading.png" alt="Alpha Trading Pros" style={{ width: '1.75rem', height: '1.75rem' }} />
              <span>Alpha Trading Pros</span>
            </a>
            <p className="muted" style={{ fontSize: '0.85rem', marginTop: '0.75rem' }}>
              Questions? <a className="mail" href="mailto:info@alphadatacapital.com?subject=Mentorship Inquiry">info@alphadatacapital.com</a>
            </p>
            <p className="muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>&copy; 2026 Alpha Trading Pros</p>
          </div>
          <p className="footer__dis">
            Trading stocks, options, and futures involves substantial risk of loss and is not suitable for every investor.
            Mentorship and education are provided for informational purposes only and are not financial advice.
            Past performance is not indicative of future results.
          </p>
        </div>
      </footer>

      {/* Floating contact */}
      <a className="fab" href="mailto:info@alphadatacapital.com?subject=Mentorship Inquiry" aria-label="Email Alpha Trading Pros">
        <MessageCircle size={22} />
      </a>
    </>
  );
};

export default AlphaTradingLanding;
