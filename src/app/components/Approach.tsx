import { operatingModel } from "../data/portfolio";

export default function Approach() {
  return (
    <section className="section band-ink" id="approach">
      <div className="container">
        <div className="section-heading align-left inverse" data-reveal>
          <span className="eyebrow">Engineering method</span>
          <h2>My approach is to turn uncertainty into a system that can ship.</h2>
          <p>
            Good engineering is not only syntax. It is framing the problem,
            choosing the right constraint, finding the first complete slice,
            and designing the parts that keep working after launch.
          </p>
        </div>

        <div className="method-track">
          {operatingModel.map((step, index) => (
            <article className="method-step" key={step.title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="ai-principles" data-reveal>
          <div>
            <span className="eyebrow">AI-assisted development</span>
            <h3>I use AI like a senior review surface, not as autopilot.</h3>
          </div>
          <ul>
            <li>Architecture review: ask the model to find fragile assumptions before I implement.</li>
            <li>Edge-case generation: pressure-test auth, API, state, and failure flows.</li>
            <li>Component scaffolding: generate structure, then write and verify the actual logic.</li>
            <li>Security and release checks: review token handling, CORS, injection risk, and deployment steps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
