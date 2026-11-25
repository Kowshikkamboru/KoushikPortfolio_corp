"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openProject, setOpenProject] = useState(projects[0].id);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="section band-light" id="projects">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Proof of work</span>
          <h2>Case studies with the problem, architecture, and impact visible.</h2>
          <p>
            These projects are written for technical and business readers:
            what was difficult, how I designed around it, and what the work
            proves about my engineering judgment.
          </p>
        </div>

        <div className="filter-row" data-reveal aria-label="Project category filters" role="toolbar">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "is-active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="case-grid">
          {visibleProjects.map((project) => {
            const isOpen = openProject === project.id;
            return (
              <article
                className={`case-card ${isOpen ? "is-open" : ""}`}
                key={project.id}
                data-reveal
              >
                <div className="case-topline">
                  <span className="case-category-badge">{project.category}</span>
                  <span className="case-status-badge">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="case-subtitle">{project.subtitle}</p>

                <div className="tag-list compact">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="case-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenProject(isOpen ? "" : project.id)}
                >
                  <span>{isOpen ? "Collapse case breakdown" : "Explore full case study"}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 15.5L5 8.5 6.4 7.1 12 12.7l5.6-5.6L19 8.5l-7 7z" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="case-detail">
                    <div className="case-detail-block case-detail-problem">
                      <div className="case-detail-label">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        <span>The Problem</span>
                      </div>
                      <p>{project.problem}</p>
                    </div>

                    <div className="case-detail-block case-detail-arch">
                      <div className="case-detail-label">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                        </svg>
                        <span>System Architecture</span>
                      </div>
                      <p>{project.architecture}</p>
                    </div>

                    <div className="case-detail-block case-detail-impact">
                      <div className="case-detail-label">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                        </svg>
                        <span>Measurable Impact</span>
                      </div>
                      <p>{project.impact}</p>
                    </div>

                    <div className="evidence-box">
                      <span className="evidence-header">Verified Deliverables:</span>
                      <ul className="evidence-list">
                        {project.evidence.map((item) => (
                          <li key={item}>
                            <svg className="proof-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.links && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={link.href}
                            className="project-link-btn"
                          >
                            <span>{link.label}</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z" />
                              <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
