import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Link2,
  Mail,
  MapPin,
  ServerCog,
  Sparkles,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Rebate Management System',
    eyebrow: 'Finance workflow automation',
    description:
      'An end-to-end internal tool that replaced a manual financial process with structured data, validation and reliable reporting.',
    result: '≈10 hours saved each week',
    technologies: ['Java', 'SQL', 'Data validation'],
    tone: 'dark',
  },
  {
    number: '02',
    title: 'Multi-Branch Data Merge',
    eyebrow: 'Data quality automation',
    description:
      'A Python workflow for merging and reconciling product data across branch databases, with schema checks built into the process.',
    result: '3 branch data sources aligned',
    technologies: ['Python', 'Automation', 'Databases'],
    tone: 'purple',
  },
  {
    number: '03',
    title: 'Pharmaceutical Management System',
    eyebrow: 'Database-driven application',
    description:
      'A relational application designed to organise pharmaceutical records and make everyday information retrieval more dependable.',
    result: 'From records to a usable workflow',
    technologies: ['Java', 'SQL', 'Relational design'],
    tone: 'blue',
  },
];

const experience = [
  {
    period: '2025 — Present',
    role: 'Project Coordinator / IT Officer',
    company: 'E-Choppies · Choppies Botswana',
    description:
      'Coordinating technical delivery across teams while building automation, strengthening data quality and supporting integration testing and release readiness.',
  },
  {
    period: '2024 — 2025',
    role: 'IT Officer',
    company: 'Air Botswana',
    description:
      'Built an internal rebate system and supported the enterprise systems and infrastructure that kept day-to-day operations moving.',
  },
  {
    period: '2022',
    role: 'Junior Systems Analyst',
    company: 'Central Transport Organisation',
    description:
      'Analysed operational workflows, documented procedures and helped reshape reporting processes for better efficiency.',
  },
];

