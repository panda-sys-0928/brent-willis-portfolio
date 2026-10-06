import { useEffect, useRef, useState } from "react";

import Reveal from "./Reveal";
import { loopRuns, loopStages } from "../data/profile";

// Which stage each terminal line belongs to (by line index).
const STAGE_OF_LINE = [0, 1, 2, 3, 3, 4];
const LINE_MS = 950;
const HOLD_MS = 2600;

function lineTone(text) {
  if (text.startsWith("✓")) return "ok";
  if (text.startsWith("!")) return "warn";
  return "";
}

function WorkflowLoop() {
  const [run, setRun] = useState(0);
  const [shown, setShown] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = loopRuns[run].lines;
  const visible = reduceMotion ? lines.length : shown;

  // Only animate while the demo is on screen.
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return undefined;

    const done = shown >= lines.length;
    const timer = setTimeout(
      () => {
        if (done) {
          setRun((r) => (r + 1) % loopRuns.length);
          setShown(0);
        } else {
          setShown((s) => s + 1);
        }
      },
      done ? HOLD_MS : LINE_MS,
    );
    return () => clearTimeout(timer);
  }, [shown, inView, lines.length, reduceMotion]);

  const choose = (index) => {
    setRun(index);
    setShown(0);
  };

  const activeStage = visible === 0 ? -1 : STAGE_OF_LINE[visible - 1];
  const finished = visible >= lines.length;

  return (
    <section className="section" id="workflow" ref={sectionRef} aria-labelledby="loop-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">How I build AI workflows</p>
            <h2 className="h-section" id="loop-title">
              Agents do the work. <span className="serif">Guardrails</span> keep it reliable.
            </h2>
            <p className="lede">
              Every workflow follows the same loop — and every step that talks to a model or an
              external API is validated, retried or recovered before anyone sees the result.
            </p>
          </div>
        </Reveal>

        <div className="loop">
          <Reveal className="terminal">
            <div className="terminal-bar">
              <i />
              <i />
              <i />
              <span className="mono">EXAMPLE RUN</span>
            </div>

            <div className="objectives" role="group" aria-label="Example workflow">
              {loopRuns.map((item, index) => (
                <button
                  key={item.objective}
                  type="button"
                  aria-pressed={index === run}
                  onClick={() => choose(index)}
                >
                  {item.objective}
                </button>
              ))}
            </div>

            <div className="terminal-body" aria-live="polite">
              <div className="cmd">
                <b>$</b> workflow run "{loopRuns[run].objective}"
              </div>
              {lines.slice(0, visible).map(([num, text]) => (
                <div key={`${run}-${num}`} className={`t-line ${lineTone(text)}`}>
                  <span className="n">{num}</span>
                  <span>{text}</span>
                </div>
              ))}
              {!finished ? <span className="caret" aria-hidden="true" /> : null}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="stages">
              {loopStages.map((stage, index) => {
                const state =
                  finished || index < activeStage
                    ? "is-done"
                    : index === activeStage
                      ? "is-active"
                      : "";
                return (
                  <li key={stage.title} className={`stage ${state}`}>
                    <span className="stage-num">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{stage.title}</h3>
                      <p>{stage.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="loop-note">Illustrative runs · patterns from production work</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WorkflowLoop;
