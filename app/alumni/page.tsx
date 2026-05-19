import Link from 'next/link';

const graduateSpotlights = [
  { name: 'Faith Njeri', role: 'Education Advocate', story: 'From Isaiyana to a leadership role in youth education, Faith credits her confidence to the school’s nurturing environment.' },
  { name: 'Samuel Otieno', role: 'ICT Entrepreneur', story: 'A strong foundation in CBC and ICT helped Samuel launch a tech startup that supports local schools.' },
  { name: 'Mercy Wanjiru', role: 'Community Nurse', story: 'Mercy serves her community with compassion and care after graduating with strong values and academic discipline.' },
];

const galleryItems = ['Graduation', 'Reunion', 'Sports', 'Choir', 'Leadership'];

export default function AlumniPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-carousel">
          <div className="hero-slide slide-2" />
        </div>
        <div className="hero-copy">
          <span className="eyebrow">Alumni</span>
          <h1>Celebrating graduates who lead with purpose.</h1>
          <p>Our alumni community reflects Isaiyana’s values through service, innovation, and strong relationships around the world.</p>
          <div className="hero-actions">
            <Link href="#spotlight" className="btn solid">Meet Graduates</Link>
            <Link href="#connect" className="btn outline">Reconnect</Link>
          </div>
        </div>
      </section>

      <section id="spotlight" className="section white-bg">
        <div className="section-header">
          <p className="eyebrow">Graduate Spotlight</p>
          <h2>Stories of impact and purpose.</h2>
        </div>
        <div className="card-grid">
          {graduateSpotlights.map((graduate) => (
            <article className="info-card" key={graduate.name}>
              <h3>{graduate.name}</h3>
              <p className="eyebrow">{graduate.role}</p>
              <p>{graduate.story}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cream-bg" id="connect">
        <div className="section-header">
          <p className="eyebrow">Reconnect</p>
          <h2>Stay connected with the Isaiyana family.</h2>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="alumni-name">Name</label>
            <input id="alumni-name" type="text" placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="alumni-email">Email</label>
            <input id="alumni-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="alumni-message">Message</label>
            <textarea id="alumni-message" rows={5} placeholder="Share your update or join our next reunion." />
          </div>
          <button type="submit" className="btn solid">Send Reconnect</button>
        </form>
      </section>

      <section className="section maroon-bg">
        <div className="section-header white-text">
          <p className="eyebrow light">Gallery</p>
          <h2>Life at school, captured by our community.</h2>
        </div>
        <div className="photo-strip">
          <div className="photo-track">
            {galleryItems.concat(galleryItems).map((label, index) => (
              <div key={`${label}-${index}`} className="photo-cell">{label}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white-bg">
        <p><Link href="/">← Back to Home</Link></p>
      </section>
    </main>
  );
}
