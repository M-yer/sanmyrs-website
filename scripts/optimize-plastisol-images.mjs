import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const dir = 'public/images/products/plastisol-inks';

const files = await readdir(dir);
const pngs = files.filter(f => f.toLowerCase().endsWith('.png'));

for (const file of pngs) {
  const filePath = path.join(dir, file);
  console.log(`Processing: ${file}`);

  const buffer = await sharp(filePath)
    .trim({ threshold: 20 })   // auto-crop excess white/transparent background
    .resize(800, 800, {
      fit: 'contain',           // keep aspect ratio
      background: { r: 255, g: 255, b: 255, alpha: 1 }  // pad with white
    })
    .png({ compressionLevel: 8, effort: 10 })
    .toBuffer();

  await sharp(buffer).toFile(filePath);
  console.log(`  ✓ Saved ${file}`);
}

console.log(`\nDone! Optimized ${pngs.length} images.`);
