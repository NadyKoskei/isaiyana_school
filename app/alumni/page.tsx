import Link from 'next/link';

const alumniStories = [
  { title: 'Leadership in Action', description: 'Our alumni lead in business, service, and innovation around the world.' },
  { title: 'Global Impact', description: 'Graduates return with confidence and a strong sense of purpose.' },
  { title: 'Community Connections', description: 'The alumni network stays close through mentoring, events, and reunions.' },
];

export default function AlumniPage() {
  return (
    <main>
      <section>
        <h1 className="section-heading">Alumni</h1>
        <p className="section-copy">
          Discover the stories of Isaiyana School alumni and how our graduates continue to make a difference.
        </p>
        <div className="card-grid">
          {alumniStories.map((story) => (
            <article className="card" key={story.title}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
        <div className="section-image">Add your alumni image to public/images/alumni.jpg</div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/">← Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
