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
    subtitle: 'Investment in knowledge pays the best interest',
    supportText: 'PP1 · PP2 · Grades 1–6 · Junior School Grades 7–9 | Boarding & Day',
    images: ['is.hero1.jpeg', '4Untitled.jpeg', '5Untitled.jpeg', '8Untitled.jpeg'],
  },
];

const statsData = [
  { stat: 'Est. 2008', description: '16+ Years of Excellence' },
  { stat: '20 Teachers', description: '9 Male · 11 Female' },
  { stat: 'PP1 – Grade 9', description: 'Full CBE Curriculum' },
  { stat: 'Boarding & Day', description: 'Boys & Girls Sections' },
];

const academicsTabs = [
  {
    label: 'Pre-Primary (PP1–PP2)',
    title: 'Pre-Primary School',
    badge: 'PP1 & PP2',
    description:
      'Early childhood development — language, numeracy, social skills, and creative play through a Christian foundation.',
  },
  {
    label: 'Primary (Grade 1–6)',
    title: 'Primary School',
    badge: 'Grade 1 – Grade 6',
    description:
      'Core CBE learning areas building literacy, numeracy, science, social studies, and practical life skills.',
  },
  {
    label: 'Junior School (Grade 7–9)',
    title: 'Junior School',
    badge: 'Grade 7 – Grade 9',
    description:
      'Advanced CBE subjects with pre-technical studies, integrated science, and preparation for Senior School.',
  },
];

const learningAreas = [
  { label: 'English Activities' },
  { label: 'Kiswahili Activities' },
  { label: 'Mathematics Activities' },
  { label: 'Science & Technology' },
  { label: 'Social Studies' },
  { label: 'Christian Religious Education (CRE)' },
  { label: 'Creative Arts & Sports' },
  { label: 'Agriculture & Nutrition' },
  { label: 'Integrated Science', style: 'gold', note: '(Jr)' },
  { label: 'Pre-Technical Studies', style: 'gold', note: '(Jr)' },
  { label: 'ICT — Special Programme', style: 'maroon', icon: '★' },
];

