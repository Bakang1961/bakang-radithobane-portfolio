import { BookOpen } from 'lucide-react';
import { techNotes } from './content/techNotes';

export default function TechNotesPage() {
  return (
    <main id="top" className="portfolio-shell notes-page">
      <a className="skip-link" href="#notes-content">Skip to content</a>

      <header className="site-header page-width">
        <p className="nav-status"><span>System analyst</span><strong>Full-stack developer</strong></p>
        <a className="brand-mark" href="/" aria-label="Bakang Radithobane home">Bakang</a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="/about">About</a>
          <a aria-current="page" href="/notes">Notes</a>
          <a href="/#work">Work</a>
          <a href="/#approach">Approach</a>
          <a href="/#experience">Experience</a>
          <a className="nav-contact" href="/#contact">Contact me</a>
        </nav>
      </header>

      <div id="notes-content">
        <section className="notes-section page-width section-block" aria-labelledby="tech-notes-title">
          <div className="notes-intro">
            <div>
              <p className="section-label">Tech notes</p>
              <h1 id="tech-notes-title">Findings worth carrying into the next build.</h1>
            </div>
            <p>Short, practical stories from systems analysis, software delivery and network operations. Written for people who prefer useful detail over recycled trends.</p>
          </div>

          <div className="notes-layout">
            {techNotes.map((note) => (
              <article key={note.slug} className={`note-card${note.featured ? ' note-card-featured' : ''}`}>
                <div className="note-cover">
                  <img src={note.image} alt={note.imageAlt} width="1800" height="1200" loading="lazy" />
                  <span className="note-status">{note.status}</span>
                  <a className="photo-credit" href={note.photoUrl} target="_blank" rel="noreferrer">Photo: {note.photoCredit}</a>
                </div>
                <div className="note-body">
                  <div className="note-meta"><span>{note.topic}</span><span>{note.readTime}</span></div>
                  <h2>{note.title}</h2>
                  <p>{note.excerpt}</p>
                  <div className="note-footer">
                    <span>{note.issue}</span>
                    <span className="note-mark" aria-hidden="true"><BookOpen /></span>
                  </div>
                </div>
              </article>
            ))}

            <aside className="newsletter-card" aria-labelledby="newsletter-title">
              <div className="newsletter-heading">
                <p className="section-label">The Bakang Brief</p>
                <span>Issue 00</span>
              </div>
              <div>
                <h2 id="newsletter-title">Useful systems notes, not inbox noise.</h2>
                <p>A considered monthly email about analysis, building software and keeping technology dependable.</p>
              </div>
              <form className="newsletter-form" aria-describedby="newsletter-status">
                <label htmlFor="newsletter-email">Email address</label>
                <div>
                  <input id="newsletter-email" type="email" placeholder="you@example.com" disabled />
                  <button type="button" disabled>Subscriptions open soon</button>
                </div>
                <p id="newsletter-status">Sign-up opens when the Cloudflare publishing setup is connected. No email is being collected yet.</p>
              </form>
              <ul aria-label="Newsletter topics">
                <li>Systems analysis</li><li>Full-stack delivery</li><li>Networks and VPNs</li>
              </ul>
            </aside>
          </div>
        </section>
      </div>

      <footer className="site-footer page-width">
        <p>© 2026 Bakang Radithobane</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
