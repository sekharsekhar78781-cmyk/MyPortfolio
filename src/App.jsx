
import "./App.css";

function App() {
  const skills = [
    {
      name: "HTML5",
      symbol: "H5",
      description: "Semantic HTML and page structure",
    },
    {
      name: "CSS3",
      symbol: "C3",
      description: "Flexbox, Grid and responsive design",
    },
    {
      name: "JavaScript",
      symbol: "JS",
      description: "ES6+, functions and JavaScript fundamentals",
    },
    {
      name: "React",
      symbol: "R",
      description: "Components, Props, Hooks and JSX",
    },
  ];

  const projects = [
    {
      name: "SeedStock",
      category: "React Dashboard",
      description:
        "A seed stock management dashboard with screens for seeds, stock transactions, suppliers, sales and reports.",
      technologies: ["React", "CSS", "JavaScript"],
      github:
        "https://github.com/sekharsekhar78781-cmyk/seedstock",
      demo: "https://seedstock-psi.vercel.app",
    },
    {
      name: "Andhra Premier Kabaddi League",
      category: "Sports Website",
      description:
        "A sports website for displaying teams, players, matches and points-table information.",
      technologies: ["React", "CSS", "JavaScript"],
      github:
        "https://github.com/sekharsekhar78781-cmyk/apkl-champions-rise",
      demo: "",
    },
    {
      name: "LOVE 3 Magic Prints",
      category: "Business Website",
      description:
        "A modern printing and gifts website concept with a premium black, white and gold visual style.",
      technologies: ["React", "CSS", "Vite"],
      github: "",
      demo: "",
    },
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          CK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main id="home" className="hero">
        <div className="hero-content">
          <p className="hero-label">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </p>

          <p className="intro">Hello, I'm</p>

          <h1>
            Chandrasekhar
            <br />
            <span>Kuruva.</span>
          </h1>

          <h2>
            Fresher <span>Frontend Developer</span>
          </h2>

          <p className="hero-description">
            I build responsive and user-friendly web experiences
            using HTML, CSS, JavaScript, and React. I'm looking
            for an opportunity to start my career as a Frontend
            Developer.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a
              href="https://github.com/sekharsekhar78781-cmyk"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

            <a
              href="https://seedstock-psi.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              SeedStock Website ↗
            </a>
          </div>

          <div className="hero-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-circle"></div>

          <div className="initials-card">
            <span>CK</span>
            <div className="initials-line"></div>
            <p>Frontend Developer</p>
          </div>

          <div className="floating-tag tag-top">
            <span>✦</span> React.js
          </div>

          <div className="floating-tag tag-bottom">
            <span>⌘</span> Creative Coding
          </div>
        </div>
      </main>

      <section id="about" className="portfolio-section">
        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="section-subtitle">
            A little about my journey and career goals.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">{"< />"}</div>

            <h3>Who I Am</h3>

            <p>
              I'm Chandrasekhar Kuruva, an aspiring Frontend
              Developer passionate about building clean,
              responsive, and user-friendly web applications.
            </p>

            <p>
              I enjoy learning new technologies, practising
              coding, and turning ideas into useful web
              experiences.
            </p>
          </div>

          <div className="about-card career-card">
            <div className="about-icon">✦</div>

            <h3>My Career Goal</h3>

            <p>
              I'm looking for a Fresher Frontend Developer
              opportunity where I can apply my React skills,
              learn from experienced developers, and contribute
              to real projects.
            </p>

            <div className="career-tag">
              Open to Fresher Opportunities
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-section skills-section">
        <div className="section-heading">
          <p className="section-label">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <p className="section-subtitle">
            Technologies I use to build modern web interfaces.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-symbol">
                {skill.symbol}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="portfolio-section projects-section"
      >
        <div className="section-heading">
          <p className="section-label">MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-subtitle">
            A selection of projects I'm building with frontend
            technologies.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <div className="project-icon">{"< />"}</div>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link demo-link"
                  >
                    Live Demo ↗
                  </a>
                )}

                {!project.github && !project.demo && (
                  <span className="project-coming-soon">
                    Links coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="portfolio-section contact-section"
      >
        <div className="contact-card">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Let's Build Something <span>Great.</span>
          </h2>

          <p>
            I'm looking for a Fresher Frontend Developer
            opportunity. If you're hiring or would like to
            connect, feel free to reach out.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:your-email@example.com"
              className="primary-button"
            >
              Email Me ↗
            </a>

            <a
              href="https://github.com/sekharsekhar78781-cmyk"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Visit GitHub ↗
            </a>

            <a
              href="https://seedstock-psi.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View Live Website ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          CK<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Chandrasekhar Kuruva.
          Built with React.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
