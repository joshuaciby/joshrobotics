"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { GO2_PARTS } from "@/lib/data";

export default function Go2Anatomy() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let best = 0;
      let bd = Infinity;
      GO2_PARTS.forEach((_, i) => {
        const el = document.getElementById(`part${i}`);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top - window.innerHeight * 0.4);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (i: number) =>
    document.getElementById(`part${i}`)?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section
      className="block"
      id="anatomy"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        paddingTop: 80,
      }}
    >
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">01.1 — FEATURED · UNITREE GO2</div>
              <h2 className="sec-title">Inside a quadruped, part by part</h2>
            </div>
            <p className="sec-lead">
              The Go2 is the most dissected robot on earth — the same anatomy repeats, cheaper, in
              almost every rival. Follow the signal from one joint outward.
            </p>
          </div>
        </Reveal>
        <div className="flow">
          <div className="flow-rail">
            <ul>
              {GO2_PARTS.map((d, i) => (
                <li key={d.n} className={i === active ? "on" : ""} onClick={() => jump(i)}>
                  <span className="n">{d.n}</span> {d.t}
                </li>
              ))}
            </ul>
          </div>
          <div className="parts">
            {GO2_PARTS.map((d) => (
              <Reveal key={d.n}>
                <div className="part" id={`part${GO2_PARTS.indexOf(d)}`}>
                  <div className="top">
                    <span className="num">{d.n}</span>
                    <h3>{d.t}</h3>
                    <span className="tag">{d.tag}</span>
                  </div>
                  <p>{d.p}</p>
                  <div className="facts">
                    {d.c.map((c) => (
                      <span key={c} className={`chip${d.tag === "thermal" || d.tag === "power" ? " warm" : ""}`}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
