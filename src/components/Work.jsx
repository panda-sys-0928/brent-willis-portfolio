import Reveal from "./Reveal";
import { work } from "../data/profile";

function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h-section" id="work-title">
              Shipped where <span className="serif">reliability</span> matters.
            </h2>
            <p className="lede">
              AI, healthcare, Web3, payments and commerce — different domains, the same job:
              dependable services and interfaces that hold up in production.
            </p>
          </div>
        </Reveal>

        <div className="work-grid">
          {work.map((item, index) => (
            <Reveal as="article" key={item.company} className="work-card" delay={index * 70}>
              <div className="work-meta">
                <span>{item.sector}</span>
                <span>{item.company}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="work-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {item.stack.map((tag) => (
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

export default Work;
