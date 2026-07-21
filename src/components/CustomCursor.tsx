"use client";

import { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL Fluid Simulation
    WebGLFluid(canvas, {
      TRIGGER: "hover",
      IMMEDIATE: false,
      AUTO: false,
      INTERVAL: 3000,
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 4.0, // Fades away very fast
      VELOCITY_DISSIPATION: 0.3,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.08, // Very thin line
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
      BLOOM: true, 
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    });

    // Forward pointer events to the canvas so it works with pointer-events-none
    const forwardEvent = (e: MouseEvent | TouchEvent, type: string) => {
      if (!canvas) return;
      
      let clientX = 0, clientY = 0;
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (type !== "touchend") {
        return;
      }

      // Create a generic event to safely bypass readonly properties of MouseEvent
      const customEvent = new Event(type, { bubbles: true, cancelable: true });
      
      // Inject required properties for webgl-fluid
      Object.assign(customEvent, {
        clientX,
        clientY,
        offsetX: clientX,
        offsetY: clientY,
        pageX: clientX,
        pageY: clientY,
        touches: (e as TouchEvent).touches,
        targetTouches: (e as TouchEvent).targetTouches,
        changedTouches: (e as TouchEvent).changedTouches,
      });

      canvas.dispatchEvent(customEvent);
    };

    const onMouseMove = (e: MouseEvent) => forwardEvent(e, "mousemove");
    const onMouseDown = (e: MouseEvent) => forwardEvent(e, "mousedown");
    const onMouseUp = (e: MouseEvent) => forwardEvent(e, "mouseup");
    const onTouchStart = (e: TouchEvent) => forwardEvent(e, "touchstart");
    const onTouchMove = (e: TouchEvent) => forwardEvent(e, "touchmove");
    const onTouchEnd = (e: TouchEvent) => forwardEvent(e, "touchend");

    // Add listeners to window to capture all events globally
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{ width: "100vw", height: "100vh", opacity: 0.15, mixBlendMode: "screen" }}
    />
  );
}
