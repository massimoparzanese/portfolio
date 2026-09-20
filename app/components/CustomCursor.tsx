"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -200, y: -200 });
  const trailRef = useRef({ x: -200, y: -200 });
  const hoverRef = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const checkHover = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      if (tag === "a" || tag === "button") return true;
      if ((el as HTMLElement).dataset.cursorHover !== undefined) return true;
      return checkHover(el.parentElement);
    };

    const onOver = (e: MouseEvent) => {
      hoverRef.current = checkHover(e.target as Element);
    };

    const loop = () => {
      const lerp = 0.11;
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * lerp;
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * lerp;
      const isHov = hoverRef.current;
      const size = isHov ? 44 : 30;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${trailRef.current.x - size / 2}px, ${trailRef.current.y - size / 2}px)`;
        ringRef.current.style.width = size + "px";
        ringRef.current.style.height = size + "px";
        ringRef.current.style.borderColor = isHov ? "rgba(139,92,246,0.7)" : "rgba(255,255,255,0.3)";
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current!);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white mix-blend-difference will-change-transform"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 pointer-events-none z-[9998] rounded-full border will-change-transform"
        style={{ width: 30, height: 30, borderColor: "rgba(255,255,255,0.3)", transition: "width 0.2s, height 0.2s, border-color 0.2s" }}
      />
    </>
  );
}