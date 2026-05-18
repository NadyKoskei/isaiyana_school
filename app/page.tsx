import Link from 'next/link';

const sectionData = [
  { id: 'about', title: 'About Isaiyana', copy: 'We are a forward-thinking school that nurtures curious minds, creative leadership, and academic excellence through holistic learning experiences.' },
  { id: 'mission', title: 'Our Mission', copy: 'Empower every student to flourish with strong values, innovative skills, and a lifelong love of learning.' },
  { id: 'programs', title: 'Programs', copy: 'From early learning to leadership academies, our programs are designed to inspire success across academics, arts, and athletics.' },
  { id: 'curriculum', title: 'Curriculum', copy: 'A balanced curriculum mixing STEM, humanities, languages, and social responsibility prepares students for tomorrow’s challenges.' },
  { id: 'facilities', title: 'Facilities', copy: 'Modern classrooms, a creative arts center, science labs, sports fields, and collaborative outdoor spaces support every student’s growth.' },
  { id: 'faculty', title: 'Faculty', copy: 'Experienced educators and mentors deliver personalized guidance and foster strong relationships with each learner.' },
  { id: 'events', title: 'Events', copy: 'Community events, workshops, and cultural showcases connect families, students, and staff across the school year.' },
  { id: 'testimonials', title: 'Testimonials', copy: 'Parents and alumni describe a welcoming community, strong academic results, and a school culture that encourages confidence.' },
  { id: 'admissions', title: 'Admissions', copy: 'Open enrollment with tailored tours, application support, and guidance for every family’s school journey.' },
  { id: 'contact', title: 'Contact', copy: 'Get in touch to schedule a visit, ask about enrollment, or learn more about our school community.' },
];

export default function HomePage() {
  return (
    <main>
      <header className="header">
        <nav>
          <div className="brand">Isaiyana School</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#facilities">Facilities</a>
            <a href="#contact">Contact</a>
            <Link href="/alumni">Alumni</Link>
            <Link href="/boarding">Boarding Life</Link>
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <div>
            <h1 className="section-heading">Welcome to Isaiyana School</h1>
            <p className="section-copy">
              A vibrant school community where every child develops confidence, curiosity, and character.
            </p>
            <div className="cta-grid">
              <Link href="/alumni" className="card">
                <h3>Meet Alumni</h3>
                <p>Read about our alumni community and their achievements.</p>
              </Link>
              <Link href="/boarding" className="card">
                <h3>Boarding Life</h3>
                <p>Explore the residential experience for boarding students.</p>
              </Link>
            </div>
          </div>
          <div className="section-image">Add your hero image to public/images/hero.jpg</div>
        </div>
      </section>

      {sectionData.map((section) => (
        <section id={section.id} key={section.id}>
          <h2 className="section-heading">{section.title}</h2>
          <p className="section-copy">{section.copy}</p>
          <div className="section-image">Replace this placeholder with public/images/{section.id}.jpg</div>
        </section>
      ))}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Isaiyana School. Designed as a clean single page website.</p>
      </footer>
    </main>
  );
}
