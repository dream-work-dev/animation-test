const skillGroups = [
  {
    title: "Languages",
    accent: "blue",
    items: ["Java", "Python", "TypeScript", "JavaScript", "Go", "SQL"],
  },
  {
    title: "Backend & APIs",
    accent: "orange",
    items: [
      "FastAPI",
      "Django",
      "Django REST",
      "Flask",
      "Ruby on Rails",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "OAuth2 / JWT",
      "Webhooks",
    ],
  },
  {
    title: "Frontend",
    accent: "violet",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MUI",
      "Chakra UI",
      "Apollo",
    ],
  },
  {
    title: "Cloud & Delivery",
    accent: "green",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "GitLab CI",
      "Automated Testing",
      "Monitoring & Logging",
    ],
  },
  {
    title: "AI & Machine Learning",
    accent: "pink",
    items: [
      "Generative AI",
      "LLMs",
      "AI Integrations",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Vector Search",
    ],
  },
  {
    title: "Architecture",
    accent: "yellow",
    items: [
      "System Design",
      "Distributed Systems",
      "Scalable Web Apps",
      "Cloud-Native",
      "Event-Driven Systems",
    ],
  },
];

const experiences = [
  {
    company: "The New York Times",
    role: "Senior Software Engineer",
    period: "06/2023 — Present",
    location: "New York, US · Remote",
    intro:
      "Building customer-facing subscription, discovery, and reader-engagement experiences across high-traffic digital products.",
    metrics: ["22% faster page loads", "18% lower query latency", "30% faster iteration"],
    bullets: [
      "Architected and delivered React and TypeScript applications supporting subscription growth, content discovery, and reader engagement initiatives.",
      "Designed federated GraphQL services that unified several backend domains into a single API layer and simplified service integrations across product teams.",
      "Developed responsive, accessible frontend experiences used by millions of readers.",
      "Reduced average page-load times by approximately 22% through rendering optimizations, code splitting, asset delivery improvements, and GraphQL query tuning.",
      "Built reusable UI frameworks and shared component libraries adopted across multiple engineering teams.",
      "Implemented experimentation and A/B testing capabilities that improved product iteration speed by roughly 30%.",
      "Optimized GraphQL federation patterns and backend integrations, reducing query latency by 18% while improving API reliability.",
      "Developed personalization experiences using behavioral and subscription data to improve content relevance and reader engagement.",
      "Mentored engineers through technical design reviews, architecture discussions, and code reviews, and participated in hiring interviews and technical assessments.",
      "Evaluated and prototyped AI-assisted search, content discovery, and knowledge-retrieval workflows for editorial teams.",
    ],
    stack: ["React", "TypeScript", "Next.js", "GraphQL", "Apollo Federation", "Node.js", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
  },
  {
    company: "Policygenius",
    role: "Software Engineer",
    period: "07/2020 — 05/2023",
    location: "New York, US · Hybrid",
    intro:
      "Built insurance quote, comparison, policy-purchasing, and customer-onboarding workflows across multiple product lines.",
    metrics: ["25% faster APIs", "35% less release prep", "Multi-line insurance platform"],
    bullets: [
      "Developed customer-facing applications supporting quote generation, policy comparison, lead conversion, and onboarding.",
      "Led modernization initiatives that migrated legacy services into Python-based microservices and React applications.",
      "Designed scalable FastAPI, PostgreSQL, and Redis services for recommendation and pricing workflows.",
      "Improved API response times by approximately 25% through database optimization, caching, and service-level tuning.",
      "Implemented GraphQL services that streamlined frontend-backend communication and accelerated feature delivery.",
      "Designed business-rules engines supporting insurance eligibility, pricing calculations, and policy recommendations.",
      "Enhanced deployment reliability through CI/CD automation, reducing release-preparation effort by nearly 35%.",
      "Built internal tools for underwriting, customer support, and content-management teams.",
      "Mentored junior engineers through code reviews, technical guidance, and knowledge-sharing activities.",
    ],
    stack: ["Python", "FastAPI", "Django", "React", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
  {
    company: "Facebook",
    role: "Software Engineer",
    period: "01/2017 — 05/2020",
    location: "New York, US · On-site",
    intro:
      "Created internal productivity platforms and high-volume business systems for engineering and operational teams.",
    metrics: ["1,000+ employees served", "40% faster onboarding", "Business-critical systems"],
    bullets: [
      "Built internal productivity platforms used by more than 1,000 employees across engineering and operational teams.",
      "Developed high-volume backend services in Java and Python and React applications for operational metrics and engineering workflows.",
      "Implemented distributed caching and data-access solutions that improved application responsiveness and scalability.",
      "Reduced environment setup and onboarding time by approximately 40% through automation tooling and developer-workflow improvements.",
      "Contributed to system-design reviews, monitoring, deployment automation, incident response, and production troubleshooting.",
      "Mentored interns and early-career engineers through technical reviews and project guidance.",
    ],
    stack: ["Java", "Python", "React", "Django", "MySQL", "Redis", "Docker", "AWS", "REST APIs"],
    subrole: {
      role: "Software Engineer Intern",
      period: "05/2016 — 01/2017",
      bullets: [
        "Developed automated unit and integration tests for Java services and React applications.",
        "Built Python and Django backend functionality and React interfaces for internal tooling and proof-of-concept projects.",
        "Created scripts and automation tools that streamlined testing and development workflows.",
        "Contributed features, bug fixes, and frontend performance improvements while participating in code reviews and sprint planning.",
      ],
    },
  },
];

const impactStories = [
  {
    metric: "22%",
    label: "Faster reader experiences",
    title: "Performance at publishing scale",
    description:
      "Improved page-load performance across high-traffic React experiences through rendering optimization, code splitting, asset delivery improvements, and GraphQL tuning.",
    tags: ["React", "TypeScript", "GraphQL", "Web Performance"],
    tone: "blue",
  },
  {
    metric: "25%",
    label: "Faster API responses",
    title: "Insurance platform modernization",
    description:
      "Modernized legacy services into Python microservices and tuned PostgreSQL and Redis-backed APIs for pricing, eligibility, and recommendation workflows.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    tone: "orange",
  },
  {
    metric: "40%",
    label: "Faster developer onboarding",
    title: "Developer productivity at scale",
    description:
      "Built automation and workflow tooling that reduced environment setup and onboarding time for internal engineering teams.",
    tags: ["Java", "Python", "Automation", "Platform Engineering"],
    tone: "green",
  },
];

function SkillMark({ name, accent }: { name: string; accent: string }) {
  const compact = name
    .split(/\s|\//)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li className="skill-item">
      <span className={`skill-icon ${accent}`} aria-hidden="true">
        {compact}
      </span>
      <span>{name}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="monogram-card">
            <span className="code-corner">{`{`}</span>
            <strong>EA</strong>
            <span className="code-corner closing">{`}`}</span>
          </div>
          <span className="orbit-chip chip-react">React</span>
          <span className="orbit-chip chip-graph">GraphQL</span>
          <span className="orbit-chip chip-cloud">AWS</span>
          <span className="orbit-chip chip-python">Python</span>
        </div>

        <div className="hero-copy">
          <div className="hero-meta">
            <span className="mini-avatar">EA</span>
            <span>📍 Miami, FL</span>
          </div>
          <p className="eyebrow">Hi, I&apos;m Ethan <span aria-hidden="true">👋</span></p>
          <h1 id="hero-title">
            <span className="accent-word">SENIOR</span>
            <span>SOFTWARE</span>
            <span>ENGINEER</span>
          </h1>
          <p className="hero-note">
            Full-stack systems, high-traffic products, and platform architecture.
          </p>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <p className="section-kicker">01 / Profile</p>
        <h2 id="about-title">About</h2>
        <div className="about-copy">
          <p>
            I&apos;m Ethan Ali, a Senior Full-Stack Engineer with 10+ years of experience building
            large-scale consumer platforms, subscription products, and developer-facing systems.
            My core toolkit includes <mark>React</mark>, <mark>TypeScript</mark>, <mark>GraphQL</mark>,
            <mark> Java</mark>, and <mark>Python</mark>.
          </p>
          <p>
            I design scalable APIs, improve frontend performance, and deliver experiences used by
            millions of customers. I also lead technical initiatives, mentor engineers, and partner
            across product, design, editorial, analytics, and engineering organizations.
          </p>
          <p className="quote-line">
            <span aria-hidden="true">→</span> I turn complex product and platform problems into reliable,
            measurable software.
          </p>
        </div>

        <div className="stats-grid" aria-label="Career highlights">
          <div><strong>10+</strong><span>years building software</span></div>
          <div><strong>Millions</strong><span>of users reached</span></div>
          <div><strong>3</strong><span>major product domains</span></div>
        </div>

        <a className="button primary-button" href="/Ethan-Ali-Resume.pdf" target="_blank" rel="noreferrer">
          View original resume <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-heading-row">
          <div>
            <p className="section-kicker">02 / Toolkit</p>
            <h2 id="skills-title">Skills</h2>
          </div>
          <label className="play-toggle">
            <span>Play mode</span>
            <input id="play-mode" type="checkbox" />
            <span className="toggle-track" aria-hidden="true"><span /></span>
          </label>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <SkillMark key={item} name={item} accent={group.accent} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <p className="section-kicker">03 / Career</p>
        <h2 id="experience-title">Work Experience</h2>
        <p className="section-intro">
          A decade of work across publishing, insurance, and developer productivity—spanning
          product delivery, system design, platform modernization, and technical leadership.
        </p>

        <ol className="timeline">
          {experiences.map((experience) => (
            <li className="timeline-item" key={experience.company}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className="experience-card">
                <div className="experience-topline">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="role">{experience.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <p className="experience-intro">{experience.intro}</p>
                <div className="metric-row">
                  {experience.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
                <details>
                  <summary>Selected contributions</summary>
                  <ul className="contribution-list">
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </details>
                {experience.subrole && (
                  <div className="subrole">
                    <div className="subrole-heading">
                      <strong>{experience.subrole.role}</strong>
                      <span>{experience.subrole.period}</span>
                    </div>
                    <ul className="contribution-list compact-list">
                      {experience.subrole.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                )}
                <div className="tag-list" aria-label={`${experience.company} technology stack`}>
                  {experience.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="section impact-section" id="impact" aria-labelledby="impact-title">
        <p className="section-kicker">04 / Selected work</p>
        <h2 id="impact-title">Engineering Impact</h2>
        <p className="section-intro">
          Three outcomes that show how Ethan approaches product performance, platform modernization,
          and developer experience.
        </p>
        <div className="impact-grid">
          {impactStories.map((story) => (
            <article className="impact-card" key={story.title}>
              <div className={`impact-visual ${story.tone}`}>
                <span className="impact-label">{story.label}</span>
                <strong>{story.metric}</strong>
                <span className="impact-gridline" aria-hidden="true" />
              </div>
              <div className="impact-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="tag-list">
                  {story.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education" aria-labelledby="education-title">
        <p className="section-kicker">05 / Foundation</p>
        <h2 id="education-title">Education</h2>
        <div className="education-card">
          <div className="education-mark" aria-hidden="true">UAA</div>
          <div>
            <h3>University of Alaska Anchorage</h3>
            <p>Bachelor&apos;s Degree in Computer Science</p>
          </div>
          <span>2012 — 2016</span>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <p className="section-kicker">06 / Contact</p>
        <h2 id="contact-title">Contact</h2>
        <div className="contact-panel">
          <p className="contact-label">Have a product or platform challenge?</p>
          <h3>Let&apos;s build something reliable, fast, and useful.</h3>
          <p>
            Send an email or connect on LinkedIn. Ethan is based in Miami, Florida and works with
            distributed teams.
          </p>
          <div className="contact-actions">
            <a className="button primary-button" href="mailto:ethanali503@gmail.com">Email Ethan</a>
            <a className="button secondary-button" href="https://www.linkedin.com/in/ethan-ali-28606a3a7/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="button secondary-button" href="https://github.com/eak65" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">EA</div>
        <p>Senior Software Engineer · Miami, FL</p>
        <a href="mailto:ethanali503@gmail.com">ethanali503@gmail.com</a>
      </footer>
    </main>
  );
}
