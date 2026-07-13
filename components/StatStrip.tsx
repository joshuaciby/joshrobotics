import Counter from "./Counter";
import { STATS } from "@/lib/data";

export default function StatStrip() {
  return (
    <div className="stat-strip">
      <div className="wrap">
        <div className="row">
          {STATS.map(([n, k], i) => (
            <div className="stat" key={i}>
              <div className="n">
                <Counter to={n} />
              </div>
              <div className="k">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
