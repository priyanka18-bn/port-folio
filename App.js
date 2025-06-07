import './App.css'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Award, Code, Database, Palette, Globe, User, GraduationCap, Briefcase, Star, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedProject, setExpandedProject] = useState(false);

  const skills = {
    programming: ['HTML', 'CSS', 'C', 'Python'],
    database: ['SQL'],
    tools: ['Figma', 'Canva', 'Unix OS'],
    languages: ['Kannada (Fluent)', 'English (Fluent)']
  };

  const education = [
    {
      year: '2026',
      degree: 'B.E (Computer Science Engineering)',
      institute: 'Malnad College Of Engineering, Hassan',
      score: '9 CGPA'
    },
    {
      year: '2022',
      degree: '12th (State Board)',
      institute: 'Hassan P U College (PCMB)',
      score: '94%'
    },
    {
      year: '2020',
      degree: '10th (State Board)',
      institute: 'Karnataka Public School',
      score: '88.64%'
    }
  ];

  const certifications = [
    'NPTEL - Soft Skill Development',
    'NPTEL - Human Computer Interaction'
  ];

  const softSkills = [
    'Problem-Solving',
    'Team Collaboration',
    'Effective Communication',
    'Time Management'
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Profile Image */}
            <div className="profile-wrapper">
              <div className="profile-image">
                <User size={64} className="text-white opacity-80" />
              </div>
              <div className="profile-badge">
                <Star size={16} className="text-yellow-800" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <h1 className="profile-name">
                Priyanka B N
              </h1>
              <p className="profile-title">Computer Science Engineering Student</p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>priyankashettyp2@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>8971007146</span>
                </div>
                <div className="contact-item">
                  <Calendar size={16} />
                  <span>28-03-2004</span>
                </div>
              </div>
              
              <div className="address-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Basavapattana, Arkalgud, Hassan-573113</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-menu">
            {[
              { id: 'about', label: 'About', icon: User },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'skills', label: 'Skills', icon: Code }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`nav-button ${activeSection === id ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="section-content">
            <div className="card">
              <h2 className="card-title">
                <User className="text-sky-600" />
                About Me
              </h2>
              <div className="about-grid">
                <div>
                  <h3>Profile</h3>
                  <p className="about-text">
                    I'm a passionate Computer Science Engineering student at Malnad College of Engineering, Hassan, 
                    currently maintaining a 9 CGPA. I'm enthusiastic about web development, problem-solving, and 
                    creating user-friendly applications that make a difference.
                  </p>
                </div>
                <div>
                  <h3>Soft Skills</h3>
                  <div className="grid-2-small">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card">
              <h2 className="card-title">
                <Award className="text-sky-600" />
                Certifications
              </h2>
              <div className="cert-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-card">
                    <div className="cert-content">
                      <div className="cert-icon">
                        <Award size={20} className="text-white" />
                      </div>
                      <span className="cert-text">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="section-content">
            <div className="card">
              <h2 className="card-title">
                <GraduationCap className="text-sky-600" />
                Education
              </h2>
              <div>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-card">
                      <div className="education-content">
                        <div className="education-info">
                          <div className="education-header">
                            <div className="education-icon">
                              <GraduationCap size={24} className="text-white" />
                            </div>
                            <div>
                              <h3 className="education-degree">{edu.degree}</h3>
                              <p className="education-institute">{edu.institute}</p>
                            </div>
                          </div>
                        </div>
                        <div className="education-meta">
                          <div className="education-year">
                            {edu.year}
                          </div>
                          <div className="education-score">
                            {edu.score}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="section-content">
            <div className="card">
              <h2 className="card-title">
                <Briefcase className="text-sky-600" />
                Projects
              </h2>
              <div>
                <div className="project-card">
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">SmartCart Planner</h3>
                      <p className="project-subtitle">Web-based Grocery Management Application</p>
                    </div>
                    <button
                      onClick={() => setExpandedProject(!expandedProject)}
                      className="expand-button"
                    >
                      {expandedProject ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  <div className="project-description">
                    <p>
                      A web-based grocery management application designed to help users simplify and organize their shopping experience.
                    </p>
                  </div>

                  {expandedProject && (
                    <div className="project-details">
                      <div className="project-section">
                        <h4>Key Features:</h4>
                        <ul className="project-list">
                          <li>Categorized shopping lists</li>
                          <li>Expiry tracking system</li>
                          <li>Smart reminders</li>
                          <li>User authentication</li>
                          <li>Cross-device synchronization</li>
                        </ul>
                      </div>
                      <div className="project-section">
                        <h4>Technology Stack:</h4>
                        <p className="about-text">Modern web technologies for data storage and dynamic interactions</p>
                      </div>
                    </div>
                  )}

                  <div className="project-tags">
                    {['Web Development', 'User Experience', 'Data Management'].map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="section-content">
            <div className="grid-2">
              {/* Programming Languages */}
              <div className="card">
                <h3 className="card-title">
                  <Code className="text-sky-600" />
                  Programming Languages
                </h3>
                <div className="space-y-3">
                  {skills.programming.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="card">
                <h3 className="card-title">
                  <Database className="text-sky-600" />
                  Database
                </h3>
                <div className="space-y-3">
                  {skills.database.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="card">
                <h3 className="card-title">
                  <Palette className="text-sky-600" />
                  Tools & Technologies
                </h3>
                <div className="space-y-3">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="card">
                <h3 className="card-title">
                  <Globe className="text-sky-600" />
                  Languages
                </h3>
                <div className="space-y-3">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-declaration">
            "I hereby declare that all the statements made above are correct to the best of my knowledge."
          </p>
          <p className="footer-name">Priyanka B N</p>
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/priyanka-b-n-423a92267"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href="mailto:priyankashettyp2@gmail.com"
              className="footer-link"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;