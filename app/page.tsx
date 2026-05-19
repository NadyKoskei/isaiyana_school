"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#academics', label: 'Academics' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#activities', label: 'Extracurriculars' },
  { href: '#contact', label: 'Contact' },
];

const heroStats = [
  { value: '1200+', label: 'Students' },
  { value: '40+', label: 'Clubs & Teams' },
  { value: '95%', label: 'Exam Pass Rate' },
  { value: '24/7', label: 'Boarding Care' },
];

const visionMission = [
  { title: 'Our Story', copy: 'Isaiyana School blends academic excellence with strong Christian values. We nurture every learner with caring teachers, modern facilities, and a community that celebrates growth.' },
  { title: 'Vision', copy: 'To form confident, capable young leaders who flourish academically, spiritually, and socially in a world full of possibility.' },
  { title: 'Mission', copy: 'To deliver a balanced education rooted in faith, creativity, community, and lifelong learning that empowers every child to succeed.' },
];

const values = ['Character', 'Compassion', 'Curiosity', 'Creativity', 'Community', 'Courage', 'Christ-Centered', 'Collaboration'];

const whyCards = [
  { title: 'Faith & Values', copy: 'Daily worship, scripture integration, and a strong moral compass guide every student’s journey.' },
  { title: 'CBC Curriculum', copy: 'A fresh, competency-based program that builds skills, confidence, and real-world readiness.' },
  { title: 'Boarding Care', copy: 'Safe, comfortable dorms and a nurturing home away from home for boys and girls.' },
  { title: 'Experienced Teachers', copy: 'Skilled educators who personalize learning and inspire every learner to grow.' },
  { title: 'Modern Facilities', copy: 'Science labs, ICT hubs, creative studios, and sports fields designed for active learning.' },
  { title: 'Holistic Growth', copy: 'Balanced academics, spirituality, arts, and wellbeing prepare students for life beyond school.' },
];

const academicStages = [
  {
    id: 'pp1-3',
    title: 'PP1–3',
    description: 'Foundational learning with phonics, numeracy, Christian values, world awareness and play-based creativity.',
    subjects: ['Literacy', 'Numeracy', 'Bible Study', 'Arts', 'PE', 'Nature Learning'],
  },
  {
    id: 'pp4-6',
    title: 'PP4–6',
    description: 'A confident foundation in literacy, science, social studies, and applied skills for growing learners.',
    subjects: ['English', 'Math', 'Science', 'Swahili', 'ICT', 'Music'],
  },
  {
    id: 'pp7-9',
    title: 'PP7–9',
    description: 'Structured CBC pathways that prepare students for national exams, leadership, and community impact.',
    subjects: ['Biology', 'Chemistry', 'Mathematics', 'English', 'ICT', 'CRE'],
  },
];

const facilities = [
  { title: 'Classrooms', copy: 'Bright, flexible spaces for collaborative learning and quiet study.', image: 'classroom' },
  { title: 'Science Lab', copy: 'Hands-on experiments with modern lab equipment and safety support.', image: 'lab' },
  { title: 'ICT Suite', copy: 'Connected learning with computers, coding, and digital tools for every child.', image: 'ict' },
  { title: 'Dining Hall', copy: 'Healthy meals served in a welcoming space for students and staff.', image: 'dining' },
  { title: 'Playground', copy: 'Safe outdoor play areas built for games, sports, and joyful movement.', image: 'playground' },
  { title: 'Medical Bay', copy: 'A calm care room with trained staff and emergency support available daily.', image: 'sickbay' },
];

