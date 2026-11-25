import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div data-reveal>
            <span className="eyebrow">Contact</span>
            <h2>For serious teams building real products, I am ready to talk.</h2>
            <p>
              I am interested in software engineering, AI systems, frontend,
              mobile, and data-focused roles where the work rewards ownership,
              learning speed, and clear problem solving.
            </p>
          </div>

          <div className="contact-actions" data-reveal>
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <span>Email me</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16v12H4V6zm2 2v.2l6 4.2 6-4.2V8H6zm12 8v-5.4l-6 4.2-6-4.2V16h12z" />
              </svg>
            </a>
            <a className="button button-ghost dark" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
            </a>
            <a className="button button-ghost dark" href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-details" data-reveal>
          <div>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <span>Phone</span>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
          </div>
          <div>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
