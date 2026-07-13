// ============================================================================
// JoshRobotics — central content file.
// Edit anything here and it flows through the whole site. No component edits needed.
// ============================================================================

export type Robot = {
  id: string;
  kind: "go2" | "spot" | "optimus" | "figure";
  name: string;
  flag: string;
  origin: string;
  status: [tone: "buy" | "res" | "dev", label: string];
  c1: string;
  c2: string;
  tag: string;
  kv: [string, string][];
};

export const ROBOTS: Robot[] = [
  {
    id: "go2",
    kind: "go2",
    name: "Unitree Go2",
    flag: "🇨🇳 China",
    origin: "Unitree · quadruped",
    status: ["buy", "$1,600+"],
    c1: "#3B82F6",
    c2: "#22D3EE",
    tag: "The price-breaker. Research-grade legs cheaper than a laptop.",
    kv: [
      ["Motors", "12 BLDC"],
      ["Payload", "1–2 kg"],
      ["LiDAR", "4D 360°×90°"],
      ["Speed", "3–5 m/s"],
    ],
  },
  {
    id: "spot",
    kind: "spot",
    name: "Boston Dynamics Spot",
    flag: "🇺🇸 USA",
    origin: "Boston Dynamics · quadruped",
    status: ["buy", "~$75k"],
    c1: "#EAB308",
    c2: "#FDE047",
    tag: "The industrial gold standard. Rugged, proven, priced like it.",
    kv: [
      ["Motors", "12"],
      ["Payload", "14 kg"],
      ["Speed", "1.6 m/s"],
      ["Runtime", "90 min"],
    ],
  },
  {
    id: "optimus",
    kind: "optimus",
    name: "Tesla Optimus",
    flag: "🇺🇸 USA",
    origin: "Tesla · humanoid",
    status: ["dev", "Internal"],
    c1: "#F0506E",
    c2: "#A78BFA",
    tag: "Vision-only humanoid betting on Tesla's factory scale and custom AI silicon.",
    kv: [
      ["Height", "173 cm"],
      ["Weight", "57 kg"],
      ["Hands", "22-DoF"],
      ["Brain", "AI5 + Grok"],
    ],
  },
  {
    id: "figure",
    kind: "figure",
    name: "Figure 02",
    flag: "🇺🇸 USA",
    origin: "Figure AI · humanoid",
    status: ["dev", "BMW pilot"],
    c1: "#A78BFA",
    c2: "#22D3EE",
    tag: "Industrial humanoid running the in-house Helix vision-language-action model.",
    kv: [
      ["DoF", "35 total"],
      ["Payload", "20–25 kg"],
      ["Battery", "2.25 kWh · 5 h"],
      ["Cameras", "6 RGB"],
    ],
  },
];

