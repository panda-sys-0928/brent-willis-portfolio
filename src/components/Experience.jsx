import { useState } from "react";

import Reveal from "./Reveal";
import { Download, Plus } from "./icons";
import { asset } from "../asset";
import { experience, profile } from "../data/profile";

function Experience() {
  // The current role starts open; the rest expand on click.
  const [open, setOpen] = useState(() => new Set([0]));

  const toggle = (index) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="h-section" id="experience-title">
              A decade of <span className="serif">production</span> software.
            </h2>
          </div>
          <a
            className="btn btn-ghost btn-sm"
            href={asset(profile.resume)}
            download="Brent-Willis-Resume.pdf"
          >
            <Download /> Full résumé
          </a>
        </Reveal>

        <Reveal className="roles">
          {experience.map((job, index) => {
            const isOpen = open.has(index);
            const bodyId = `role-${index}`;
            return (
              <div key={`${job.company}-${job.period}`} className={`role ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="role-head"
                  aria-expanded={isOpen}
                  aria-controls={bodyId}
                  onClick={() => toggle(index)}
                >
                  <span className="role-period">{job.period}</span>
                  <span>
                    <span className="role-title">{job.role}</span>
                    <span className="role-company">
                      {job.company} · {job.location}
                    </span>
                  </span>
                  <span className="role-toggle" aria-hidden="true">
                    <Plus />
                  </span>
                </button>
                <div className="role-body" id={bodyId}>
                  <div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
