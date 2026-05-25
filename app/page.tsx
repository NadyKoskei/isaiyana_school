"use client";

import { useEffect, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Academics' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#boarding', label: 'Boarding Life' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#alumni', label: 'Alumni' },
  { href: '#contact', label: 'Contact' },
];

const heroSlides = [
  {
    id: 1,
    eyebrow: 'EST. 2008 · KERICHO COUNTY, KENYA',
    tagline: '"Strive To Excel"',
    subtitle: 'A Christ-Centred Boarding & Day School — Nurturing Academic Excellence and Godly Character Since 2008',
    supportText: 'PP1 · PP2 · Grades 1–6 · Junior School Grades 7–9 | Boarding & Day',
  },
  {
    id: 2,
    eyebrow: 'FAITH & VALUES',
    tagline: '"Excellence Through Character"',
    subtitle: 'Building confident young leaders rooted in Christian values and academic excellence.',
    supportText: 'Daily worship · Scripture integration · Moral compass',
  },
  {
    id: 3,
    eyebrow: 'MODERN LEARNING',
    tagline: '"Competency-Based Education"',
    subtitle: 'A fresh CBC curriculum designed for real-world readiness and lifelong learning.',
    supportText: 'Science labs · ICT hubs · Creative studios · Modern facilities',
  },
  {
    id: 4,
    eyebrow: 'HOLISTIC GROWTH',
    tagline: '"Nurturing Every Child"',
    subtitle: 'Balanced academics, spirituality, arts, and wellbeing prepare students for life beyond school.',
    supportText: 'Boys & Girls sections · Safe boarding · Experienced educators',
  },
];

