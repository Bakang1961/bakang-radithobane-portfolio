import { ArrowLeft, ArrowUpRight, Music2 } from 'lucide-react';

const playlists = [
  {
    service: 'Spotify',
    title: 'What it feels like To be Saint_Sbakha',
    url: 'https://open.spotify.com/playlist/6wE3u7rIkYYRE35fUvmhgB',
    icon: '/spotify.svg',
  },
  {
    service: 'Deezer',
    title: 'Hit After Hit',
    url: 'https://www.deezer.com/en/playlist/14513549663',
    icon: '/deezer.svg',
  },
  {
    service: 'TIDAL',
    title: 'Timeless',
    url: 'https://tidal.com/playlist/089fdfb9-10a7-4b8a-a6ba-29234ea677e2',
    icon: '/tidal.svg',
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="portfolio-shell about-page">
      <a className="skip-link" href="#about-content">Skip to content</a>

      <header className="site-header page-width">
        <a className="brand-mark" href="/" aria-label="Bakang Radithobane home">Bakang Radithobane</a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a aria-current="page" href="/about">About</a>
          <a href="/#work">Work</a>
          <a href="/#approach">Approach</a>
          <a href="/#experience">Experience</a>
          <a className="nav-contact" href="/#contact">Contact me</a>
        </nav>
      </header>

      <div id="about-content">
        <section className="about-hero page-width" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <a className="back-link" href="/"><ArrowLeft aria-hidden="true" /> Back to portfolio</a>
            <p className="section-label">About me</p>
            <h1 id="about-title">Curious about how things work. Committed to making them work better.</h1>
            <p className="about-intro">
              I am Bakang Radithobane, a Botswana-based system analyst, full-stack developer,
              software developer and web developer.
            </p>
          </div>
          <div className="about-portrait">
            <img src="/bakang-radithobane.png" alt="Bakang Radithobane wearing a navy suit" width="1024" height="1536" />
          </div>
        </section>

        <section className="about-story page-width section-block" aria-labelledby="story-title">
          <div>
            <p className="section-label">How I work</p>
            <h2 id="story-title">Technology with an operational point of view.</h2>
          </div>
          <div className="about-story-copy">
            <p>
              My work brings together business analysis, software and web development, data,
              networks and delivery coordination. I look beyond the interface to understand the
              process, people, information and infrastructure that make a system useful.
            </p>
            <p>
              I enjoy turning operational challenges into practical solutions that are clear to
              use, dependable to run and grounded in what people actually need. That includes
              building full-stack applications, supporting databases, managing VPN access,
              diagnosing network problems and configuring reliable connectivity.
            </p>
            <p>
              Outside technology, music is how I reset, think and discover new perspectives.
              These are two playlists I return to often.
            </p>
          </div>
        </section>

        <section className="music-section" aria-labelledby="playlist-title">
          <div className="page-width music-layout">
            <div className="music-heading">
              <Music2 aria-hidden="true" />
              <p className="section-label">Listening lately</p>
              <h2 id="playlist-title">Favourite playlists.</h2>
            </div>
            <div className="playlist-panel">
              {playlists.map((playlist) => (
                <a className="playlist-link" href={playlist.url} key={playlist.service} target="_blank" rel="noreferrer">
                  <span className="playlist-service">
                    <img className="service-icon" src={playlist.icon} alt="" aria-hidden="true" />
                    {playlist.service}
                  </span>
                  <strong>{playlist.title}</strong>
                  <span className="playlist-action">Open playlist <ArrowUpRight aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer page-width"><p>© 2026 Bakang Radithobane</p><a href="#top">Back to top</a></footer>
    </main>
  );
}
