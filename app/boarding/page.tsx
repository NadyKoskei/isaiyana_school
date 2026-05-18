import Link from 'next/link';

const boardingHighlights = [
  { title: 'Welcoming Homes', description: 'Comfortable boarding houses designed to feel safe, nurturing, and community-focused.' },
  { title: 'Residential Life', description: 'Structured routines help students balance study, recreation, and personal growth.' },
  { title: 'Campus Traditions', description: 'Evenings, weekend activities, and cultural events bring boarding students together.' },
];

export default function BoardingPage() {
  return (
    <main>
      <section>
        <h1 className="section-heading">Boarding Life</h1>
        <p className="section-copy">
          Experience the supportive boarding community where students thrive academically and socially.
        </p>
        <div className="card-grid">
          {boardingHighlights.map((highlight) => (
            <article className="card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
        <div className="section-image">Add your boarding life image to public/images/boarding.jpg</div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/">← Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
