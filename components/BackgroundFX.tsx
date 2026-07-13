/** Static ambient grid + gradient glows behind everything. */
export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden>
      <div className="grid" />
      <div className="glow g1" />
      <div className="glow g2" />
    </div>
  );
}