// Detailed teardown facts per robot (mechanical, electronics, actuators, ...)
export type TeardownSpec = { area: string; text: string };
export const TEARDOWN_DETAIL: Record<string, TeardownSpec[]> = {
  go2: [
    { area: "Mechanical design", text: "Ribbed polymer shell with 60+ fasteners, tuned for shock survival. Modular, hot-swappable legs with standard interfaces." },
    { area: "Actuators", text: "12 identical brushless DC joint motors — same part at every joint — each with an integrated low-ratio planetary gearbox that stays backdrivable." },
    { area: "Electronics", text: "Each motor carries its own PCB running Field-Oriented Control at kHz rates; the main computer only sends targets." },
    { area: "Sensors", text: "Magnetic absolute encoder per joint, an IMU, plus a chin-mounted 4D LiDAR (360°×90°, 0.05 m min range) and a wide-angle camera." },
    { area: "Control system", text: "Three-layer stack: planner (10 Hz) → gait/MPC (50 Hz) → joint FOC loop (~1 kHz)." },
    { area: "Communication", text: "High-speed real-time serial links carry joint targets out and feedback back; deterministic timing keeps the loops honest." },
    { area: "Battery", text: "8000 mAh (15000 on Edu) LiPo, mounted low and central to keep the centre of mass planted." },
    { area: "Software", text: "ROS2 bindings, learned locomotion policies and app-side follow/navigation modes." },
    { area: "Engineering decision", text: "One motor reused twelve times = fewer part numbers, cheaper at volume, trivial field repair — the core cost-breaking bet." },
  ],
  spot: [
    { area: "Mechanical design", text: "Rugged sealed body rated for outdoor industrial use; a distinctive angled head module houses forward perception." },
    { area: "Actuators", text: "12 electric joint actuators tuned for reliability and repeatable payload work rather than raw speed." },
    { area: "Sensors", text: "Five stereo camera pairs give near-360° depth; optional payloads add LiDAR, thermal and gas sensing." },
    { area: "Control system", text: "Proprietary balance and locomotion controller famous for recovering from shoves, ice and stairs." },
    { area: "Battery", text: "Swappable pack for ~90 min runtime; auto-docking charging for autonomous missions." },
    { area: "Engineering decision", text: "Closed, polished, reliability-first — you pay ~$75k for a robot that just works on real sites." },
  ],
  optimus: [
    { area: "Mechanical design", text: "173 cm / 57 kg human-scale frame, deliberately sized to fit workspaces built for people." },
    { area: "Actuators", text: "Custom in-house electric actuators; Gen 3 hands add 22 DoF with 50 actuators for near-human dexterity." },
    { area: "Sensors", text: "Vision-only, like Tesla's Full Self-Driving — cameras + neural nets, no LiDAR. Force sensing at the joints." },
    { area: "Compute", text: "Tesla's custom AI5 inference chip runs the models locally; xAI's Grok powers voice." },
    { area: "Engineering decision", text: "Bet everything on manufacturing scale and vertical integration to hit a <$20k long-term price — unproven at autonomy, but no startup can match the factory." },
  ],
  figure: [
    { area: "Mechanical design", text: "168 cm / 70 kg with all cabling routed inside the limbs and the battery moved into the torso for balance." },
    { area: "Actuators", text: "Custom electric actuators; 35 total DoF including fourth-gen 16-DoF hands rated to carry 20–25 kg." },
    { area: "Sensors", text: "Six RGB cameras for 360° perception plus IMU, force and touchless human-detection sensors." },
    { area: "Software", text: "Helix — an in-house Vision-Language-Action model with a slow 'thinker' (7–9 Hz) and a fast 'reactor' controlling the upper body at 200 Hz." },
    { area: "Battery", text: "2.25 kWh torso pack for ~5 h runtime; ~90 min dock charging." },
    { area: "Engineering decision", text: "Owning the AI (dropping OpenAI for Helix) is the real product — validated on a real BMW assembly line." },
  ],
};

