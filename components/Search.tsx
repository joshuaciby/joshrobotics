"use client";
import {
  createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode,
} from "react";
import { SEARCH_INDEX, SearchEntry } from "@/lib/data";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const SearchCtx = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });

export const useSearch = () => useContext(SearchCtx);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);

  const open = useCallback(() => {
    setQ("");
    setSel(0);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  const results = useMemo<SearchEntry[]>(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SEARCH_INDEX.slice(0, 8);
    return SEARCH_INDEX.filter(
      (x) =>
        x.t.toLowerCase().includes(query) ||
        x.d.toLowerCase().includes(query) ||
        x.g.toLowerCase().includes(query)
    );
  }, [q]);

  const go = useCallback(
    (i: number) => {
      const x = results[i];
      if (!x) return;
      close();
      document.querySelector(x.anchor)?.scrollIntoView({ behavior: "smooth" });
    },
    [results, close]
  );

  // global keyboard: Cmd/Ctrl+K to toggle, Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        isOpen ? close() : open();
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, open, close]);

  // grouped rendering
  let lastG = "";

  return (
    <SearchCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div className="search-modal open" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="search-box">
            <div className="field">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5A606E" strokeWidth={2}>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                autoFocus
                value={q}
                placeholder="Search robots, topics, projects, roadmaps…"
                onChange={(e) => {
                  setQ(e.target.value);
                  setSel(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSel((s) => Math.min(s + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSel((s) => Math.max(s - 1, 0));
                  } else if (e.key === "Enter") {
                    e.preventDefault();
                    go(sel);
                  }
                }}
              />
              <span className="esc">ESC</span>
            </div>
            <div className="search-results">
              {results.length === 0 && (
                <div className="sr-empty">
                  No matches for &quot;{q}&quot; — try &quot;ROS2&quot;, &quot;Go2&quot; or &quot;roadmap&quot;.
                </div>
              )}
              {results.map((x, i) => {
                const showGroup = x.g !== lastG;
                lastG = x.g;
                return (
                  <div key={x.t + i}>
                    {showGroup && <div className="sr-group">{x.g}</div>}
                    <div
                      className={`sr-item${i === sel ? " sel" : ""}`}
                      onMouseEnter={() => setSel(i)}
                      onClick={() => go(i)}
                    >
                      <div className="ic">{x.ic}</div>
                      <div>
                        <div className="t">{x.t}</div>
                        <div className="d">{x.d}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </SearchCtx.Provider>
  );
}
