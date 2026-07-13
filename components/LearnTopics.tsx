import Reveal from "./Reveal";
import { TOPICS } from "@/lib/data";

export default function LearnTopics() {
  return (
    <section
      className="block"
      id="learn"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">03 — LEARN</div>
              <h2 className="sec-title">Everything worth knowing</h2>
            </div>
            <p className="sec-lead">
              From your first blink of an LED to full autonomy stacks. Pick a topic — each links into
              a roadmap.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="topics">
            {TOPICS.map((t) => (
              <div className="topic" key={t}>
                <span className="dot" />
                {t}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
