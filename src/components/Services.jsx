import Reveal from "./Reveal";
import { practices } from "../data/profile";

function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="h-section" id="services-title">
              One engineer from <span className="serif">first idea</span> to production.
            </h2>
            <p className="lede">
              Four practices, one person accountable for all of them — the engineer who scopes
              the work is the engineer who ships and supports it.
            </p>
          </div>
        </Reveal>

        <div className="practices">
          {practices.map((practice, index) => (
            <Reveal key={practice.title} className="practice" delay={index * 80}>
              <span className="practice-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
              <div className="tags">
                {practice.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
