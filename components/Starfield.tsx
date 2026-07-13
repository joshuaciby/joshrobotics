"use client";
import { useEffect, useRef } from "react";

/** Mouse-reactive parallax starfield rendered to a fixed canvas. */
export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const cx = cv.getContext("2d");
    if (!cx) return;

    let W = 0,
      H = 0,
      mx = 0,
      my = 0,
      raf = 0;
    let stars: { x: number; y: number; z: number; s: number }[] = [];

    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
      stars = Array.from({ length: Math.min(90, Math.floor(W / 16)) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 0.8 + 0.2,
        s: Math.random() * 1.4 + 0.3,
      }));
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / W - 0.5;
      my = e.clientY / H - 0.5;
    };
    const draw = () => {
      cx.clearRect(0, 0, W, H);
      for (const st of stars) {
        const px = st.x + mx * 30 * st.z;
        const py = st.y + my * 30 * st.z;
        cx.beginPath();
        cx.arc(px, py, st.s * st.z, 0, 7);
        cx.fillStyle = `rgba(155,180,255,${st.z * 0.5})`;
        cx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas id="stars" ref={ref} aria-hidden />;
}
