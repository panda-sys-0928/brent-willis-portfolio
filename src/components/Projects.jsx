import { useRef, useState } from "react";

import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";
import { projects } from "../data/profile";

function Projects() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const project = projects[active];

  // Arrow keys move between tabs, per the WAI-ARIA tabs pattern.
  const onKeyDown = (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + projects.length) % projects.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="h-section" id="projects-title">
              Inside the <span className="serif">builds</span>.
            </h2>
            <p className="lede">
              Two representative projects drawn from the AI and commerce work in my roles — what was
              built on each layer, the problems that came up, and how they were solved.
            </p>
          </div>
        </Reveal>

        <Reveal className="case">
          <div className="case-tabs" role="tablist" aria-label="Projects" onKeyDown={onKeyDown}>
            {projects.map((item, index) => (
              <button
                key={item.name}
                ref={(el) => (tabs.current[index] = el)}
                type="button"
                role="tab"
                id={`case-tab-${index}`}
                aria-selected={index === active}
                aria-controls="case-panel"
                tabIndex={index === active ? 0 : -1}
                onClick={() => setActive(index)}
              >
                <span className="case-tab-num">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="case-tab-name">{item.name}</span>
                  <span className="case-tab-sector">{item.type}</span>
                </span>
              </button>
            ))}
          </div>

          <article
            key={project.name}
            className="case-panel"
            id="case-panel"
            role="tabpanel"
            aria-labelledby={`case-tab-${active}`}
          >
            <header className="case-head">
              <div>
                <p className="case-meta">
                  {project.role} · {project.context}
                </p>
                <h3>{project.name}</h3>
              </div>
              <a
                className="case-ref"
                href={project.reference.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>Comparable product</span>
                <strong>
                  {project.reference.label} <ArrowUpRight />
                </strong>
              </a>
            </header>

            <div className="case-overview">
              {project.overview.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <dl className="case-stack">
              {project.stack.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd className="tags">
                    {group.items.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="case-grid">
              <div>
                <h4 className="case-label">What I implemented</h4>
                <ul className="case-built">
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="case-label">Challenges &amp; solutions</h4>
                <ul className="case-challenges">
                  {project.challenges.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.problem}</p>
                      <p className="case-solution">{item.solution}</p>
                    </li>
                  ))}
                </ul>
                <div className="case-ops">
                  <h4 className="case-label">Deployment &amp; operations</h4>
                  <p>{project.operations}</p>
                </div>
                <div className="case-outcome">
                  <h4 className="case-label">Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
