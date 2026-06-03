import { useState, useEffect } from "react";
import "./App.css";

const workExperience = [
  { icon: "🏦", title: "CIB on the Mobile", role: "UI/UX Designer", period: "2022 – Present", tag: "Current" },
  { icon: "💳", title: "CIB on the Mobile", role: "Product Designer", period: "2021 – 2022", tag: "Full-time" },
  { icon: "🚀", title: "CIB on the Mobile", role: "Junior Designer", period: "2020 – 2021", tag: "Full-time" },
  { icon: "🎨", title: "CIB on the Mobile", role: "Design Intern", period: "2019 – 2020", tag: "Internship" },
];

const projects = [
  {
    title: "Example Project",
    desc: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tags: ["React", "Node.js", "Spotify API", "TypeScript"],
  },
  {
    title: "Example Project",
    desc: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks.",
    tags: ["Next.js", "Tailwind", "REST API", "Figma"],
    reverse: true,
  },
];

const skills = [
  { name: "React / Next.js", level: 92, category: "Frontend" },
  { name: "UI / UX Design",  level: 88, category: "Design"   },
  { name: "Node.js / APIs",  level: 75, category: "Backend"   },
  { name: "Figma",           level: 85, category: "Design"    },
  { name: "Framer Motion",   level: 70, category: "Animation" },
];

const stats = [
  { num: "5+", label: "Years Experience" },
  { num: "40+", label: "Projects Shipped" },
  { num: "12",  label: "Happy Clients"    },
  { num: "3",   label: "Design Awards"    },
];

const testimonials = [
  { quote: "Delivered a pixel-perfect product on time. The attention to detail and user experience sensibility was exactly what we needed.", name: "Sarah Mitchell", role: "CEO, Launchpad Studio", avatar: "👩‍💼" },
  { quote: "Incredible work ethic and design instinct. Transformed our outdated interface into something modern and intuitive.", name: "James Okafor", role: "CTO, NovaPay", avatar: "👨‍💻" },
  { quote: "One of the best collaborators I've worked with. Brought both creative vision and technical execution to every sprint.", name: "Priya Nair", role: "Product Lead, Kova", avatar: "🧑‍🎨" },
];

const services = [
  { icon: "🎨", title: "UI / UX Design",    desc: "End-to-end product design from wireframes to polished high-fidelity interfaces." },
  { icon: "⚛️",  title: "Frontend Dev",      desc: "React & Next.js applications with clean code, great performance, and smooth animations." },
  { icon: "🔍", title: "UX Audit",          desc: "Deep analysis of your existing product with actionable improvements for usability." },
  { icon: "📱", title: "Responsive Design", desc: "Mobile-first layouts that work flawlessly on every screen size and device." },
];

function MockupPreview() {
  return (
    <div className="project-preview">
      <div className="preview-mockup">
        <div className="mockup-bar">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-lines">
          {[80, 60, 70, 45, 65].map((w, i) => (
            <div key={i} className="mockup-line" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <div className="logo">✦</div>
        <ul>
          <li><a href="#work">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Lab</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="glow-orb orb-left" />
        <div className="glow-orb orb-right" />

        <div className="hero-badge">
          <span className="dot" />
          Available for work
        </div>

        <h1>
          Judges a book<br />
          by its <span className="highlight">cover...</span>
        </h1>

        <p className="hero-sub">
          I'm a Front end developer, currently at <span>✦ Some Place</span>
        </p>

        <p className="hero-desc">
          A self-taught UI/UX designer. Functioning is the industry for +2 years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">View Work</button>
          <button className="btn-outline">Download CV</button>
        </div>

        <div className="avatar-wrapper">
          <div className="avatar-ring">
            <div className="avatar-inner"></div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="work">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Work Experience</h2>
        <div className="work-grid">
          {workExperience.map((job, i) => (
            <div className="work-card" key={i}>
              <div className="work-icon">{job.icon}</div>
              <div className="work-info">
                <h4>{job.title}</h4>
                <p>{job.role}<br />{job.period}</p>
                <span className="work-tag">{job.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider-section">
        <div className="glow-orb orb-center" />
        <p className="divider-text">
          I'm currently looking to join a <a href="#contact">cross-functional</a> team
          that values improving people's lives through accessible design.
        </p>
      </div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">Work</div>
        <h2 className="section-title">Example Projects</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div className={`project-card ${p.reverse ? "reverse" : ""}`} key={i}>
              <div className="project-text">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span className="tag" key={j}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#">↗ Live Demo</a>
                  <a href="#">⌥ GitHub</a>
                </div>
              </div>
              <MockupPreview />
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">Capabilities</div>
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <h4>{s.name}</h4>
              <div className="bar-wrap">
                <div className="bar-fill" style={{ width: `${s.level}%` }} />
              </div>
              <div className="skill-meta">
                <span>{s.category}</span>
                <span>{s.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section id="stats">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-cell" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-label">What People Say</div>
        <h2 className="section-title">Testimonials</h2>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="stars">★★★★★</div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label">What I Offer</div>
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="srv-card" key={i}>
              <div className="srv-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-inner">
          <p>
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. If that sounds like
            you, let's connect!
          </p>
          <a href="mailto:hello@example.com" className="contact-email">
            hello@example.com
          </a>
          <div className="socials">
            {["𝕏", "in", "gh", "🎨", "📸"].map((s, i) => (
              <a href="#" className="social-link" key={i}>{s}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>✦ Portfolio 2025</span>
        <span>Designed & Built with ♥</span>
      </footer>
    </>
  );
}