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
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentX - 6}px, ${currentY - 6}px)`;
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
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] opacity-50 hidden md:block"
      style={{ backgroundColor: "#156686" }}
    />
  );
}
