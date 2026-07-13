import Reveal from "./Reveal";
import { CAREERS } from "@/lib/data";

export default function Careers() {
  return (
    <section className="block" id="careers">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">06 — CAREERS &amp; ABROAD</div>
              <h2 className="sec-title">Turn skills into a career</h2>
            </div>
            <p className="sec-lead">
              Internships, a Masters abroad, or straight into industry — the moves that get robotics
              people hired.
            </p>
          </div>
        </Reveal>
        <div className="careers">
          {CAREERS.map((c) => (
            <Reveal key={c.n}>
              <div className="cc">
                <div className="ic">{c.ic}</div>
                <h4>{c.n}</h4>
                <p>{c.d}</p>
                <div className="tags">
                  {c.tags.map((t) => (
                    <span key={t} className="tg">
                      {t}
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