export type Part = { n: string; t: string; tag: string; p: string; c: string[] };
export const GO2_PARTS: Part[] = [
  { n: "01", t: "Degrees of Freedom", tag: "kinematics", p: "3 actuated joints per leg — hip abduction, hip flexion, knee — times four legs. 12 driven DOF plus the body pose the controller estimates.", c: ["3 joints × 4 legs", "hip · thigh · calf"] },
  { n: "02", t: "Leg Mechanism", tag: "mechanical", p: "Each leg is a fully modular, swappable assembly with standardised interfaces. A damaged leg is replaced, not repaired in place.", c: ["hot-swappable", "standard interface"] },
  { n: "03", t: "Joint Motor", tag: "actuator", p: "A brushless DC outrunner sits at every joint — the same part all twelve times. High pole count for smooth low-speed torque.", c: ["12× identical BLDC", "~45 N·m peak"] },
  { n: "04", t: "Planetary Gearbox", tag: "reduction", p: "A compact planetary stage inside each motor gives a low reduction ratio — enough torque to matter, low enough to stay backdrivable.", c: ["integrated planetary", "backdrivable"] },
  { n: "05", t: "Encoder", tag: "sensing", p: "A magnetic absolute encoder on each motor reads shaft angle every cycle — the raw feedback the FOC loop and state estimator depend on.", c: ["magnetic absolute", "per-joint"] },
  { n: "06", t: "FOC Controller", tag: "electronics", p: "Every motor carries its own PCB running Field-Oriented Control. Torque and position are regulated locally at kHz rates.", c: ["on-motor board", "field-oriented"] },
  { n: "07", t: "Power Distribution", tag: "electrical", p: "A central bus feeds all twelve drivers plus compute. Fusing and per-leg current sensing spot a stalled joint fast.", c: ["shared HV bus", "current sense"] },
  { n: "08", t: "Communication Bus", tag: "comms", p: "High-speed serial links carry joint targets out and feedback back at real-time rates. Deterministic timing keeps the loops honest.", c: ["real-time link", "target ↔ feedback"] },
  { n: "09", t: "LiDAR", tag: "perception", p: "A chin-mounted 4D LiDAR sweeps 360°×90° with a 5 cm minimum range — the priciest component, and the eyes for mapping.", c: ["360°×90°", "0.05 m min"] },
  { n: "10", t: "Camera", tag: "perception", p: "A forward wide-angle camera adds visual context for navigation and follow modes. Edu units ring the body with more cameras.", c: ["wide-angle", "stereo on Edu"] },
  { n: "11", t: "Cooling", tag: "thermal", p: "Two axial fans push air across a central aluminium heat sink; the CPU is coupled with pads under spring-loaded pressure.", c: ["2× axial fans", "spring heatsink"] },
  { n: "12", t: "Battery", tag: "power", p: "An 8000 mAh pack (15000 on Edu) sits low and central to keep the centre of mass planted. LiPo — great density, modest cycle life.", c: ["8000 mAh", "low & central"] },
  { n: "13", t: "Mechanical Structure", tag: "frame", p: "A heavily ribbed polymer shell carries the loads. 60+ fasteners plus glued joints mean it's tuned for shock survival.", c: ["ribbed polymer", "60+ fasteners"] },
  { n: "14", t: "Cable Management", tag: "integration", p: "Meticulous routing keeps harnesses off moving joints and away from vibration nodes — quietly one of the hardest parts.", c: ["retained harnesses", "vibration-aware"] },
  { n: "15", t: "Material Selection", tag: "materials", p: "Polymer where impact matters, aluminium at the heat sink, magnets in motors. Every choice trades a gram of weight for a dollar.", c: ["polymer + Al", "cost-vs-weight"] },
];

export type Category = { kind: string; name: string; badge: string; c1: string; c2: string; desc: string; ex: string[] };
export const CATEGORIES: Category[] = [
  { kind: "quad", name: "Quadrupeds", badge: "4 legs", c1: "#3B82F6", c2: "#22D3EE", desc: "Four-legged robots that walk where wheels can't — stairs, rubble, slopes. Great for inspection, security and rough terrain.", ex: ["Unitree Go2", "BD Spot", "Addverb Trakr 🇮🇳", "MIT Cheetah", "ANYmal"] },
  { kind: "human", name: "Humanoids", badge: "2 legs", c1: "#F0506E", c2: "#A78BFA", desc: "Two-legged robots built to work in spaces made for people — reaching shelves, using human tools, walking through doors.", ex: ["Tesla Optimus", "Figure 02", "Unitree G1", "Apptronik Apollo", "Addverb Elixis 🇮🇳"] },
  { kind: "amr", name: "AMRs", badge: "Autonomous", c1: "#34D399", c2: "#22D3EE", desc: "Autonomous Mobile Robots navigate freely using SLAM — no fixed paths. They dodge obstacles and re-route on the fly in warehouses.", ex: ["Locus bots", "Fetch", "MiR", "Addverb Dynamo 🇮🇳", "Amazon Proteus"] },
  { kind: "agv", name: "AGVs", badge: "Guided", c1: "#F59E0B", c2: "#FDE047", desc: "Automated Guided Vehicles follow fixed routes — magnetic tape, QR codes, or wires. Simpler and cheaper than AMRs for repeatable hauls.", ex: ["Tuggers", "Unit-load AGVs", "Addverb Zippy 🇮🇳", "Forklift AGVs"] },
  { kind: "drone", name: "Drones / UAVs", badge: "Aerial", c1: "#22D3EE", c2: "#A78BFA", desc: "Flying robots for inspection, mapping and delivery — reaching what ground robots can't, from tall structures to wide fields.", ex: ["DJI inspection", "Skydio", "Warehouse cycle-count drones", "Delivery UAVs"] },
];

