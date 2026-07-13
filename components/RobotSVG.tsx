/** Hand-drawn SVG illustrations for each robot and robot class.
 *  Keeps the site dependency-free and always-rendering. Swap for <img> if you
 *  want real photos (see README → "Using real photos"). */

function legDog(gid: string, c2: string, y: number) {
  return (
    <>
      <g stroke={`url(#${gid})`} strokeWidth={3.4} strokeLinecap="round" fill="none">
        <path d={`M74 ${y} L64 ${y + 28} L80 ${y + 54}`} />
        <path d={`M100 ${y} L110 ${y + 28} L92 ${y + 54}`} />
        <path d={`M150 ${y} L140 ${y + 28} L156 ${y + 54}`} />
        <path d={`M176 ${y} L186 ${y + 28} L168 ${y + 54}`} />
      </g>
      <g fill={c2}>
        <circle cx={74} cy={y} r={4} />
        <circle cx={100} cy={y} r={4} />
        <circle cx={150} cy={y} r={4} />
        <circle cx={176} cy={y} r={4} />
      </g>
    </>
  );
}

function humanoid(gid: string, c2: string) {
  return (
    <>
      <g stroke={`url(#${gid})`} strokeWidth={3.2} strokeLinecap="round" fill="none">
        <circle cx={130} cy={52} r={15} fill="#0C0E13" />
        <rect x={112} y={70} width={36} height={52} rx={11} fill="#0C0E13" />
        <path d="M112 80 L92 108 L96 128" />
        <path d="M148 80 L168 108 L164 128" />
        <path d="M120 122 L116 158 L122 178" />
        <path d="M140 122 L144 158 L138 178" />
      </g>
      <circle cx={124} cy={50} r={2.4} fill={c2} />
      <circle cx={136} cy={50} r={2.4} fill={c2} />
    </>
  );
}

export default function RobotSVG({ kind, c1, c2 }: { kind: string; c1: string; c2: string }) {
  const gid = `g_${kind}`;
  const defs = (
    <defs>
      <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={c1} />
        <stop offset="1" stopColor={c2} />
      </linearGradient>
    </defs>
  );

  if (kind === "go2")
    return (
      <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
        {defs}
        <rect x={66} y={76} width={120} height={42} rx={13} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <rect x={170} y={64} width={38} height={30} rx={8} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <circle cx={196} cy={86} r={5} fill={c2} />
        <circle cx={196} cy={86} r={9} fill="none" stroke={c2} strokeWidth={1} opacity={0.5} />
        {legDog(gid, c2, 118)}
      </svg>
    );
  if (kind === "spot")
    return (
      <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
        {defs}
        <rect x={66} y={78} width={118} height={40} rx={10} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.6} />
        <path d="M184 82 L210 68 L210 98 L184 108 Z" fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.6} />
        <circle cx={200} cy={82} r={3.4} fill={c2} />
        {legDog(gid, c2, 118)}
      </svg>
    );
  if (kind === "optimus")
    return (
      <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
        {defs}
        {humanoid(gid, c2)}
      </svg>
    );
  if (kind === "figure")
    return (
      <svg width="260" height="190" viewBox="0 0 260 190" fill="none">
        {defs}
        {humanoid(gid, c2)}
        <rect x={112} y={70} width={36} height={52} rx={11} fill="#0C0E13" stroke={c2} strokeWidth={1} opacity={0.4} />
      </svg>
    );

  // ---- category visuals ----
  if (kind === "quad")
    return (
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
        {defs}
        <rect x={40} y={44} width={70} height={26} rx={9} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <rect x={102} y={36} width={22} height={18} rx={5} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.2} />
        <g stroke={`url(#${gid})`} strokeWidth={2.6} strokeLinecap="round" fill="none">
          <path d="M50 70 L44 88 L52 100" />
          <path d="M64 70 L70 88 L60 100" />
          <path d="M90 70 L84 88 L92 100" />
          <path d="M104 70 L110 88 L100 100" />
        </g>
      </svg>
    );
  if (kind === "human")
    return (
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
        {defs}
        <circle cx={75} cy={24} r={11} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <rect x={60} y={38} width={30} height={36} rx={8} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <g stroke={`url(#${gid})`} strokeWidth={2.6} strokeLinecap="round" fill="none">
          <path d="M60 46 L46 66" />
          <path d="M90 46 L104 66" />
          <path d="M66 74 L62 98" />
          <path d="M84 74 L88 98" />
        </g>
      </svg>
    );
  if (kind === "amr")
    return (
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
        {defs}
        <rect x={30} y={40} width={90} height={40} rx={10} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <rect x={52} y={20} width={46} height={20} rx={5} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2} />
        <circle cx={50} cy={88} r={9} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <circle cx={100} cy={88} r={9} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <circle cx={40} cy={52} r={3} fill={c2} />
      </svg>
    );
  if (kind === "agv")
    return (
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
        {defs}
        <rect x={24} y={52} width={102} height={22} rx={6} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <rect x={46} y={30} width={58} height={22} rx={4} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2} opacity={0.7} />
        <circle cx={44} cy={82} r={8} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <circle cx={106} cy={82} r={8} fill="#0C0E13" stroke={`url(#${gid})`} strokeWidth={2.4} />
        <path d="M128 63 L140 63 M135 58 L140 63 L135 68" stroke={c2} strokeWidth={2} fill="none" />
      </svg>
    );
  if (kind === "drone")
    return (
      <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
        {defs}
        <line x1={45} y1={40} x2={105} y2={75} stroke={`url(#${gid})`} strokeWidth={2.6} />
        <line x1={105} y1={40} x2={45} y2={75} stroke={`url(#${gid})`} strokeWidth={2.6} />
        <circle cx={45} cy={40} r={12} fill="none" stroke={`url(#${gid})`} strokeWidth={2} />
        <circle cx={105} cy={40} r={12} fill="none" stroke={`url(#${gid})`} strokeWidth={2} />
        <circle cx={45} cy={75} r={12} fill="none" stroke={`url(#${gid})`} strokeWidth={2} />
        <circle cx={105} cy={75} r={12} fill="none" stroke={`url(#${gid})`} strokeWidth={2} />
        <rect x={66} y={50} width={18} height={15} rx={4} fill="#0C0E13" stroke={c2} strokeWidth={2} />
      </svg>
    );
  return null;
}
