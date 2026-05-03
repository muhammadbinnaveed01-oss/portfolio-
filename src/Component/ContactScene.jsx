/**
 * ContactScene.jsx — lazy-loaded 3D scene for Contact page.
 * Uses direct three/examples/jsm imports (tree-shakeable via three-vendor chunk).
 * Does NOT use @react-three/drei to avoid drei bundling its own Three.js copy.
 */

import { useState, Suspense, useEffect, useRef, useCallback } from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Box3, Vector3 } from "three";

// ── Shared DRACOLoader instance — reused across both models ──
const dracoLoader = new DRACOLoader();
// Use the Draco decoder WASM from Three.js's own CDN copy (no extra download)
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
dracoLoader.preload();

// ── GLTFLoader factory that attaches the shared DRACOLoader ──
function createGLTFLoader() {
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  return loader;
}

// ── Preload optimized Draco-compressed GLBs ──
const BASE = import.meta.env.BASE_URL;
useLoader.preload(createGLTFLoader, `${BASE}vintage_telephone.optimized.glb`);
useLoader.preload(createGLTFLoader, `${BASE}earth_optimized.glb`);

// ── Cap DPR: 1 on mobile, up to 1.5 on desktop ──
// Halves GPU fill rate on mobile without any visual change at normal viewing distance.
const MOBILE_DPR = typeof window !== "undefined" && window.innerWidth < 768
  ? [1, 1]
  : [1, 1.5];
function Model() {
  const gltf = useLoader(createGLTFLoader, `${BASE}vintage_telephone.optimized.glb`);
  return <primitive object={gltf.scene} />;
}

function Model2() {
  const gltf = useLoader(createGLTFLoader, `${BASE}earth_optimized.glb`);
  return <primitive object={gltf.scene} scale={6.9} />;
}

// ── Fits camera once after model mounts ──
function ModelFitter({ controlsRef }) {
  const { camera, scene, invalidate } = useThree();

  useEffect(() => {
    const id = setTimeout(() => {
      const box = new Box3().setFromObject(scene);
      if (box.isEmpty()) return;

      const size = new Vector3();
      const center = new Vector3();
      box.getSize(size);
      box.getCenter(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim === 0) return;

      const fov = camera.fov * (Math.PI / 180);
      const distance = (maxDim / (2 * Math.tan(fov / 2))) * 1.0;

      camera.position.set(center.x, center.y + maxDim * 0.1, center.z + distance);
      camera.lookAt(center);
      camera.near = distance / 100;
      camera.far = distance * 100;
      camera.updateProjectionMatrix();

      if (controlsRef?.current) {
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }

      invalidate();
    }, 100);

    return () => clearTimeout(id);
  }, [camera, scene, controlsRef, invalidate]);

  return null;
}

// ── OrbitControls wrapper ──
function OrbitControls({ autoRotate = false, autoRotateSpeed = 1, enableZoom = true, enablePan = true, controlsRef }) {
  const { camera, gl } = useThree();

  useEffect(() => {
    const ctrl = new ThreeOrbitControls(camera, gl.domElement);
    ctrl.autoRotate = autoRotate;
    ctrl.autoRotateSpeed = autoRotateSpeed;
    ctrl.enableZoom = enableZoom;
    ctrl.enablePan = enablePan;
    if (controlsRef) controlsRef.current = ctrl;
    return () => {
      ctrl.dispose();
      if (controlsRef) controlsRef.current = null;
    };
  }, [camera, gl, autoRotate, autoRotateSpeed, enableZoom, enablePan, controlsRef]);

  useFrame(() => controlsRef?.current?.update());
  return null;
}

// ── Disposes renderer on unmount ──
function RendererDisposer() {
  const { gl, scene } = useThree();
  useEffect(() => {
    return () => {
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      gl.dispose();
    };
  }, [gl, scene]);
  return null;
}

// ── WebGL context loss handler ──
function useCanvasContextHandlers(containerRef, onLost, onRestored) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup = null;
    let attachTimer = null;

    function attach(c) {
      const handleLost = (e) => { e.preventDefault(); onLost?.(); };
      const handleRestored = () => { onRestored?.(); };
      c.addEventListener("webglcontextlost", handleLost);
      c.addEventListener("webglcontextrestored", handleRestored);
      cleanup = () => {
        c.removeEventListener("webglcontextlost", handleLost);
        c.removeEventListener("webglcontextrestored", handleRestored);
      };
    }

    function scheduleAttach(c) {
      attachTimer = setTimeout(() => attach(c), 500);
    }

    const existing = container.querySelector("canvas");
    if (existing) {
      scheduleAttach(existing);
      return () => { clearTimeout(attachTimer); cleanup?.(); };
    }

    const observer = new MutationObserver(() => {
      const c = container.querySelector("canvas");
      if (c) {
        observer.disconnect();
        scheduleAttach(c);
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      clearTimeout(attachTimer);
      cleanup?.();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

// ── TelephoneCanvas ──
export function TelephoneCanvas({ containerRef }) {
  const [ctxLost, setCtxLost] = useState(false);
  const controlsRef = useRef(null);

  useCanvasContextHandlers(
    containerRef,
    useCallback(() => setCtxLost(true), []),
    useCallback(() => setCtxLost(false), [])
  );

  if (ctxLost) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/30 text-xs">3D model unavailable</p>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      frameloop="always"
      shadows={false}
      dpr={MOBILE_DPR}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <RendererDisposer />
      <ambientLight intensity={1.2} />
      <hemisphereLight skyColor="#7c3aed" groundColor="#1e1b4b" intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-5, 2, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
        <ModelFitter controlsRef={controlsRef} />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} controlsRef={controlsRef} />
    </Canvas>
  );
}

// ── EarthCanvas ──
export function EarthCanvas({ containerRef }) {
  const [ctxLost, setCtxLost] = useState(false);
  const controlsRef = useRef(null);

  useCanvasContextHandlers(
    containerRef,
    useCallback(() => setCtxLost(true), []),
    useCallback(() => setCtxLost(false), [])
  );

  if (ctxLost) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white/30 text-xs">3D model unavailable</p>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      frameloop="always"
      dpr={MOBILE_DPR}
      shadows={false}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <RendererDisposer />
      <ambientLight intensity={1.3} />
      <hemisphereLight skyColor="#4c1d95" groundColor="#0a0a0f" intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Model2 />
      </Suspense>
      <OrbitControls autoRotate autoRotateSpeed={2.3} enableZoom={false} enablePan={false} controlsRef={controlsRef} />
    </Canvas>
  );
}

// ── Default export dispatcher ──
export default function ContactScene({ model, containerRef }) {
  if (model === "telephone") return <TelephoneCanvas containerRef={containerRef} />;
  if (model === "earth") return <EarthCanvas containerRef={containerRef} />;
  return null;
}
