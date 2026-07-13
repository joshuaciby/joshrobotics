import Reveal from "./Reveal";
import { PAPERS } from "@/lib/data";

const LV = { easy: "Foundational", med: "Core", hard: "Advanced" } as const;

export default function Research() {
  return (
    <section
      className="block"
      id="research"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">07 — RESEARCH</div>
              <h2 className="sec-title">Papers, in plain English</h2>
            </div>
            <p className="sec-lead">
              The ideas the robots above are built on — explained so you don&apos;t need a PhD to
              follow along.
            </p>
          </div>
        </Reveal>
        <div className="papers">
          {PAPERS.map((p) => (
            <Reveal key={p.t}>
              <div className="paper">
                <div className="meta">
                  <span className={`plv ${p.lv}`}>{LV[p.lv]}</span>
                  <span className="yr">{p.y}</span>
                </div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
                <div className="take">{p.take}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