const approachFeatures = [
  {
    title: 'Activity-Based Learning',
    description: 'Hands-on tasks and real-world exercises over rote memorisation',
  },
  {
    title: 'Learner-Centred',
    description: "Every child's pace, strengths, and learning style are respected",
  },
  {
    title: 'CBE Framework',
    description: "Fully aligned with Kenya's Competency-Based Education curriculum",
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAcademicTab, setActiveAcademicTab] = useState(0);
  const [whyIndex, setWhyIndex] = useState(0);
  const [approachPhotoIndex, setApproachPhotoIndex] = useState(0);
  const visibleWhy = 4;
  const whyCardsCount = 6;
  const whyPages = Math.max(1, Math.ceil(whyCardsCount / visibleWhy));
  const approachPhotos = ['7Untitled.jpeg', '2Untitled.jpeg', '3Untitled.jpeg'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance the hero image carousel (cycles the images array)
  useEffect(() => {
    const imgs = heroSlides[0]?.images || [];
    if (!imgs.length) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imgs.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!approachPhotos.length) return;
    const id = setInterval(() => {
      setApproachPhotoIndex((prev) => (prev + 1) % approachPhotos.length);
    }, 4000);
    return () => clearInterval(id);
  }, [approachPhotos.length]);

  const nextSlide = () => {
    const imgs = heroSlides[0].images || [];
    setCurrentSlide((prev) => (prev + 1) % imgs.length);
  };

  const prevSlide = () => {
    const imgs = heroSlides[0].images || [];
    setCurrentSlide((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = heroSlides[0];

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
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Carousel Background */}
        <div className="hero-carousel-container">
          <div className="hero-carousel">
            {(slide.images || []).map((img, idx) => (
              <div
                key={`${slide.id}-${idx}`}
                className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
                style={{
                  opacity: idx === currentSlide ? 1 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                  backgroundImage: `url('/images/${img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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
          </div>

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
            {(slide.images || []).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="slide-counter">{currentSlide + 1} / {((slide.images || []).length)}</span>
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
                <h3 className="teacher-title">First & Second name, the school director </h3>
                <p className="teacher-quote ">
                  “At Isaiyana Elite, we believe every child carries a God-given potential that is waiting to be unlocked. Our role as educators is to create the environment — one that is safe, loving, disciplined, and academically rigorous — where that potential can flourish.”
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
          <div className="why-carousel-viewport" style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              className="why-carousel-track"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  transition: 'transform 0.45s ease',
                  transform: `translateX(-${whyIndex * 100}%)`,
                  // width: `${whyPages * 100}%`,
                }}
            >
              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">✝</div>
                <h3>Christ-Centred</h3>
                <p>Faith is woven into every aspect of school life — from morning devotions to curriculum, we nurture students who are grounded in Christian values.</p>
              </article>

              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">📚</div>
                <h3>CBC Curriculum</h3>
                <p>We fully implement the Competency-Based Education (CBE) framework, focusing on practical skills, critical thinking, and real-world application.</p>
              </article>

              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">🏠</div>
                <h3>Safe Boarding</h3>
                <p>Separate, well-supervised boarding sections for boys and girls provide a safe, structured home-away-from-home environment for learners.</p>
              </article>

              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">👥</div>
                <h3>Qualified Teachers</h3>
                <p>Our team of 20 dedicated teachers bring passion, experience, and a commitment to seeing every child reach their full potential.</p>
              </article>

              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">🔬</div>
                <h3>Modern Facilities</h3>
                <p>From a well-equipped computer lab and science lab to a spacious playground and dining room, our facilities support holistic learning.</p>
              </article>

              <article className="why-card" style={{ flex: `0 0 ${100 / visibleWhy}%` }}>
                <div className="why-card-icon">🌱</div>
                <h3>Holistic Development</h3>
                <p>Beyond academics, we invest in sports, music, scouting, ICT, and Christian Union to ensure every student grows in body, mind, and spirit.</p>
              </article>
            </div>

            <div className="why-carousel-controls" style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.5rem' }}>
              <button
                aria-label="Previous why cards"
                className="carousel-arrow"
                onClick={() => setWhyIndex((p) => (p - 1 + whyPages) % whyPages)}
              >
                &#8249;
              </button>
              <button
                aria-label="Next why cards"
                className="carousel-arrow"
                onClick={() => setWhyIndex((p) => (p + 1) % whyPages)}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>

        <div className="why-cta" style={{ textAlign: 'center', marginTop: '1.25rem' }}>
          <button className="btn gold-outline" style={{ minWidth: 220 }}>Ready to enrol? Apply Today</button>
        </div>
      </section>


      <section id="academics" className="section academics-section">
        <div className="section-header">
          <p className="eyebrow">ACADEMICS</p>
          <h2>Built on the Competency-Based Education framework</h2>

        </div>

        <div className="academics-tabs">
          <div className="tab-buttons">
            {academicsTabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                className={`tab-button ${activeAcademicTab === index ? 'active' : ''}`}
                onClick={() => setActiveAcademicTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            <div className="tab-content">
              <div className="tab-heading-row">
                <div>
                  <p className="eyebrow">{academicsTabs[activeAcademicTab].badge}</p>
                  <h3>{academicsTabs[activeAcademicTab].title}</h3>
                </div>
              </div>
              <p className="tab-copy">{academicsTabs[activeAcademicTab].description}</p>
            </div>
          </div>
        </div>

        <div className="pill-grid">
          {learningAreas.map((area) => (
            <span
              key={area.label}
              className={`pill ${area.style === 'gold' ? 'gold' : area.style === 'maroon' ? 'maroon' : ''}`}
            >
              {area.icon ? `${area.icon} ` : ''}
              {area.label}
              {area.note ? ` ${area.note}` : ''}
            </span>
          ))}
        </div>

        <div className="academics-approach">
          <div className="approach-media">
            <div
              className="approach-photo-card"
              style={{
                backgroundImage: `url('/images/${approachPhotos[approachPhotoIndex]}')`,
              }}
            >
              <div className="approach-photo-label">
                <span>School photo {approachPhotoIndex + 1} of {approachPhotos.length}</span>
              </div>

              <div className="approach-photo-controls">
                <button
                  type="button"
                  aria-label="Previous teaching photo"
                  className="approach-arrow"
                  onClick={() => setApproachPhotoIndex((prev) => (prev - 1 + approachPhotos.length) % approachPhotos.length)}
                >
                  &#8249;
                </button>

                <div className="approach-dots">
                  {approachPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`approach-dot ${idx === approachPhotoIndex ? 'active' : ''}`}
                      aria-label={`Photo ${idx + 1}`}
                      onClick={() => setApproachPhotoIndex(idx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next teaching photo"
                  className="approach-arrow"
                  onClick={() => setApproachPhotoIndex((prev) => (prev + 1) % approachPhotos.length)}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>

          <div className="approach-copy">
            <div className="feature-grid">
              {approachFeatures.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon">📘</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="facilities" className="section facilities-section">
        <div className="section-header">
          <p className="eyebrow">OUR FACILITIES</p>
          <h2>Built for Learning, Built for Life</h2>
          <p className="section-subtitle">
            We have invested in a learning environment that supports every dimension of a child's growth — academic, physical, social, and spiritual.
          </p>
        </div>

        <div className="facility-grid">
          <article className="facility-card classroom">
            <div className="facility-card-content">
              <h3>Classrooms</h3>
              <p className="facility-tagline">Spacious & CBE-ready</p>
            </div>
            <div className="facility-overlay">
              <p>Spacious, well-lit classrooms equipped to support interactive CBE learning for all levels — from PP1 through to Grade 9.</p>
            </div>
          </article>

          <article className="facility-card lab">
            <div className="facility-card-content">
              <h3>Computer Lab</h3>
              <p className="facility-tagline">Hands-on digital skills</p>
            </div>
            <div className="facility-overlay">
              <p>A dedicated ICT lab where students gain hands-on digital skills in line with CBC requirements.</p>
            </div>
          </article>

          <article className="facility-card ict">
            <div className="facility-card-content">
              <h3>Science Lab</h3>
              <p className="facility-tagline">Practical experiments</p>
            </div>
            <div className="facility-overlay">
              <p>Equipped science laboratory for practical experiments supporting integrated science and technology learning areas.</p>
            </div>
          </article>

          <article className="facility-card dining">
            <div className="facility-card-content">
              <h3>Dining Room</h3>
              <p className="facility-tagline">Nutritious meals daily</p>
            </div>
            <div className="facility-overlay">
              <p>A communal dining space serving nutritious, well-balanced meals to all boarding students — breakfast, lunch, and supper.</p>
            </div>
          </article>

          <article className="facility-card playground">
            <div className="facility-card-content">
              <h3>Playground</h3>
              <p className="facility-tagline">Sports & recreation</p>
            </div>
            <div className="facility-overlay">
              <p>An open playground and sports grounds for physical education, games, and recreational activities for all students.</p>
            </div>
          </article>

          <article className="facility-card sickbay">
            <div className="facility-card-content">
              <h3>Sick Bay / Rest Room</h3>
              <p className="facility-tagline">Student care & rest</p>
            </div>
            <div className="facility-overlay">
              <p>A dedicated rest facility for unwell students, ensuring their comfort and care while at school.</p>
            </div>
          </article>
        </div>

        <div className="facility-footer">
          <p className="facility-note">Placeholder images shown — real facility photos coming soon.</p>
          <button className="btn gold-outline facility-action">Book a School Tou</button>
        </div>
      </section>
      </main>


    </>
  );
}
