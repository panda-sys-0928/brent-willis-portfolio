import { useEffect, useRef } from "react";

/**
 * Drifting nodes joined by faint lines — agents and services talking to each
 * other. Nodes near the cursor light up and link to it. Colours come from the
 * --node / --line CSS tokens, so the canvas follows the theme.
 */
function NetworkCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let nodes = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const colours = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        node: styles.getPropertyValue("--node").trim(),
        line: styles.getPropertyValue("--line").trim(),
      };
    };
    let palette = colours();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Denser on the right, where there is no copy to compete with.
      const count = Math.round(Math.min(110, (width * height) / 11000));
      nodes = Array.from({ length: count }, () => {
        const bias = Math.random() < 0.7 ? 0.45 + Math.random() * 0.55 : Math.random();
        return {
          x: bias * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 1 + Math.random() * 1.6,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDist = 120;

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(${palette.line}, ${0.16 * (1 - d / linkDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dp = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        const near = dp < 170;
        if (near) {
          ctx.strokeStyle = `rgba(${palette.node}, ${0.55 * (1 - dp / 170)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${palette.node}, ${near ? 0.95 : 0.55})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, near ? a.r + 1.2 : a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      if (reduceMotion) draw();
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    // Re-read colours when the theme toggles.
    const themeObserver = new MutationObserver(() => {
      palette = colours();
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    draw();
    window.addEventListener("resize", resize);
    const host = canvas.parentElement;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}

export default NetworkCanvas;
