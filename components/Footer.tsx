export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top">
              <span className="mark" />
              <span>
                Josh<b>Robotics</b>
              </span>
            </a>
            <p className="foot-note">
              A learning hub for modern robotics — teardowns, roadmaps, projects and careers. Built
              by Joshua Ciby. Not affiliated with the manufacturers featured.
            </p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h5>Explore</h5>
              <a href="#teardowns">Teardowns</a>
              <a href="#categories">Robot classes</a>
              <a href="#learn">Learn</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="foot-col">
              <h5>Grow</h5>
              <a href="#roadmaps">Roadmaps</a>
              <a href="#careers">Careers</a>
              <a href="#research">Research</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 · JoshRobotics · Joshua Ciby</span>
          <span>Next.js · TypeScript · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