export const TOPICS: string[] = [
  "ROS2", "Embedded Systems", "ESP32", "STM32", "Arduino", "PLC", "Computer Vision",
  "AI for Robotics", "Python", "C++", "Control Systems", "Kinematics", "Electronics",
  "Mechanical Design", "Sensors", "Actuators", "BLDC Motors", "ESCs", "Batteries",
  "CAN Bus", "Digital Twins", "SLAM", "AMRs", "AGVs", "Quadrupeds", "Humanoids",
  "Drone Robotics", "Industrial Automation", "Warehouse Robotics",
];

export type Project = { lvl: "b" | "i" | "a"; n: string; d: string };
export const PROJECTS: Project[] = [
  { lvl: "b", n: "Line Follower", d: "IR sensors + PID + two motors. The classic first robot that teaches feedback control." },
  { lvl: "b", n: "Obstacle Avoider", d: "Ultrasonic sensing and simple state logic — your robot learns to not hit walls." },
  { lvl: "i", n: "ESP32 Wi-Fi Robot", d: "Wireless control, camera streaming and a web dashboard on a $6 microcontroller." },
  { lvl: "i", n: "PID Balancing Bot", d: "A two-wheel self-balancer. IMU fusion and tuned control that actually stays upright." },
  { lvl: "i", n: "Vision Robot", d: "OpenCV colour/object tracking driving motors — your robot starts to see." },
  { lvl: "a", n: "BattleBot", d: "Combat robotics: BLDC weapons, ESCs, armour layups and drivetrain design under real impact." },
  { lvl: "a", n: "ROS2 Robot", d: "Nodes, topics, tf and Nav2 — the framework every serious robot runs on." },
  { lvl: "a", n: "Quadruped", d: "12 motors, inverse kinematics, MPC gaits. Build a dog from the teardown up." },
  { lvl: "a", n: "Warehouse AMR", d: "SLAM mapping, autonomous navigation and payload handling for real logistics." },
];

export type Roadmap = { n: string; s: string[] };
export const ROADMAPS: Roadmap[] = [
  { n: "ROS2 Roadmap", s: ["Linux", "Python/C++", "Nodes & Topics", "tf & URDF", "Nav2", "MoveIt"] },
  { n: "Embedded Roadmap", s: ["C", "Arduino", "ESP32", "STM32", "RTOS", "Protocols"] },
  { n: "AI Robotics Roadmap", s: ["Python", "ML basics", "CV", "Deep RL", "Sim-to-real", "VLA models"] },
  { n: "Automation Roadmap", s: ["Electronics", "PLC", "Ladder logic", "SCADA", "HMI", "Digital twins"] },
  { n: "Mechanical Design", s: ["Sketching", "CAD", "FEA", "Materials", "DFM", "Prototyping"] },
  { n: "Computer Vision", s: ["Python", "OpenCV", "Cameras", "Detection", "Depth", "SLAM"] },
  { n: "Masters Abroad Prep", s: ["GPA", "Research", "GRE/IELTS", "SOP", "Profs", "Applications"] },
  { n: "Career Prep", s: ["Portfolio", "Projects", "Resume", "DSA", "Interviews", "Offer"] },
];

