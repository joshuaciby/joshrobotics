import Reveal from "./Reveal";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  return (
    <section className="block" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="idx">08 — CONTACT</div>
              <h2 className="sec-title">Let&apos;s talk robotics</h2>
            </div>
            <p className="sec-lead">
              Questions, collaborations, or just want to nerd out about actuators? Reach out.
            </p>
          </div>
        </Reveal>
        <div className="contact">
          <Reveal className="contact-card">
            <h3>Get in touch</h3>
            <p>
              Whether you&apos;re a student stuck on a build, a company exploring quadrupeds, or a
              fellow engineer — the inbox is open. I reply to genuine robotics questions.
            </p>
          </Reveal>
          <Reveal className="cinfo">
            <a className="crow" href={`mailto:${CONTACT.email}`}>
              <div className="ic">✉️</div>
              <div>
                <div className="k">Email for enquiries</div>
                <div className="v">{CONTACT.email}</div>
              </div>
            </a>
            <a className="crow" href={`tel:${CONTACT.phoneHref}`}>
              <div className="ic">📞</div>
              <div>
                <div className="k">Phone</div>
                <div className="v">{CONTACT.phone}</div>
              </div>
            </a>
            <a className="crow" href={CONTACT.linkedinHref} target="_blank" rel="noreferrer">
              <div className="ic">in</div>
              <div>
                <div className="k">LinkedIn</div>
                <div className="v">{CONTACT.linkedin}</div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
