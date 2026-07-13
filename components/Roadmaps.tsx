import Reveal from "./Reveal";
import { ROADMAPS } from "@/lib/data";

export default function Roadmaps() {
  return (
    <section
      className="block"
      id="roadmaps"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">05 — ROADMAPS</div>
              <h2 className="sec-title">Know what to learn next</h2>
            </div>
            <p className="sec-lead">
              Clear paths from zero to job-ready. No guesswork about what order things go in.
            </p>
          </div>
        </Reveal>
        <div className="roadmaps">
          {ROADMAPS.map((r) => (
            <Reveal key={r.n}>
              <div className="rm">
                <h4>{r.n}</h4>
                <div className="steps">
                  {r.s.map((s, i) => (
                    <span key={s} style={{ display: "contents" }}>
                      <span className="step">{s}</span>
                      {i < r.s.length - 1 && <span className="arr">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
