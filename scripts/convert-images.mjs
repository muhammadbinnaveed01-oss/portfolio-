import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Files to convert: [inputPath, outputPath]
const toConvert = [
  // faizalamfazi — all .jpg
  ['public/faizalamfazi/failalamfazi1.jpg',  'public/faizalamfazi/failalamfazi1.webp'],
  ['public/faizalamfazi/faizalamfazi2.jpg',  'public/faizalamfazi/faizalamfazi2.webp'],
  ['public/faizalamfazi/faizalamfazi3.jpg',  'public/faizalamfazi/faizalamfazi3.webp'],
  ['public/faizalamfazi/faizalamfazi4.jpg',  'public/faizalamfazi/faizalamfazi4.webp'],
  ['public/faizalamfazi/faizalamfazi5.jpg',  'public/faizalamfazi/faizalamfazi5.webp'],
  ['public/faizalamfazi/faizalamfazi6.jpg',  'public/faizalamfazi/faizalamfazi6.webp'],
  ['public/faizalamfazi/faizalamfazi7.jpg',  'public/faizalamfazi/faizalamfazi7.webp'],
  ['public/faizalamfazi/faizalamfazi8.jpg',  'public/faizalamfazi/faizalamfazi8.webp'],
  ['public/faizalamfazi/faizalamfazi9.jpg',  'public/faizalamfazi/faizalamfazi9.webp'],
  ['public/faizalamfazi/googleserch.jpg',    'public/faizalamfazi/googleserch.webp'],
  // iqx — all .PNG
  ['public/iqx/2026-04-18.png',  'public/iqx/2026-04-18.webp'],
  ['public/iqx/Capture.PNG',     'public/iqx/Capture.webp'],
  ['public/iqx/iqx1.PNG',        'public/iqx/iqx1.webp'],
  ['public/iqx/iqx2.PNG',        'public/iqx/iqx2.webp'],
  ['public/iqx/iqx3.PNG',        'public/iqx/iqx3.webp'],
  ['public/iqx/iqx4.PNG',        'public/iqx/iqx4.webp'],
  ['public/iqx/iqx5.PNG',        'public/iqx/iqx5.webp'],
  ['public/iqx/iqx7.PNG',        'public/iqx/iqx7.webp'],
  ['public/iqx/iqx8.PNG',        'public/iqx/iqx8.webp'],
  ['public/iqx/iqx9.PNG',        'public/iqx/iqx9.webp'],
  // parallex_home — .PNG and .png
  ['public/parallex_home/Capture.PNG',                                    'public/parallex_home/Capture.webp'],
  ['public/parallex_home/Gemini_Generated_Image_gt8vr0gt8vr0gt8v.png',   'public/parallex_home/Gemini_Generated_Image_gt8vr0gt8vr0gt8v.webp'],
  // click2print — one remaining .PNG
  ['public/click2print/click2print(home).PNG', 'public/click2print/click2print(home).webp'],
  // project_logo
  ['public/project_logo/ai-transport-logo-small.png', 'public/project_logo/ai-transport-logo-small.webp'],
  ['public/project_logo/logo.png',                    'public/project_logo/logo.webp'],
  // root public
  ['public/aboutimg.png',   'public/aboutimg.webp'],
  ['public/images.jpg',     'public/images.webp'],
  ['public/muhammad.jpeg',  'public/muhammad.webp'],
  ['public/skill.png',      'public/skill.webp'],
  ['public/template.png',   'public/template.webp'],
  ['public/iqx pro4.PNG',   'public/iqx pro4.webp'],
];

let converted = 0;
let skipped = 0;
let failed = 0;

for (const [src, dest] of toConvert) {
  if (!existsSync(src)) {
    console.log(`SKIP (not found): ${src}`);
    skipped++;
    continue;
  }
  try {
    await sharp(src).webp({ quality: 85 }).toFile(dest);
    console.log(`OK: ${src} → ${dest}`);
    converted++;
  } catch (e) {
    console.error(`FAIL: ${src} — ${e.message}`);
    failed++;
  }
}

console.log(`\nDone. Converted: ${converted}, Skipped: ${skipped}, Failed: ${failed}`);
