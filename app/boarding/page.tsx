import Link from 'next/link';

const boardingHighlights = [
  { title: 'Welcoming Homes', description: 'Comfortable boarding houses designed to feel safe, nurturing, and community-focused.' },
  { title: 'Residential Life', description: 'Structured routines help students balance study, recreation, and personal growth.' },
  { title: 'Campus Traditions', description: 'Evenings, weekend activities, and cultural events bring boarding students together.' },
];

const dormCards = [
  { title: 'Boys Dorm', description: 'Quiet study spaces, shared common areas, and supportive house leadership.' },
  { title: 'Girls Dorm', description: 'Private sections, wellbeing routines, and a warm family atmosphere.' },
];

const scheduleSteps = [
  { time: '6:00', label: 'Wake-up & devotion' },
  { time: '7:00', label: 'Breakfast' },
  { time: '8:00', label: 'Academic lessons' },
  { time: '12:30', label: 'Lunch & rest' },
  { time: '14:30', label: 'Activities & clubs' },
  { time: '17:30', label: 'Study hall' },
  { time: '19:30', label: 'Dinner & reflection' },
  { time: '21:00', label: 'Lights out' },
];

const rules = [
  'Respect the community and school property.',
  'Attend daily devotionals and study sessions.',
  'Keep dormitories clean and tidy.',
  'Share in meal times, chores, and weekend routines.',
  'Follow house supervision and safety guidelines.',
];

export default function BoardingPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-carousel">
          <div className="hero-slide slide-1" />
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Boarding Life</span>
          <h1>Home, support, and growth in our boarding community.</h1>
          <p>The Isaiyana boarding experience is built around safety, structure, and strong relationships for learners away from home.</p>
          <div className="hero-actions">
            <Link href="#overview" className="btn solid">Explore Overview</Link>
            <Link href="#fees" className="btn outline">Fees & Admission</Link>
          </div>
        </div>
      </section>

      <section id="overview" className="section cream-bg">
        <div className="section-header">
          <p className="eyebrow">Boarding Overview</p>
          <h2>Welcome to a vibrant residential school community.</h2>
        </div>
        <div className="section-grid">
          {boardingHighlights.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section white-bg">
        <div className="section-header">
          <p className="eyebrow">Dorm Care</p>
          <h2>Dedicated boys and girls residential houses.</h2>
        </div>
        <div className="facility-grid">
          {dormCards.map((card) => (
            <article key={card.title} className="facility-card ict">
              <div className="facility-overlay">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section maroon-bg">
        <div className="section-header white-text">
          <p className="eyebrow light">Daily Schedule</p>
          <h2>Balanced routines for learning and rest.</h2>
        </div>
        <div className="timeline">
          {scheduleSteps.map((step) => (
            <div key={step.time} className="timeline-step">
              <span>{step.time}</span>
              <div>
                <h4>{step.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cream-bg">
        <div className="section-header">
          <p className="eyebrow">Rules</p>
          <h2>A respectful community with clear expectations.</h2>
        </div>
        <ul className="admission-list">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <div className="cta-stack">
          <Link href="#fees" className="btn solid">View Boarding Fees</Link>
          <a href="tel:+254700000000" className="btn outline">Call Boarding Office</a>
        </div>
      </section>
    </main>
  );
}