const skills = ['C#', '.NET', 'Java', 'Python', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'AWS'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-shell flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-heading text-sm font-extrabold uppercase tracking-[-0.04em]"
          aria-label="Bakang Radithobane — home"
        >
          BR<span className="text-accent-blue">.</span>
        </a>

        <nav aria-label="Primary navigation" className="flex items-center gap-3 sm:gap-8">
          <a className="nav-link hidden sm:inline-flex" href="#work">
            Work
          </a>
          <a className="nav-link hidden sm:inline-flex" href="#experience">
            Experience
          </a>
          <a className="contact-link" href="#contact">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </nav>
      </header>

      <section id="top" className="site-shell hero-grid relative pb-16 pt-8 sm:pb-24 sm:pt-14">
        <div className="hero-copy relative z-10 flex flex-col justify-center">
          <p className="eyebrow mb-7">
            <span className="status-dot" /> Software developer · IT professional
          </p>

          <h1 className="hero-title font-heading font-extrabold uppercase leading-[0.86] tracking-[-0.065em]">
            Systems that
            <span className="block text-accent-purple">work harder.</span>
            <span className="block">Experiences</span>
            <span className="block">that feel easy.</span>
          </h1>

          <div className="mt-10 grid max-w-[620px] gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-[500px] text-lg leading-8 text-muted-foreground">
              I&apos;m Bakang Radithobane, a Botswana-based software developer turning
              business friction into dependable, database-driven tools.
            </p>
            <a className="round-link" href="#work" aria-label="Explore selected work">
              <ArrowDownRight aria-hidden="true" className="size-6" />
            </a>
          </div>
        </div>

        <div className="portrait-wrap relative mt-12 min-h-[560px] sm:min-h-[700px] lg:mt-0">
          <div className="portrait-accent portrait-accent-purple" />
          <div className="portrait-accent portrait-accent-blue" />
          <div className="portrait-frame">
            <img
              src="/bakang-radithobane.png"
              alt="Bakang Radithobane in a navy suit"
              className="h-full w-full object-cover object-[50%_27%]"
            />
          </div>
          <div className="location-card">
            <MapPin aria-hidden="true" className="size-4 text-accent-blue" />
            <span>Gaborone, Botswana</span>
          </div>
          <div className="code-note" aria-hidden="true">
            <span>BUILDING AT THE INTERSECTION OF</span>
            <strong>BUSINESS × TECHNOLOGY</strong>
          </div>
        </div>
      </section>

      <div className="skills-band" aria-label="Technology stack">
        <div className="site-shell skills-track">
          {skills.map((skill, index) => (
            <div key={skill} className="flex items-center gap-5 sm:gap-8">
              <span>{skill}</span>
              {index < skills.length - 1 && (
                <Sparkles aria-hidden="true" className="size-4 text-accent-purple" />
              )}
            </div>
          ))}
        </div>
      </div>

      <section id="work" className="site-shell section-space scroll-mt-6">
        <div className="section-heading-grid">
          <p className="section-kicker">Selected work · 2022—2026</p>
          <div>
            <h2 className="section-title">Useful software starts with the real problem.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I build around the operational details: where data breaks, where time is lost,
              and where a clearer system can make the next decision easier.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card project-card-${project.tone}`}>
              <div className="project-copy">
                <div className="mb-12 flex items-start justify-between gap-4">
                  <span className="project-number">PROJECT / {project.number}</span>
                  <span className="project-index">0{index + 1}</span>
                </div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3 className="mt-4 font-heading text-[clamp(2rem,5vw,4.4rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.055em]">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-7 opacity-75 sm:text-lg sm:leading-8">
                  {project.description}
                </p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="project-badge">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-result" aria-label={`Result: ${project.result}`}>
                <div className="result-grid" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="relative z-10">
                  <span className="result-label">OUTCOME</span>
                  <p className="mt-3 font-heading text-2xl font-extrabold uppercase leading-tight tracking-[-0.04em] sm:text-3xl">
                    {project.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-space">
        <div className="site-shell">
          <div className="section-heading-grid">
            <p className="section-kicker">How I work</p>
            <div>
              <h2 className="section-title max-w-5xl">
                I understand the business process, then make the technology serve it.
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
                My background spans software development, enterprise IT and cross-team delivery.
                That means I can move from a messy operational need to a structured application—and
                communicate clearly with the people who will rely on it.
              </p>
            </div>
          </div>

          <div className="capability-grid mt-16">
            <article className="capability-card">
              <Code2 aria-hidden="true" className="capability-icon text-accent-purple" />
              <p className="capability-number">01</p>
              <h3>Application development</h3>
              <p>C#, Java and web fundamentals shaped around real business workflows.</p>
            </article>
            <article className="capability-card">
              <Database aria-hidden="true" className="capability-icon text-accent-blue" />
              <p className="capability-number">02</p>
              <h3>Data &amp; automation</h3>
              <p>SQL, Python and validation logic that reduce manual effort and improve trust.</p>
            </article>
            <article className="capability-card">
              <ServerCog aria-hidden="true" className="capability-icon" />
              <p className="capability-number">03</p>
              <h3>Systems delivery</h3>
              <p>Requirements, testing and technical coordination across operational teams.</p>
            </article>
            <article className="capability-card capability-card-accent">
              <Cloud aria-hidden="true" className="capability-icon" />
              <p className="capability-number">04</p>
              <h3>Cloud foundations</h3>
              <p>AWS hosting experience backed by Cisco cloud and data science certification.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="site-shell section-space scroll-mt-6">
        <div className="section-heading-grid">
          <p className="section-kicker">Experience</p>
          <div>
            <h2 className="section-title">From support desk detail to product-level thinking.</h2>
            <div className="experience-list mt-14">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="experience-item">
                  <p className="experience-period">{item.period}</p>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="education-card mt-20">
          <div className="education-mark" aria-hidden="true">
            <Braces className="size-8" />
          </div>
          <div>
            <p className="section-kicker">Education</p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase tracking-[-0.04em] sm:text-4xl">
              Bachelor of Information Systems
            </h3>
            <p className="mt-2 text-muted-foreground">
              Business Information Systems · University of Botswana · 2024
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section scroll-mt-0">
        <div className="site-shell relative z-10 py-20 sm:py-28">
          <p className="section-kicker text-white/65">Have a role, system or difficult workflow?</p>
          <h2 className="mt-8 max-w-6xl font-heading text-[clamp(3.4rem,9vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.075em] text-white">
            Let&apos;s build something that works.
          </h2>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <a className="contact-email" href="mailto:bakangradithobane@technologist.com">
              <Mail aria-hidden="true" className="size-5 shrink-0" />
              bakangradithobane@technologist.com
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/bakang-radithobane-3073711a8/"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 aria-hidden="true" className="size-5" /> LinkedIn
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f0f10] text-white">
        <div className="site-shell flex flex-col gap-3 py-6 font-mono text-[10px] uppercase tracking-[0.08em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bakang Radithobane</p>
          <p>Designed around clarity · built in Botswana</p>
        </div>
      </footer>
    </main>
  );
}
