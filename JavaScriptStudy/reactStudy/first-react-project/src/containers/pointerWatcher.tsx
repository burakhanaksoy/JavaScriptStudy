import { useState, useEffect } from "react";

export default function PointerWatcher() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const selector: HTMLElement | null =
      document.getElementById("pointer-block");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePointerMove = (event: any, boundingElement: DOMRect) => {
      if (boundingElement) {
        setPosition({
          x: event.clientX - boundingElement.x,
          y: event.clientY - boundingElement.y,
        });
      }
    };

    if (selector) {
      const boundingElement = selector.getBoundingClientRect();
      selector.addEventListener("pointermove", (e) => {
        handlePointerMove(e, boundingElement);
      });
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div id="pointer-block" className="pointer-watch-block">
      <div
        className="pointer"
        style={{
          backgroundColor: "red",
          width: "20px",
          height: "20px",
          transform: `translate(${position.x}px, ${position.y}px)`,
          borderRadius: "80%",
          opacity: "0.4",
        }}
      />
      <p style={{ color: "black" }}>
        Position: x ({position.x}) y ({position.y})
      </p>
    </div>
  );
}
