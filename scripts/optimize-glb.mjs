/**
 * optimize-glb.mjs
 * Run: node scripts/optimize-glb.mjs
 *
 * Applies Draco compression + dedup/prune to reduce GLB sizes.
 * Output files are written as *.optimized.glb — review before replacing originals.
 */

import { NodeIO } from "@gltf-transform/core";
import { KHRONOS_EXTENSIONS } from "@gltf-transform/extensions";
import { draco, dedup, prune, flatten, weld } from "@gltf-transform/functions";
import { createRequire } from "module";
import { statSync } from "fs";

const require = createRequire(import.meta.url);
const draco3d = require("draco3d");

const io = new NodeIO()
  .registerExtensions(KHRONOS_EXTENSIONS)
  .registerDependencies({
    "draco3d.decoder": await draco3d.createDecoderModule(),
    "draco3d.encoder": await draco3d.createEncoderModule(),
  });

async function optimize(inputPath, outputPath, options = {}) {
  const beforeSize = statSync(inputPath).size;
  console.log(`\nOptimizing: ${inputPath}`);
  console.log(`  Before: ${Math.round(beforeSize / 1024)}KB`);

  const document = await io.read(inputPath);

  await document.transform(
    dedup(),
    prune(),
    weld({ tolerance: 0.0001 }),
    ...(options.hasAnimations ? [] : [flatten()]),
    draco({
      method: "edgebreaker",
      encodeSpeed: 5,
      decodeSpeed: 5,
      quantizePosition: 14,
      quantizeNormal: 10,
      quantizeTexcoord: 12,
      quantizeColor: 8,
    })
  );

  await io.write(outputPath, document);

  const afterSize = statSync(outputPath).size;
  const reduction = Math.round((1 - afterSize / beforeSize) * 100);
  console.log(`  After:  ${Math.round(afterSize / 1024)}KB`);
  console.log(`  Saved:  ${reduction}% reduction`);
}

await optimize(
  "public/vintage_telephone.glb",
  "public/vintage_telephone.optimized.glb",
  { hasAnimations: false }
);

await optimize(
  "public/earth (1).glb",
  "public/earth_optimized.glb",
  { hasAnimations: true }
);

console.log("\nDone. Review .optimized.glb files visually, then rename to replace originals.");
