"use client";
import { useEffect, useState } from "react";
import { useSearch } from "./Search";

const LINKS = [
  ["Teardowns", "#teardowns"],
  ["Robots", "#categories"],
  ["Learn", "#learn"],
  ["Projects", "#projects"],
  ["Roadmaps", "#roadmaps"],
  ["Careers", "#careers"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const { open } = useSearch();
  const [scrolled, setScrolled] = useState(false);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="prog" style={{ width: `${prog}%` }} />
      <nav className={scrolled ? "scrolled" : ""}>
        <a className="brand" href="#top">
          <span className="mark" />
          <span>
            Josh<b>Robotics</b>
          </span>
        </a>
        <div className="nav-links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <div className="nav-search" onClick={open}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
            Search<kbd>⌘K</kbd>
          </div>
          <div className="burger" onClick={() => document.querySelector("#teardowns")?.scrollIntoView({ behavior: "smooth" })}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </nav>
    </>
  );
}
