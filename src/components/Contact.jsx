import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { profile } from "../data/profile";

function Contact() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <Reveal className="cta">
            <p className="eyebrow">Open to new work</p>
            <h2 className="h-section" id="contact-title">
              Tell me what you want to <span className="serif">build.</span>
            </h2>
            <p className="lede">
              An AI feature that has to work with your real systems, a backend that needs to be
              dependable, or a product that needs one engineer who owns it end to end.
            </p>
            <div className="cta-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email} <ArrowRight />
              </a>
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">{profile.initials}</span>
            {profile.name}
          </a>
          <small>
            {profile.location} · © {year}
          </small>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