export type Career = { ic: string; n: string; d: string; tags: string[] };
export const CAREERS: Career[] = [
  { ic: "🎓", n: "Masters Abroad", d: "Where to study robotics — and how to actually get in with funding.", tags: ["Germany", "Netherlands", "Switzerland", "Sweden"] },
  { ic: "💼", n: "Internships", d: "Building the profile that lands robotics internships while you study.", tags: ["Portfolio", "Research", "Outreach", "Referrals"] },
  { ic: "🏢", n: "Companies", d: "Who is hiring in robotics & automation, from startups to giants.", tags: ["Addverb 🇮🇳", "Boston Dynamics", "Unitree", "Figure"] },
  { ic: "📄", n: "Resume & Interview", d: "The resume format and interview prep that gets robotics people hired.", tags: ["CV", "DSA", "Systems", "Behavioral"] },
  { ic: "🗺️", n: "Career Paths", d: "Controls, perception, mechanical, embedded — pick a lane that fits you.", tags: ["Controls", "Perception", "Embedded", "Mech"] },
  { ic: "💰", n: "Salaries & Skills", d: "What roles pay and the exact skills each one actually needs.", tags: ["ROS2", "C++", "CV", "CAD"] },
];

export type Paper = { lv: "easy" | "med" | "hard"; y: string; t: string; d: string; take: string };
export const PAPERS: Paper[] = [
  { lv: "med", y: "2018", t: "Dynamic Locomotion via Convex MPC — MIT Cheetah 3", d: "The control recipe nearly every modern quadruped copies: predict ahead, solve foot forces in real time.", take: "▸ MPC is why these robots move naturally" },
  { lv: "easy", y: "2019", t: "Mini Cheetah: Platform for Dynamic Control", d: "Cheap backdrivable QDD motors could replace costly geartrains — the blueprint Go2 commercialised.", take: "▸ cheap motors unlocked cheap robots" },
  { lv: "hard", y: "2024", t: "StairMaster: Conquering Risky Hollow Stairs", d: "Vision-guided RL on a Go2 hit ~80% on 37° stairs where the built-in controller scored 0%.", take: "▸ seeing the stair beats guessing it" },
  { lv: "med", y: "2025", t: "Helix: A Vision-Language-Action Model", d: "The dual-system AI behind Figure 02 — a slow 'thinker' and a fast 'reactor' working together.", take: "▸ language models are learning to move" },
];

export const STATS: [number, string][] = [
  [4, "Robot teardowns"],
  [28, "Learning topics"],
  [8, "Roadmaps"],
  [9, "Hands-on projects"],
];

export const CONTACT = {
  email: "joshuaciby@gmail.com",
  phone: "+91 79728 02440",
  phoneHref: "+917972802440",
  linkedin: "Joshua Ciby",
  linkedinHref: "https://www.linkedin.com/in/joshua-ciby",
};

// Combined search index built from all the data above.
export type SearchEntry = { t: string; d: string; ic: string; anchor: string; g: string };
export const SEARCH_INDEX: SearchEntry[] = [
  ...ROBOTS.map((r) => ({ t: r.name, d: r.origin, ic: "🤖", anchor: "#teardowns", g: "Teardowns" })),
  ...CATEGORIES.map((c) => ({ t: c.name, d: `${c.badge} robots`, ic: "📦", anchor: "#categories", g: "Robot classes" })),
  ...TOPICS.map((t) => ({ t, d: "Learning topic", ic: "📘", anchor: "#learn", g: "Learn" })),
  ...PROJECTS.map((p) => ({ t: p.n, d: "Project", ic: "🔧", anchor: "#projects", g: "Projects" })),
  ...ROADMAPS.map((r) => ({ t: r.n, d: "Roadmap", ic: "🗺️", anchor: "#roadmaps", g: "Roadmaps" })),
  ...CAREERS.map((c) => ({ t: c.n, d: "Career", ic: "💼", anchor: "#careers", g: "Careers" })),
  ...PAPERS.map((p) => ({ t: p.t, d: "Research paper", ic: "📄", anchor: "#research", g: "Research" })),
  { t: "Contact Joshua Ciby", d: "Email · phone · LinkedIn", ic: "✉️", anchor: "#contact", g: "Contact" },
];
