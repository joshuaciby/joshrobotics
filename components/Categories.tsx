import Reveal from "./Reveal";
import RobotSVG from "./RobotSVG";
import { CATEGORIES } from "@/lib/data";

export default function Categories() {
  return (
    <section className="block" id="categories">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">02 — ROBOT CLASSES</div>
              <h2 className="sec-title">The families of modern robots</h2>
            </div>
            <p className="sec-lead">
              Every robot on the factory floor belongs to a family. Here&apos;s how the big five
              differ — with real examples of each.
            </p>
          </div>
        </Reveal>
        <div className="cats">
          {CATEGORIES.map((c) => (
            <Reveal key={c.kind}>
              <div className="cat">
                <div className="visual">
                  <RobotSVG kind={c.kind} c1={c.c1} c2={c.c2} />
                </div>
                <div>
                  <h4>
                    {c.name} <span className="badge">{c.badge}</span>
                  </h4>
                  <p>{c.desc}</p>
                  <div className="exs">
                    {c.ex.map((e) => (
                      <span key={e} className="ex">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
