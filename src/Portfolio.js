import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, ChevronDown, Menu, X, Code, Briefcase, GraduationCap, User, Star } from 'lucide-react';
import './App.css';
import logo1 from './profilepic.jpg'; 
import logo from './logo.png'
// Assuming you have a logo image in assets folder

// Navigation items
const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap }
];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Personal Information
  const personalInfo = {
    name: "Mohammad Razak Abdul Rasheeth",
    title: "Full-Stack Developer",
    subtitle: "Software Engineer | Skilled in JavaScript, React, Node.js, Java, Express & MongoDB",
    description: "👋 Hi, I'm Mohammad Razak, a full-stack developer passionate about building impactful, user-first web and mobile solutions. I specialize in MERN and React/Node.js with specialty in authentication, real-time systems, and deployment on zero-cost platforms.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "mrazak338@gmail.com",
    phone: "+91 9677726470",
    linkedin: "https://linkedin.com/in/mohammadrazak-abdulrasheeth",
    github: "https://github.com/MohammadRazaak"
  };

  // Skills
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Redux", "JavaScript", "CSS3", "Material UI", "React Router", "HTML5", "Responsive Design"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Socket.io", "RESTful APIs", "JWT Authentication", "Java"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase"]
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "Netlify", "Vercel", "Heroku", "Railway", "Google APIs", "Microsoft Azure"]
    }
  ];

  // Projects
  const projects = [
    {
      title: "Raz Insurance",
      description: "A sleek insurance platform enabling users to buy, manage, and verify policies and coverage online.",
      features: [
        "Full-stack with React, Redux, Node, Express & PostgreSQL via Prisma ORM",
        "Customer/admin roles with JWT-based auth & admin approval flows",
        "Responsive design and SEO-friendly PWA hosted on Netlify and Railway/Heroku"
      ],
      tech: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Prisma ORM"],
      liveUrl: "https://razinsurance.netlify.app/",
      githubUrl: "https://github.com/MohammadRazaak",
      status: "Production Ready"
    },
    {
      title: "RazChatz",
      description: "A real-time chat application built with React and Socket.io.",
      features: [
        "Instant messaging, seen/delivered statuses, emoji picker",
        "JWT authentication, Web Notifications, service-worker optimized for PWA",
        "Hosted as a PWA for installable mobile experience"
      ],
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Material UI" , "Express"],
      liveUrl: "https://razchatz.netlify.app/",
      githubUrl: "https://github.com/MohammadRazaak",
      status: "Live"
    },
    {
      title: "Placement Training System (PTS)",
      description: "An end-to-end placement prep suite for students and TPOs.",
      features: [
        "MERN stack with MongoDB and Express",
        "Integrated Google Sheets API for live job data management",
        "Firebase Storage for image hosting",
        "JWT authentication, role-based dashboards, quizzes, video lessons"
      ],
      tech: ["React", "Node.js", "MongoDB", "Google Sheets API", "Firebase"],
      liveUrl: "https://pts-by-razak.netlify.app",
      githubUrl: "https://github.com/MohammadRazaak",
      status: "Live"
    }
  ];

  // Experience
  const experience = [
    {
      company: "ValueMomentum",
      position: "Software Engineer Intern",
      duration: "Feb 2025 - Jul 2025",
      location: "Coimbatore, Tamil Nadu, India",
      type: "On-site",
      description: "Working with Microsoft Azure and developing scalable software solutions.",
      achievements: [
        "Developing enterprise-level applications",
        "Working with cloud technologies",
        "Collaborating with cross-functional teams"
      ]
    } ,{
      company: "ValueMomentum",
      position: "Software Engineer ",
      duration: "Jul 2025 - Present",
      location: "Coimbatore, Tamil Nadu, India",
      type: "On-site",
      description: "Working with Spring-Boot , Microservices , Hibernate , RESTful Api , Docker , AWS ,Kafka",
      achievements: [
        "Developing enterprise-level applications",
        "Working with cloud technologies",
        "Collaborating with cross-functional teams"
      ]
    }
  ];

  // Education
  const education = [
    {
      institution: "KG College of Arts and Science",
      degree: "Bachelor of Computer Application",
      duration: "Jul 2022 - May 2025",
      location: "Coimbatore, Tamil Nadu, India",
      specialization: "React.js , Node.js, MongoDB, Express.js" 
    },
    {
      institution: "G.K.D Matric Higher Secondary School",
      degree: "Higher Secondary Education",
      duration: "2020 - 2022",
      location: "Tamil Nadu, India"
    }
  ];

  // Achievements
  const achievements = [
    "Launched multiple production-ready apps on no-cost hosting",
    "Built admin workflows for policy/coverage approvals",
    "Synchronized dynamic job data via Google Sheets API",
    "Engineered real-time chat with seen indicators and notifications",
    "Enhanced UX with responsive design, PWA install prompts, and secure data handling"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo-image" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-button ${activeSection === item.id ? 'nav-button-active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-button ${activeSection === item.id ? 'mobile-nav-button-active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="profile-image-container">
            <div className="profile-image-outer">
              <div className="profile-image-inner">
                <img
                  src={logo1} // Replace with your actual image URL
                  alt="Profile"
                  className="profile-image"
                />

                
              </div>
              <div className="status-indicator">
                <div className="status-dot"></div>
              </div>
            </div>
          </div>
          
          <h1 className="hero-title">
            <span className="first-name">
              {personalInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="last-name">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          <p className="hero-subtitle">
            {personalInfo.subtitle}
          </p>
          
          <div className="hero-buttons">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button linkedin-button"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button github-button"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-button email-button"
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="scroll-button"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-left">
              <p className="about-description">
                {personalInfo.description}
              </p>
              
              <div className="location-card">
                <MapPin size={24} className="location-icon" />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="achievements-section">
                <h3 className="achievements-title">Key Achievements</h3>
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <Star size={16} className="achievement-icon" />
                    <span className="achievement-text">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-right">
              <h3 className="skills-title">Tech Stack</h3>
              <div className="skills-container">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h4 className="skill-group-title">{skillGroup.category}</h4>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-container">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-details">
                    <p className="experience-duration">{exp.duration}</p>
                    <p className="experience-location">{exp.location} • {exp.type}</p>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="achievement-item">
                      <div className="achievement-bullet"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <ul className="project-features">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="project-feature">
                        <div className="feature-bullet"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-buttons">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button live-button"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button code-button"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          
          <div className="education-container">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    {edu.specialization && (
                      <p className="education-specialization">
                        Specialization: <span className="specialization-text">{edu.specialization}</span>
                      </p>
                    )}
                  </div>
                  <div className="education-details">
                    <p className="education-duration">{edu.duration}</p>
                    <p className="education-location">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            © 2025 {personalInfo.name}. Built with React & Pure CSS.
          </p>
          <div className="footer-social">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
