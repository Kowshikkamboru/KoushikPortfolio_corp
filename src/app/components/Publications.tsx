import { certifications, researchAndRecognition } from "../data/portfolio";

export default function Publications() {
  return (
    <section className="section band-white" id="research">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Research and recognition</span>
          <h2>Academic credibility that connects back to engineering practice.</h2>
          <p>
            The research, patent work, and certifications are not decoration.
            They show how I learn deeply, document clearly, and keep expanding
            the systems I can build.
          </p>
        </div>

        <div className="recognition-grid">
          {researchAndRecognition.map((item, idx) => (
            <article className="recognition-card" key={item.title} data-reveal>
              <div className="recognition-top">
                <div className="recognition-icon-wrap">
                  {idx === 0 ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : idx === 1 ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="recognition-label">{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="recognition-footer">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="recognition-link-btn">
                    <span>{item.meta}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </a>
                ) : (
                  <span className="recognition-meta-pill">{item.meta}</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="certification-block" data-reveal>
          <div className="cert-header">
            <span className="eyebrow">Certifications</span>
            <h3>Signals of structured learning</h3>
            <p>Verified programs and technical milestones.</p>
          </div>
          <div className="cert-tags-wrap">
            {certifications.map((certification) => (
              <span key={certification} className="cert-chip">
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                {certification}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