const activities = [
  { title: 'Sports', copy: 'Football, netball, athletics and active games for skill, teamwork, and fun.' },
  { title: 'Christian Union', copy: 'A supportive fellowship for prayer, worship, and character formation.' },
  { title: 'Scouting', copy: 'Outdoor challenges, leadership drills, and service-minded adventure.' },
  { title: 'Music & Drama', copy: 'Creative expression through choir, drama, and stage performance.' },
  { title: 'ICT Club', copy: 'Coding, robotics, and digital creativity for future-ready learners.' },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStage, setActiveStage] = useState('pp1-3');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStage = academicStages.find((stage) => stage.id === activeStage) ?? academicStages[0];

  return (
    <main>
      <header className={`site-header ${scrolled ? 'solid' : ''}`}>
        <div className="nav-wrap">
          <Link href="#hero" className="brand">Isaiyana School</Link>
          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <Link href="/alumni">Alumni</Link>
            <Link href="/boarding">Boarding</Link>
          </nav>
          <a href="#admissions" className="btn pill">Apply Now</a>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-carousel">
          <div className="hero-slide slide-1" />
          <div className="hero-slide slide-2" />
          <div className="hero-slide slide-3" />
        </div>

        <div className="hero-copy">
          <span className="eyebrow">Founded on faith. Built for excellence.</span>
          <h1>Isaiyana School</h1>
          <p>Where strong values, CBC learning, and boarding life come together to prepare every child for academic success and servant leadership.</p>
          <div className="hero-actions">
            <a href="#admissions" className="btn solid">Apply Now</a>
            <a href="#about" className="btn outline">Book a Tour</a>
          </div>
        </div>

        <div className="hero-stats">
          {heroStats.map((item) => (
            <div key={item.label} className="stat-pill">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section cream-bg">
        <div className="section-grid about-grid">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>Our story</h2>
            <p>Isaiyana School is a faith-centered community committed to nurturing joyful learners, strong character, and well-rounded achievement. Our curriculum, boarding life, and pastoral care work together to shape students who thrive in school and in life.</p>
          </div>

          <div className="card-grid">
            {visionMission.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="core-values">
          <h3>Core values</h3>
          <div className="value-grid">
            {values.map((value) => (
              <span key={value} className="value-pill">{value}</span>
            ))}
          </div>
        </div>

        <div className="teacher-card">
          <div className="teacher-photo">Head Teacher</div>
          <div>
            <p className="eyebrow">Head Teacher's message</p>
            <h3>“Education is the gift of a confident future.”</h3>
            <p>At Isaiyana, every child is seen, encouraged, and prepared with love. We build character alongside knowledge, and we celebrate each learner’s growth.</p>
          </div>
        </div>
      </section>

      <section id="why" className="section maroon-bg">
        <div className="section-header white-text">
          <p className="eyebrow light">Why Choose Us</p>
          <h2>Learning built on faith, CBC, and boarding excellence.</h2>
        </div>
        <div className="why-grid">
          {whyCards.map((item) => (
            <article key={item.title} className="why-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="academics" className="section white-bg">
        <div className="section-header">
          <p className="eyebrow">Academics</p>
          <h2>Structured stages for every learner.</h2>
        </div>

        <div className="tab-panel">
          <div className="tab-buttons">
            {academicStages.map((stage) => (
              <button
                key={stage.id}
                type="button"
                className={activeStage === stage.id ? 'tab-button active' : 'tab-button'}
                onClick={() => setActiveStage(stage.id)}
              >
                {stage.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <p>{currentStage.description}</p>
            <div className="pill-grid">
              {currentStage.subjects.map((subject) => (
                <span key={subject} className="pill-badge">{subject}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="approach-band">
          <div>
            <span className="eyebrow">Teaching approach</span>
            <h3>Active CBC learning with values, creativity, and practical skills.</h3>
          </div>
          <p>Teachers guide every child through inquiry, teamwork, faith-based reflection, and real-world application.</p>
        </div>
      </section>

      <section id="facilities" className="section cream-bg">
        <div className="section-header">
          <p className="eyebrow">Facilities</p>
          <h2>Spaces designed for learning, care, and growth.</h2>
        </div>
        <div className="facility-grid">
          {facilities.map((item) => (
            <article key={item.title} className={`facility-card ${item.image}`}>
              <div className="facility-overlay">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="admissions" className="section maroon-split">
        <div className="split-panel left-panel">
          <p className="eyebrow light">Admissions</p>
          <h2>Join the Isaiyana family.</h2>
          <ul className="admission-list">
            <li>Completed application form</li>
            <li>Birth certificate copy</li>
            <li>Medical clearance and immunization record</li>
            <li>Previous school report (where available)</li>
            <li>Boarding agreement for residential learners</li>
          </ul>
          <p className="note">Fees are published annually. Contact admissions for package details, sibling discounts, and payment plans.</p>
          <div className="cta-stack">
            <a href="tel:+254700000000" className="btn solid">Call Admissions</a>
            <a href="#" className="btn outline">Download Requirements</a>
          </div>
        </div>

        <div className="split-panel right-panel white-bg">
          <div className="timeline">
            <div className="timeline-step">
              <span>1</span>
              <div>
                <h4>Enquire</h4>
                <p>Reach out online or by phone to start your application.</p>
              </div>
            </div>
            <div className="timeline-step">
              <span>2</span>
              <div>
                <h4>Visit</h4>
                <p>See our campus on a guided school tour.</p>
              </div>
            </div>
            <div className="timeline-step">
              <span>3</span>
              <div>
                <h4>Apply</h4>
                <p>Submit forms, documents, and any boarding preferences.</p>
              </div>
            </div>
            <div className="timeline-step">
              <span>4</span>
              <div>
                <h4>Assessment</h4>
                <p>We invite learners to a friendly assessment and interview.</p>
              </div>
            </div>
            <div className="timeline-step">
              <span>5</span>
              <div>
                <h4>Welcome</h4>
                <p>Receive confirmation and start your school journey with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="section cream-bg">
        <div className="section-header">
          <p className="eyebrow">Extracurriculars</p>
          <h2>Clubs, sports and creative teams for every interest.</h2>
        </div>
        <div className="activity-grid">
          {activities.map((item) => (
            <article key={item.title} className="activity-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="photo-strip">
          <div className="photo-track">
            <div className="photo-cell">Sports</div>
            <div className="photo-cell">Choir</div>
            <div className="photo-cell">Drama</div>
            <div className="photo-cell">ICT</div>
            <div className="photo-cell">Scouts</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section white-bg contact-section">
        <div className="section-header">
          <p className="eyebrow">Contact Us</p>
          <h2>Visit, call, or send a message.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Get in touch</h3>
            <p>Isaiyana School, Njoro Road, Nakuru County</p>
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Email:</strong> admissions@isaiyana.ac.ke</p>
            <p><strong>Office hours:</strong> Mon–Fri 8:00–17:00</p>
            <div className="map-frame">
              <iframe
                title="Isaiyana School Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.454419013767!2d36.07581897421559!3d-0.28984583556650396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1734ee814415%3A0xe71f7a615f86cea4!2sNakuru!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
                loading="lazy"
              />
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jane@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn solid">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer maroon-bg">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Isaiyana School</div>
            <p>Committed to excellence, faith, and a joyful learning community.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+254 700 000 000</p>
            <p>admissions@isaiyana.ac.ke</p>
          </div>
          <div>
            <h4>Our mission</h4>
            <p>Train up a child in the way he should go — academic, spiritual and social growth for every learner.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Isaiyana School</p>
          <p>“Train up a child in the way he should go.” Proverbs 22:6</p>
        </div>
      </footer>
    </main>
  );
}
