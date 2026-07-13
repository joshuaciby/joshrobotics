import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://joshrobotics.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JoshRobotics — Modern Industrial Robots, Taken Apart & Taught",
  description:
    "JoshRobotics is a learning hub for modern robotics — interactive teardowns of Unitree Go2, Boston Dynamics Spot, Tesla Optimus and Figure 02, plus roadmaps, projects and careers for students and engineers.",
  keywords: [
    "JoshRobotics", "robotics teardown", "quadruped", "humanoid", "AMR", "AGV",
    "ROS2", "robotics roadmap", "Unitree Go2", "Boston Dynamics Spot",
    "Tesla Optimus", "Figure 02", "robotics careers", "learn robotics",
  ],
  authors: [{ name: "Joshua Ciby", url: SITE_URL }],
  openGraph: {
    title: "JoshRobotics — Modern Industrial Robots, Taken Apart & Taught",
    description:
      "Interactive robot teardowns, learning roadmaps, and careers — from beginner to advanced robotics.",
    url: SITE_URL,
    siteName: "JoshRobotics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JoshRobotics — Modern Industrial Robots, Taken Apart & Taught",
    description: "Interactive robot teardowns, roadmaps, projects and careers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
