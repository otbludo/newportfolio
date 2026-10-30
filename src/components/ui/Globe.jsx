import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";

const MOVEMENT_DAMPING = 100;

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [71 / 255, 85 / 255, 105 / 255],
  glowColor: [1, 1, 1],
};

export function Globe({ className = "", markers = [], location = [0, 0] }) {
  const canvasRef = useRef(null);
  const widthRef = useRef(0);
  const pointerInteracting = useRef(null);
  const phi = useMotionValue(0);
  const theta = useMotionValue(GLOBE_CONFIG.theta);
  const smoothPhi = useSpring(phi, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });
  const smoothTheta = useSpring(theta, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const [latitude, longitude] = location;
    phi.set((-longitude * Math.PI) / 180 - Math.PI / 2);
    theta.set((latitude * Math.PI) / 180);
  }, [location, phi, theta]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      ...GLOBE_CONFIG,
      markers,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        state.phi = smoothPhi.get();
        state.theta = smoothTheta.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    const fadeTimeout = window.setTimeout(() => {
      canvas.style.opacity = "1";
    }, 0);

    return () => {
      window.clearTimeout(fadeTimeout);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [markers, smoothPhi, smoothTheta]);

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteracting.current = clientX;
      phi.set(phi.get() + delta / MOVEMENT_DAMPING);
    }
  };

  const stopInteraction = () => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  return (
    <div
      className={`absolute inset-0 mx-auto aspect-square w-full max-w-[600px] ${className}`}
    >
      <canvas
        ref={canvasRef}
        aria-label="Globe interactif avec des destinations de voyage"
        role="img"
        className="h-full w-full cursor-grab opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(event) => {
          pointerInteracting.current = event.clientX;
          event.currentTarget.style.cursor = "grabbing";
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={stopInteraction}
        onPointerCancel={stopInteraction}
        onPointerMove={(event) => updateMovement(event.clientX)}
      />
    </div>
  );
}
