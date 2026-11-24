import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileCheck2,
  GitBranch,
  Link2,
  Mail,
  Network,
  PanelsTopLeft,
  Router,
  Search,
  UsersRound,
} from 'lucide-react';
import AboutPage from './AboutPage';

const capabilities = [
  { icon: Search, title: 'Requirements and discovery', description: 'Clarifying business needs, constraints and success criteria before a solution is shaped.' },
  { icon: GitBranch, title: 'Process analysis', description: 'Mapping current workflows, identifying friction and defining a clearer future-state process.' },
  { icon: Database, title: 'Data and system design', description: 'Structuring information, validation rules and application logic around dependable operations.' },
  { icon: FileCheck2, title: 'Testing and assurance', description: 'Supporting integration testing, UAT, issue resolution and release readiness across teams.' },
  { icon: UsersRound, title: 'Stakeholder alignment', description: 'Translating between business users and technical teams so decisions stay clear and actionable.' },
  { icon: Network, title: 'Delivery coordination', description: 'Keeping requirements, dependencies, testing and implementation work connected through delivery.' },
  { icon: PanelsTopLeft, title: 'Full-stack development', description: 'Building web and software solutions across interface, application logic, services and data.' },
  { icon: Router, title: 'Network and VPN operations', description: 'Managing VPN access, diagnosing connectivity problems and supporting secure network configuration.' },
];

const caseStudies = [
  {
    title: 'Rebate Management System',
    context: 'Finance workflow automation',
    summary: 'Replaced a manual rebate process with a structured internal application for validation, records and reporting.',
    contribution: 'Analysed the operational process, translated it into application logic and built the supporting Java and SQL solution.',
    outcome: 'Approximately 10 hours of manual work saved each week.',
    tools: ['Java', 'SQL', 'Validation', 'Reporting'],
  },
  {
    title: 'Multi-Branch Data Merge',
    context: 'Data quality and reconciliation',
    summary: 'Created a repeatable workflow for merging product data from three branch databases while checking schema consistency.',
    contribution: 'Defined reconciliation rules and automated the merge process with Python to make exceptions easier to identify.',
    outcome: 'Three branch data sources aligned through one controlled workflow.',
    tools: ['Python', 'Databases', 'Automation', 'Data quality'],
  },
  {
    title: 'Pharmaceutical Management System',
    context: 'Relational application design',
    summary: 'Designed a database-driven application to organise pharmaceutical records and improve everyday information retrieval.',
    contribution: 'Structured the data model and developed the Java and SQL workflow around practical record-management needs.',
    outcome: 'Turned disconnected records into a usable operational workflow.',
    tools: ['Java', 'SQL', 'Relational design'],
  },
];

const webContributions = [
  { name: 'Buffalo Hills', url: 'https://www.buffalohills.co.bw', description: 'Contributed as a backend developer, supporting the server-side functionality and application logic behind the public web platform.' },
  { name: 'ChopChop', url: 'https://chopchop.co.bw', description: 'Contributed as a backend developer, supporting web services, application logic and coordinated team delivery.' },
];

const experience = [
  { period: '2025 - Present', role: 'Project Coordinator / IT Officer', company: 'E-Choppies, Choppies Botswana', description: 'Coordinate technical delivery across teams, strengthen data quality and support integration testing, UAT and release readiness.' },
  { period: '2024 - 2025', role: 'IT Officer', company: 'Air Botswana', description: 'Built an internal rebate management system and supported the enterprise systems and infrastructure used in daily operations.' },
  { period: '2022', role: 'Junior Systems Analyst', company: 'Central Transport Organisation', description: 'Analysed operational workflows, documented procedures and helped improve reporting processes and system efficiency.' },
];

const methods = ['Requirements gathering', 'Process mapping', 'Data validation', 'Relational modelling', 'Integration testing', 'User acceptance testing', 'Technical documentation', 'Release readiness', 'VPN management', 'Network diagnosis', 'Network configuration'];
const technologies = ['C#', '.NET', 'Java', 'Python', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'AWS', 'Frontend development', 'Backend development'];

