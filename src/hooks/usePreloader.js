import { useState, useEffect } from "react";

// Only preload assets that are needed on the INITIAL page load.
// GLB models (telephone + earth) are Contact-page-only — they load
// on demand when the user navigates to /Contact, not upfront.
const BASE = import.meta.env.BASE_URL;
const CRITICAL_IMAGES = [
  `${BASE}muhammad.webp`,
  `${BASE}Home_frames/frame_000000.webp`,
  `${BASE}project_logo/apps.webp`,
];

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.__preloadDone) {
      setProgress(100);
      setDone(true);
      return;
    }

    const total = CRITICAL_IMAGES.length;
    let completed = 0;

    const onAssetDone = () => {
      completed += 1;
      setProgress(Math.min(95, Math.round((completed / total) * 95)));
    };

    const promises = CRITICAL_IMAGES.map((src) =>
      preloadImage(src).then(onAssetDone)
    );

    Promise.all(promises).then(() => {
      setProgress(100);
      window.__preloadDone = true;
      setDone(true);
    });
  }, []);

  return { progress, done };
}
