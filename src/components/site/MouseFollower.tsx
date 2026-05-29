import { useEffect, useRef } from "react";

export function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const el = e.target as Element;
      const pill = el.closest?.(".pill") as HTMLElement | null;
      if (pill) {
        const rect = pill.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        pill.style.setProperty("--pill-glow-x", `${x}%`);
        pill.style.setProperty("--pill-glow-y", `${y}%`);
      }

      if (dotRef.current) {
        const isLight = !!el.closest("[data-cursor-light]");
        dotRef.current.style.backgroundColor = isLight ? "#f0f0f0" : "#156686";
        dotRef.current.style.boxShadow = isLight
          ? "0 0 12px 4px rgba(240,240,240,0.25)"
          : "0 0 12px 4px rgba(21,102,134,0.3)";
        dotRef.current.style.opacity = pill ? "0" : "0.6";
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        backgroundColor: "#156686",
        opacity: 0.25,
        boxShadow: "0 0 12px 4px rgba(21,102,134,0.3)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    />
  );
}
