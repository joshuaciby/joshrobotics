import Reveal from "./Reveal";
import Image from "next/image";
import { ROBOTS } from "@/lib/data";

export default function TeardownGallery() {
  return (
    <section className="block" id="teardowns">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">01 — ROBOT TEARDOWNS</div>
              <h2 className="sec-title">Four machines, fully dissected</h2>
            </div>
            <p className="sec-lead">
              Two quadrupeds and two humanoids — the platforms defining what robots can do. Tap any
              card, then dive into the featured Go2 teardown below.
            </p>
          </div>
        </Reveal>
        <div className="robots">
          {ROBOTS.map((r) => (
            <Reveal key={r.id}>
              <div className="rcard" id={`robot-${r.id}`}>
                <div className="canvas">
                  <span className="flag">{r.flag}</span>
                  <span className={`status ${r.status[0]}`}>{r.status[1]}</span>
                  <div className="floor" />
                  <Image
  src={
    r.name === "Unitree Go2"
      ? "/images/robots/Unitree Go2/go2.jpg"
      : r.name === "Boston Dynamics Spot"
      ? "/images/robots/boston dynamics spot/spot.jpg"
      : r.name === "Tesla Optimus"
      ? "/images/robots/Tesla Optimus/OPTIMUS.jpg"
      : r.name === "Figure 02"
      ? "/images/robots/Figure 02/FIGURE 02.jpg"
      : "/images/robots/Unitree Go2/go2.jpg"
  }
  alt={r.name}
  width={500}
  height={350}
  className="w-full h-full object-cover rounded-xl"
/>
                </div>
                <div className="body">
                  <h3>{r.name}</h3>
                  <div className="origin">{r.origin}</div>
                  <div className="tagline">{r.tag}</div>
                  <div className="kv">
                    {r.kv.map(([k, v]) => (
                      <div key={k}>
                        <div className="k">{k}</div>
                        <div className="v">{v}</div>
                      </div>
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
