import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section band-white" id="experience">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Experience</span>
          <h2>Roles where I converted learning into delivery.</h2>
          <p>
            My experience is early-career, but the ownership pattern is real:
            production mobile releases, automation, frontend delivery, AI/ML
            foundations, and leadership exposure.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`} data-reveal>
              <div className="timeline-meta">
                <span className="timeline-period-pill">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{item.period}</span>
                </span>
                <span className={`timeline-type-pill type-${item.type.toLowerCase().replace(/[^a-z]/g, "")}`}>
                  {item.type}
                </span>
              </div>
              <div className="timeline-body">
                <div className="timeline-header-wrap">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">
                    <span className="company-name">{item.company}</span>
                    <span className="location-tag">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {item.location}
                    </span>
                  </p>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                <ul className="timeline-impact-list">
                  {item.impact.map((impact) => (
                    <li key={impact}>
                      <svg className="proof-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