export default function Home() {
  if (window.location.pathname.replace(/\/+$/, '') === '/about') {
    return <AboutPage />;
  }

  return (
    <main id="top" className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header page-width">
        <a className="brand-mark" href="#top" aria-label="Bakang Radithobane home">Bakang Radithobane</a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="/about">About</a>
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">Contact me</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">System analyst, full-stack software and web developer</p>
            <h1 id="hero-title">Complex operations. Clear systems people trust.</h1>
            <p className="hero-lead">I analyse workflows, build full-stack solutions and support the networks that keep digital services dependable.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View case studies <ArrowDown aria-hidden="true" /></a>
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/bakang-radithobane.png" alt="Bakang Radithobane wearing a navy suit" width="1024" height="1536" />
            <div className="portrait-caption">
              <span>Based in Botswana</span>
              <strong>Business understanding, technical delivery</strong>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional focus">
          <div className="page-width proof-grid">
            <p>Business process analysis</p>
            <p>Reliable data and systems</p>
            <p>Testing and delivery coordination</p>
          </div>
        </section>

        <section className="capabilities page-width section-block" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <h2 id="capabilities-title">Analysis that connects the problem to delivery.</h2>
            <p>I work across the full path from understanding an operational need to validating the system that addresses it.</p>
          </div>
          <div className="capability-layout">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="capability-item">
                  <Icon aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="work" className="work-section section-block" aria-labelledby="work-title">
          <div className="page-width">
            <div className="work-intro">
              <div>
                <p className="section-label">Selected work</p>
                <h2 id="work-title">Evidence of analysis in action.</h2>
              </div>
              <p>Each case shows how a business or data problem became a more dependable working system.</p>
            </div>
            <div className="case-study-list">
              {caseStudies.map((project) => (
                <article key={project.title} className="case-study">
                  <div className="case-study-heading"><p>{project.context}</p><h3>{project.title}</h3></div>
                  <div className="case-study-body">
                    <p className="case-summary">{project.summary}</p>
                    <dl>
                      <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
                      <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                    </dl>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="web-contributions" aria-labelledby="web-contributions-title">
              <div><h3 id="web-contributions-title">Web platform contributions</h3><p>Backend development delivered as part of broader teams.</p></div>
              <div className="contribution-list">
                {webContributions.map((project) => (
                  <article key={project.name}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noreferrer">Visit website <ArrowUpRight aria-hidden="true" /></a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section page-width section-block" aria-labelledby="approach-title">
          <div className="approach-visual">
            <img src="/systems-analysis-workspace.png" alt="Process maps, data structures and a validation checklist arranged on an analyst's workspace" width="1536" height="1024" />
          </div>
          <div className="approach-content">
            <h2 id="approach-title">A practical way through ambiguity.</h2>
            <p className="approach-intro">Good systems begin with a shared understanding of the work, the data and the people affected by change.</p>
            <ol className="approach-list">
              <li><strong>Discover</strong><span>Understand the users, workflow, constraints and business objective.</span></li>
              <li><strong>Define</strong><span>Turn findings into clear requirements, rules and a workable system model.</span></li>
              <li><strong>Validate</strong><span>Test assumptions, data and integrations with the people who rely on them.</span></li>
              <li><strong>Deliver</strong><span>Coordinate implementation, resolve gaps and support a controlled release.</span></li>
            </ol>
          </div>
        </section>

        <section className="toolkit-section section-block" aria-labelledby="toolkit-title">
          <div className="page-width toolkit-layout">
            <div className="toolkit-heading"><h2 id="toolkit-title">Methods and technology.</h2><p>A balanced toolkit for analysing the operation and building what the solution needs.</p></div>
            <div className="toolkit-groups">
              <div><h3>Analysis and delivery</h3><ul>{methods.map((method) => <li key={method}><CheckCircle2 aria-hidden="true" /> {method}</li>)}</ul></div>
              <div><h3>Development and platforms</h3><ul>{technologies.map((technology) => <li key={technology}><CheckCircle2 aria-hidden="true" /> {technology}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section page-width section-block" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <h2 id="experience-title">Experience across analysis, IT and delivery.</h2>
            <p>Roles that connect day-to-day operational detail with system-level improvement.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <p className="experience-period">{item.period}</p>
                <div><h3>{item.role}</h3><p className="experience-company">{item.company}</p></div>
                <p className="experience-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="credentials page-width" aria-labelledby="credentials-title">
          <div className="credential-primary"><p>Education</p><h2 id="credentials-title">Bachelor of Information Systems</h2><span>Business Information Systems, University of Botswana, 2024</span></div>
          <div className="credential-secondary"><p>Professional development</p><h3>Cloud and data science foundations</h3><span>Cisco certification-based learning</span></div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="page-width contact-layout">
            <div><p className="section-label">Contact</p><h2 id="contact-title">Need someone who can see both the system and the operation?</h2></div>
            <div className="contact-actions">
              <p>I am open to system analysis, full-stack development, business systems and technical delivery opportunities.</p>
              <a className="contact-email" href="mailto:bakangradithobane@technologist.com"><Mail aria-hidden="true" /> bakangradithobane@technologist.com</a>
              <div className="contact-socials">
                <a className="contact-linkedin" href="https://www.linkedin.com/in/bakang-radithobane-3073711a8/" target="_blank" rel="noreferrer"><Link2 aria-hidden="true" /> LinkedIn</a>
                <a className="contact-whatsapp" href="https://wa.me/26773371512" target="_blank" rel="noreferrer" aria-label="Chat with Bakang Radithobane on WhatsApp at +267 73 371 512">
                  <img src="/whatsapp.svg" alt="" aria-hidden="true" /> +267 73 371 512
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer page-width"><p>© 2026 Bakang Radithobane</p><a href="#top">Back to top</a></footer>
    </main>
  );
}
