import Image from "next/image";
import { heroMetrics, profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <Image
        src="/assets/2.jpg"
        alt="Amboru Koushik speaking at Google Cloud Agentic AI Day"
        fill
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        className="hero-image"
      />
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="hero-kicker" data-reveal>
          Production engineer. AI builder. Product problem solver.
        </p>
        <h1 data-reveal>{profile.name}</h1>
        <p className="hero-lead" data-reveal>
          {profile.headline}
        </p>
        <p className="hero-copy" data-reveal>
          {profile.summary}
        </p>
        <div className="hero-actions" data-reveal>
          <a href="#projects" className="button button-primary">
            <span>Review case studies</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z" />
            </svg>
          </a>
          <a href="#approach" className="button button-ghost">
            <span>See my engineering method</span>
          </a>
        </div>
      </div>

      <div className="hero-metrics" aria-label="Portfolio proof points">
        {heroMetrics.map((metric) => (
          <div className="hero-metric" key={metric.label} data-reveal>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
