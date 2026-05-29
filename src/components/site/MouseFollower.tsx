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

      const pill = (e.target as Element).closest?.(".pill") as HTMLElement | null;
      if (pill) {
        const rect = pill.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        pill.style.setProperty("--pill-glow-x", `${x}%`);
        pill.style.setProperty("--pill-glow-y", `${y}%`);
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = pill ? "0" : "0.25";
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
      }}
    />
  );
}
