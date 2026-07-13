import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/data";

const LABEL = { b: "Beginner", i: "Intermediate", a: "Advanced" } as const;

export default function Projects() {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">04 — PROJECTS</div>
              <h2 className="sec-title">Build something that moves</h2>
            </div>
            <p className="sec-lead">
              Hands-on builds, ordered from weekend project to serious engineering. The fastest way
              to actually learn.
            </p>
          </div>
        </Reveal>
        <div className="projects">
          {PROJECTS.map((p) => (
            <Reveal key={p.n}>
              <div className="proj">
                <span className={`lvl ${p.lvl}`}>{LABEL[p.lvl]}</span>
                <h4>{p.n}</h4>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
