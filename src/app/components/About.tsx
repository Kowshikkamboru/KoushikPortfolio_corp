import {
  education,
  executiveSignals,
  profile,
  roleLenses,
  skillGroups,
} from "../data/portfolio";

function getSkillGroupIcon(title: string) {
  switch (title.toLowerCase()) {
    case "build":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="2"
            y="3"
            width="20"
            height="7"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="2"
            y="14"
            width="20"
            height="7"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="6" cy="6.5" r="1" fill="currentColor" />
          <circle cx="6" cy="17.5" r="1" fill="currentColor" />
        </svg>
      );
    case "ai and data":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "ship":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3m0 0l5.5-5.5a4.24 4.24 0 016 6L15 18l-6-6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "foundation":
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline
            points="4 17 10 11 4 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="19"
            x2="20"
            y2="19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function getSignalIcon(index: number) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline
          points="16 18 22 12 16 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="8 6 2 12 8 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section className="section band-light" id="positioning">
      <div className="container">
        <div className="section-heading align-left" data-reveal>
          <span className="eyebrow">Positioning</span>
          <h2>Clear signal for leaders who need ownership, not only effort.</h2>
          <p>
            I am not presenting myself as a desperate generalist. I am
            presenting evidence: production releases, applied AI, data
            thinking, and the habit of solving the whole problem around the
            code.
          </p>
        </div>

        <div className="signal-grid">
          {executiveSignals.map((signal, idx) => (
            <article className={`signal-card signal-card-${idx}`} key={signal.title} data-reveal>
              <div className="signal-top">
                <div className="signal-icon-box">
                  {getSignalIcon(idx)}
                </div>
                <div className="signal-titles">
                  <span className="signal-target">{signal.title}</span>
                  <span className="signal-pill">Executive Brief</span>
                </div>
              </div>
              <p className="signal-body">{signal.point}</p>
            </article>
          ))}
        </div>

        <div className="split-section">
          <div className="narrative-block" data-reveal>
            <span className="eyebrow">Core profile</span>
            <h3>What I bring into a team</h3>
            <p>
              I work best where there is ambiguity, pressure, and a real user
              at the end. My strongest pattern is connecting the pieces that
              often get separated: UI, API contracts, data quality, auth,
              deployment, business constraints, and user trust.
            </p>
            <p>
              I use AI tools seriously, but not blindly. They help me review
              architecture, generate edge cases, document faster, and close
              knowledge gaps. The final engineering judgment stays mine.
            </p>
            <div className="contact-strip">
              <a href={`mailto:${profile.email}`} className="contact-chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>{profile.email}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-chip">
                <span>LinkedIn</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-chip">
                <span>GitHub</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="role-grid" aria-label="Role fit areas">
            {roleLenses.map((role) => (
              <article className="role-card" key={role.title} data-reveal>
                <div className="role-card-header">
                  <span className="role-badge">Specialization</span>
                  <h3>{role.title}</h3>
                </div>
                <div className="role-fit-box">
                  <p>{role.fit}</p>
                </div>
                <div className="role-proof-section">
                  <span className="proof-label">Key Production Proofs</span>
                  <ul className="role-proof-list">
                    {role.proof.map((item) => (
                      <li key={item}>
                        <svg className="proof-check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skill-section">
          <div className="section-heading compact" data-reveal>
            <span className="eyebrow">Capability map</span>
            <h2>Skills organized by how products actually ship.</h2>
            <p>From mobile application frontends to production deployment pipelines and applied AI models.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article
                className={`skill-card skill-card-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={group.title}
                data-reveal
              >
                <div className="skill-card-top">
                  <div className="skill-icon-badge">
                    {getSkillGroupIcon(group.title)}
                  </div>
                  <span className="skill-count-badge">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="skill-card-title-wrap">
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-chips-wrap">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      <span className="skill-chip-dot" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree} data-reveal>
              <div className="edu-top">
                <span className="edu-period">{item.period}</span>
                <span className="edu-grade">{item.result}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="edu-school">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{item.school}</span>
              </p>
              <ul className="edu-notes-list">
                {item.notes.map((note) => (
                  <li key={note}>
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
