import Reveal from "./Reveal";
import { principles } from "../data/profile";

function Principles() {
  return (
    <section className="section" id="principles" aria-labelledby="principles-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Principles</p>
            <h2 className="h-section" id="principles-title">
              How I <span className="serif">work.</span>
            </h2>
          </div>
        </Reveal>

        <ol className="principles">
          {principles.map((item, index) => (
            <Reveal as="li" key={item.title} className="principle" delay={index * 70}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Principles;
