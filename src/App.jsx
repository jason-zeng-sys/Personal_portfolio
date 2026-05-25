import "./App.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Mingjia Zeng</h2>
        <div>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

   
<section className="hero">
  <div className="hero-content">

    <div className="hero-left">
      <p className="eyebrow">
        MASTER&apos;S STUDENT IN COMPUTER SCIENCE
      </p>

      <h1>Mingjia Zeng</h1>

      <p className="hero-text">
        I&apos;m a Software Engineer interested in
        QA Automation, Full-Stack Development,
        Data Science, and AI-powered applications.
      </p>

     <div className="social-links">

  <a
    href="https://github.com/jason-zeng-sys"
    target="_blank"
  >
    <FaGithub />
  </a>

  <a
    href="YOUR_LINKEDIN_LINK"
    target="_blank"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:zengma@mail.uc.edu">
    <FaEnvelope />
  </a>

</div>

      <div className="hero-buttons">
        <a className="button" href="#projects">
          View Projects
        </a>

        <a className="button secondary" href="#contact">
          Contact Me
        </a>
      </div>
    </div>

    <div className="hero-right">
      <img
        className="profile-img"
        src="/profile.jpg"
        alt="Mingjia Zeng"
      />
    </div>

  </div>
</section>
```


  
<section id="about" className="section">
  <h2>About Me</h2>

  <div className="about-container">

    <div className="about-left">

      <h3>
        Full-Stack Development, QA Automation &
        Data-Focused Engineering
      </h3>

      <p className="about-intro">
        Although I enjoy building modern full-stack applications,
        I am especially interested in combining software engineering
        with data analysis, automation, cloud systems, and AI-powered tools.
      </p>


      <div className="about-grid">
  <p><span>›</span><strong>Degree:</strong> MEng Computer Science</p>
  <p><span>›</span><strong>University:</strong> University of Cincinnati</p>
  <p><span>›</span><strong>Specialization:</strong> Software Engineering & QA Automation</p>
  <p><span>›</span><strong>Industries:</strong> Insurance, Web Applications, Research Computing</p>
  <p><span>›</span><strong>Experience:</strong> Software Development, Testing, API Validation</p>
  <p><span>›</span><strong>Tools:</strong> React, Firebase, Selenium, Postman, Snowflake</p>
  <p><span>›</span><strong>Email:</strong> zengma@mail.uc.edu</p>
  <p><span>›</span><strong>Availability:</strong> Open to internships and entry-level roles</p>
</div>

      <p className="about-description">
        My background includes experience in software testing,
        React development, API validation, cloud-backed applications,
        and research-oriented technical work. I enjoy creating
        practical software solutions while continuously learning
        modern technologies involving AI, data systems, and scalable
        web development.
      </p>

    </div>

    <div className="about-right">
      <img
        src="/profile.jpg"
        alt="Mingjia Zeng"
        className="about-img"
      />
    </div>

  </div>
</section>



     <section id="education" className="section education-section">
    <h2>Education</h2>
  
    <p className="education-intro">
      I completed my undergraduate degree at the University of Cincinnati and am currently pursuing my Master's in Computer Science. My academic background focuses on software engineering, data systems, testing, cloud technologies, and applied computing.
    </p>
  
    <div className="education-grid">
      <div className="education-card">
        <img src="/uc-logo.png" alt="University of Cincinnati" />
        <h3>MEng Computer Science</h3>
        <p className="date">Graduated May 2026 | 3.7 GPA</p>
        <p>Master of Engineering in Computer Science from the University of Cincinnati. Advanced coursework in algorithms, system design, distributed systems, and software architecture.</p>
      </div>
  
      <div className="education-card">
        <img src="/uc-logo.png" alt="University of Cincinnati" />
        <h3>BS Computer Science</h3>
        <p className="date">Graduated May 2023 | 3.6/4.0 GPA</p>
        <p>Bachelor of Science in Computer Science, minor in Mathematics, specialization in Intelligent Software Development (Data Science) from the University of Cincinnati. Comprehensive coursework in software development, databases, distributed systems, and computer science fundamentals. University Honors Scholar, Dean's List recipient.</p>
      </div>
  
      <div className="education-card">
        <img src="/azure-logo.png" alt="Microsoft Azure" />
        <h3>Azure Fundamentals</h3>
        <p className="date">Microsoft Certified (AZ-900)</p>
        <p>Microsoft Certification in Azure Fundamentals covering Azure architecture, services, management and governance. Requires passing score in AZ-900 examination. Demonstrates proficiency in cloud computing, data platforms, and scalable software systems.</p>
      </div>
    </div>
  </section>





    <section id="skills" className="section">

  <h2 className="section-title">SKILLS</h2>

  <p className="skills-intro">
    My technical background includes software engineering, QA automation,
    full-stack development, cloud technologies, API testing, and data-focused
    application development. I enjoy building scalable systems and continuously
    learning modern technologies involving AI, cloud computing, and automation.
  </p>

  <div className="skills-top-grid">

    <div className="skill-card">
      <div className="skill-icon">💻</div>
      <h3>Frontend</h3>
      <p>
        React, Svelte, JavaScript, TypeScript, HTML, CSS,
        responsive UI design and component-based development.
      </p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">⚙️</div>
      <h3>Backend & Data</h3>
      <p>
        Firebase, Firestore, MySQL, SQL, Snowflake,
        REST APIs, cloud-backed systems, and Docker.
      </p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">🧪</div>
      <h3>QA & Automation</h3>
      <p>
        Selenium, Postman, API validation, end-to-end testing,
        Jira workflows, defect tracking, and test automation.
      </p>
    </div>

    <div className="skill-card">
      <div className="skill-icon">☁️</div>
      <h3>Cloud & AI</h3>
      <p>
        Azure Fundamentals certified, AI-assisted workflows,
        machine learning exposure, and modern cloud platforms.
      </p>
    </div>

  </div>

  <div className="skills-details">

    <div className="skills-column">
      <ul>

        <li>
          <strong>Programming Languages:</strong>
          Python, JavaScript, Java, C#, SQL, C++
        </li>

        <li>
          <strong>Frontend Development:</strong>
          React, Svelte, TypeScript, HTML, CSS
        </li>

        <li>
          <strong>Backend & Databases:</strong>
          Firebase, Firestore, Snowflake, MySQL
        </li>

        <li>
          <strong>Testing & QA:</strong>
          Selenium, Postman, API Testing, E2E Testing
        </li>

      </ul>
    </div>

    <div className="skills-column">
      <ul>

        <li>
          <strong>Tools:</strong>
          GitHub, Jira, VS Code, Docker
        </li>

        <li>
          <strong>Cloud Platforms:</strong>
          Azure Fundamentals, Firebase Hosting
        </li>

        <li>
          <strong>Operating Systems:</strong>
          Windows, Linux, macOS
        </li>

        <li>
          <strong>Other Interests:</strong>
          AI-assisted development, cloud analytics,
          automation workflows
        </li>

      </ul>
    </div>

  </div>

</section>






    <section id="experience" className="section experience-section">
  <h2>Experience</h2>

  <p className="experience-intro">
    I have professional experience in software development, QA automation,
    API testing, data validation, and web application development across
    startup, insurance, and research-focused environments.
  </p>

  <a href="/resume.pdf" target="_blank" className="resume-button">
    1-page Resume
  </a>

  <div className="experience-grid">
    <div className="experience-item">
      <h3>UrbanHikers Cincinnati</h3>
      <h4>Software Developer</h4>
      <div className="experience-meta">
        <span>Cincinnati, OH</span>
        <span>Mar 2025 – Present</span>
      </div>
      <p>
        Built responsive React and TypeScript interfaces for route booking,
        route discovery, and user profiles.
      </p>
      <ul>
        <li>Developed Firebase backend features using Firestore and Authentication.</li>
        <li>Performed end-to-end testing and API validation using Postman.</li>
        <li>Worked on user-facing web features for a modern walking route platform.</li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>Divisional Maintenance Group</h3>
      <h4>Quality Assurance Intern</h4>
      <div className="experience-meta">
        <span>Cincinnati, OH</span>
        <span>Jan 2022 – Apr 2022</span>
      </div>
      <p>
        Supported QA testing for the DMG Moneyball application across front-end
        and back-end services.
      </p>
      <ul>
        <li>Built Selenium-based automated test coverage.</li>
        <li>Conducted API testing with Postman.</li>
        <li>Documented bugs and test plans using Jira.</li>
      </ul>
    </div>

    <div className="experience-item">
      <h3>Cincinnati Insurance Co.</h3>
      <h4>IT Data Entry Intern</h4>
      <div className="experience-meta">
        <span>Cincinnati, OH</span>
        <span>Jan 2021 – May 2021</span>
      </div>
      <p>
        Tested third-party policy data bridged into internal software systems
        and validated data integrity.
      </p>
      <ul>
        <li>Created and verified policy numbers manually.</li>
        <li>Tested JSON-based policy creation workflows.</li>
        <li>Helped validate internal insurance software processes.</li>
      </ul>
    </div>
  </div>
</section>




      
      
   <section id="projects" className="section projects-section">
  <h2>Projects</h2>

  <p className="projects-intro">
    A selection of academic and software development projects focused on
    web development, Unity, security, and user-centered applications.
  </p>

  <div className="projects-grid">
    <div className="project-card">
      <div className="project-image">Smart Trash</div>
      <div className="project-content">
        <h3>Smart Trash App</h3>
        <p>
          Svelte-based reminder app with trash day selection, dynamic
          notification settings, and user-focused interface design.
        </p>
        <p className="tech">Svelte · JavaScript · CSS</p>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image">Goal Tracker</div>
      <div className="project-content">
        <h3>Goal Tracking Journal</h3>
        <p>
          Health and movement tracking web application with daily logs,
          progress summaries, and user-centered design.
        </p>
        <p className="tech">Svelte · JavaScript · UX Design</p>
      </div>
    </div>

    <div className="project-card">
      <div className="project-image">VR Sandbox</div>
      <div className="project-content">
        <h3>VR Sandbox Game</h3>
        <p>
          Unity capstone project with environment switching, session controls,
          and interactive front-end panels.
        </p>
        <p className="tech">Unity · C# · VR</p>
      </div>
    </div>
  </div>
</section>




     ```jsx id="contact-upgrade"
<section id="contact" className="section">
  <h2>CONTACT</h2>

  <div className="section-line"></div>

  <p className="contact-subtitle">
    Feel free to reach out if you want to connect, collaborate,
    ask questions, or discuss opportunities.
  </p>

  <div className="contact-container">

    <div className="contact-info">

      <div className="contact-item">
        <h3>Location:</h3>
        <p>Cincinnati, OH</p>
      </div>

      <div className="contact-item">
        <h3>Email:</h3>
        <p>zengma@mail.uc.edu</p>
      </div>

      <div className="contact-item">
        <h3>GitHub:</h3>
        <p>github.com/jason-zeng-sys</p>
      </div>

    </div>

  <form
  action="https://formspree.io/f/xaqkpdbw"
  method="POST"
  className="contact-form"
>
  <div className="form-row">
    <input
      type="text"
      name="name"
      placeholder="Your Full Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email Address"
      required
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <textarea
    name="message"
    placeholder="Write your message here..."
    required
  ></textarea>

  <button type="submit">Send Message</button>
</form>

  </div>
</section>
```

    </>


  );
}

export default App;