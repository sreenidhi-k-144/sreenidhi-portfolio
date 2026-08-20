import { useEffect, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice || reducedMotion) return;

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovering(true);
        setCursorText(target.dataset.cursor || "");
      } else if (
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest("[role='button']")
      ) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isTouchDevice, reducedMotion]);

  if (isTouchDevice || reducedMotion) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${x - 4}px, ${y - 4}px, 0)`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-foreground transition-all duration-300 ${
            isHovering ? "w-12 h-12 -mt-4 -ml-4 opacity-60" : "w-2 h-2 opacity-100"
          }`}
        />
      </div>
      {cursorText && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            transform: `translate3d(${x}px, ${y - 30}px, 0)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <span className="text-xs font-medium tracking-wider text-foreground uppercase">
            {cursorText}
          </span>
        </div>
      )}
    </>
  );
}
