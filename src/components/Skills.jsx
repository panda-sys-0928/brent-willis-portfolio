import Reveal from "./Reveal";
import { education, skills } from "../data/profile";

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h2 className="h-section" id="skills-title">
              The <span className="serif">stack</span> behind the work.
            </h2>
          </div>
        </Reveal>

        <Reveal className="skills">
          {skills.map((group) => (
            <div className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="education">
          <div>
            <strong>{education.degree}</strong>
            <span>
              {education.school} · {education.detail}
            </span>
          </div>
          <span className="mono">{education.period}</span>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
