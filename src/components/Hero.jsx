import NetworkCanvas from "./NetworkCanvas";
import { ArrowRight, Download } from "./icons";
import { asset } from "../asset";
import { marquee, profile, stats } from "../data/profile";

function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <NetworkCanvas />

        <div className="container hero-inner">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.role}
          </p>

          <h1 className="h-display" id="hero-title">
            Production AI, built for <span className="serif">real workflows.</span>
          </h1>

          <p className="lede">{profile.summary}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">
              Start a conversation <ArrowRight />
            </a>
            <a
              className="btn btn-ghost"
              href={asset(profile.resume)}
              download="Brent-Willis-Resume.pdf"
            >
              <Download /> Download résumé
            </a>
          </div>

          <div className="hero-foot">
            <dl className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <span className="cursor-hint" aria-hidden="true">
              Move your cursor
            </span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
