"use client";
import Reveal from "./Reveal";
import { useSearch } from "./Search";

export default function Hero() {
  const { open } = useSearch();
  return (
    <header id="top">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">
            <span className="dot" />
            Robotics learning hub · Beginner → Advanced
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="hero">
            <span className="brandword">JoshRobotics</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="hero-tag">Modern industrial robots — taken apart, and taught.</div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="hero-sub">
            Interactive teardowns of the machines shaping industry —{" "}
            <b>Unitree Go2, Boston Dynamics Spot, Tesla Optimus, Figure 02</b> — alongside learning
            roadmaps, hands-on projects, and careers. Built for students, engineers, and anyone
            obsessed with how robots actually work.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="hero-searchbar" onClick={open}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A606E" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
            <span>Search teardowns, topics, projects…</span>
            <span className="k">⌘K</span>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="hero-btns">
            <a href="#teardowns" className="btn primary">
              Explore teardowns →
            </a>
            <a href="#learn" className="btn ghost">
              Start learning
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