const statsData = [
  { stat: 'Est. 2008', description: '16+ Years of Excellence' },
  { stat: '20 Teachers', description: '9 Male · 11 Female' },
  { stat: 'PP1 – Grade 9', description: 'Full CBE Curriculum' },
  { stat: 'Boarding & Day', description: 'Boys & Girls Sections' },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = heroSlides[currentSlide];

  return (
    <>
      {/* Navigation */}
      <header className={`site-header ${scrolled ? 'solid' : ''}`}>
        <div className="nav-wrap">
          <div className="brand-section">
            <div className="ie-logo">IE</div>
            <span className="brand">Isaiyana Elite Primary & Junior School</span>
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <button className="btn pill apply-btn">Apply Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Carousel Background */}
        <div className="hero-carousel-container">
          <div className="hero-carousel">
            {heroSlides.map((s, idx) => (
              <div
                key={s.id}
                className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
                style={{
                  opacity: idx === currentSlide ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                }}
              />
            ))}
          </div>
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1 className="hero-title">Isaiyana Elite Primary & Junior School</h1>
          <div className="gold-rule" />
          <p className="tagline">{slide.tagline}</p>
          <p className="subtitle">{slide.subtitle}</p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn solid btn-large">Apply for Admission</button>
            <button className="btn outline btn-large">Explore the School</button>
          </div>

          {/* Support Text */}
          <p className="support-text">{slide.supportText}</p>
        </div>

        {/* Carousel Controls - Arrows */}
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {/* Carousel Dots & Counter */}
        <div className="carousel-controls">
          <div className="carousel-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="slide-counter">{currentSlide + 1} / {heroSlides.length}</span>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        {statsData.map((item, idx) => (
          <div key={idx} className="stat-column">
            <div className="stat-main">{item.stat}</div>
            <div className="stat-description">{item.description}</div>
          </div>
        ))}
      </div>

      <main>
        <section id="about" className="section white-bg">
          <div className="section-header">
            <p className="eyebrow">OUR STORY</p>
            <h2>Rooted in Faith, Driven by Excellence</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Isaiyana Elite Primary & Junior School was established in 2008 with a clear purpose: to provide high-quality, Christ-centred education to the children of Kericho County and beyond. Located 1km from Chebwagan Junction along the Litein-Sotik Highway in Bureti Sub-County, the school has grown over 16 years into a trusted institution serving families from across the region.
              </p>
              <p>
                From its founding, Isaiyana Elite has held firm to the belief that true education goes beyond academics — it shapes character, instils discipline, and produces God-fearing young leaders ready to serve their communities and country.
              </p>

              <div className="about-cards">
                <div className="info-card vision-card">
                  <div className="card-icon">V</div>
                  <h3>Vision</h3>
                  <p>To be a premier Christian-centred, competitive, and outstanding learning institution.</p>
                </div>
                <div className="info-card mission-card">
                  <div className="card-icon">M</div>
                  <h3>Mission</h3>
                  <p>To provide high-quality, Christ-centred education from early childhood to junior school — equipping learners with knowledge, good discipline, and moral uprightness; nurturing God-fearing individuals who respect the Kenyan Constitution and contribute positively to society.</p>
                </div>
              </div>
            </div>

            <div className="teacher-panel about-teacher-card">
              <div className="teacher-photo">Principal Photo</div>
              <div className="teacher-copy">
                <p className="eyebrow">Mr. Chepkwony Victor</p>
                <h3 className="teacher-title">Head Teacher, Isaiyana Elite Primary & Junior School</h3>
                <p className="teacher-quote">
                  “At Isaiyana Elite, we believe every child carries a God-given potential that is waiting to be unlocked. Our role as educators is to create the environment — one that is safe, loving, disciplined, and academically rigorous — where that potential can flourish. We are committed to walking this journey with every family that trusts us with their child.”
                </p>
              </div>
            </div>
          </div>

          <div className="core-values about-values">
            <h3>Our Core Values</h3>
            <div className="value-grid five-values">
              <div className="value-card">
                <div className="value-icon">C</div>
                <h4>Christ-Centeredness</h4>
                <p>Integrating faith into every aspect of character development.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">A</div>
                <h4>Academic Excellence</h4>
                <p>Driving competitive, high-quality learning outcomes.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">D</div>
                <h4>Diligence</h4>
                <p>Modelling an industrious and hardworking spirit in staff and students.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">I</div>
                <h4>Integrity</h4>
                <p>Upholding ethical standards across the entire institution.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">H</div>
                <h4>Holistic Growth</h4>
                <p>Supporting the social, physical, and spiritual well-being of every child.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Why Choose Us Section */}
      <section className="section why-section">
        <div className="section-header">
          <p className="eyebrow">WHY FAMILIES CHOOSE US</p>
          <h2>Excellence You Can Trust</h2>
          <p className="section-subtitle">
            We combine academic rigour, Christian values, and a nurturing environment to raise well-rounded, God-fearing leaders.
          </p>
        </div>

        <div className="why-grid">
          <article className="why-card">
            <div className="why-card-icon">✝</div>
            <h3>Christ-Centred</h3>
            <p>Faith is woven into every aspect of school life — from morning devotions to curriculum, we nurture students who are grounded in Christian values.</p>
          </article>

          <article className="why-card">
            <div className="why-card-icon">📚</div>
            <h3>CBC Curriculum</h3>
            <p>We fully implement the Competency-Based Education (CBE) framework, focusing on practical skills, critical thinking, and real-world application.</p>
          </article>

          <article className="why-card">
            <div className="why-card-icon">🏠</div>
            <h3>Safe Boarding</h3>
            <p>Separate, well-supervised boarding sections for boys and girls provide a safe, structured home-away-from-home environment for learners.</p>
          </article>

          <article className="why-card">
            <div className="why-card-icon">👥</div>
            <h3>Qualified Teachers</h3>
            <p>Our team of 20 dedicated teachers bring passion, experience, and a commitment to seeing every child reach their full potential.</p>
          </article>

          <article className="why-card">
            <div className="why-card-icon">🔬</div>
            <h3>Modern Facilities</h3>
            <p>From a well-equipped computer lab and science lab to a spacious playground and dining room, our facilities support holistic learning.</p>
          </article>

          <article className="why-card">
            <div className="why-card-icon">🌱</div>
            <h3>Holistic Development</h3>
            <p>Beyond academics, we invest in sports, music, scouting, ICT, and Christian Union to ensure every student grows in body, mind, and spirit.</p>
          </article>
        </div>

        <div className="why-cta">
          <button className="btn gold-outline">Ready to enrol? Apply Today</button>
        </div>
      </section>
    </>
  );
}
