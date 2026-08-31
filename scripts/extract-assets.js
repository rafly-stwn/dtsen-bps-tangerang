import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extractAssets() {
  console.log('Extracting assets from reference images...');

  const homepageRef = path.resolve('references/homepage-reference.png');
  const pembaruanRef = path.resolve('references/pembaruan-dtsen.jpg');

  // 1. Hero Family Illustration (x=520..1015, y=55..440 from 1024x1536 homepage-reference)
  await sharp(homepageRef)
    .extract({ left: 510, top: 48, width: 505, height: 395 })
    .toFile(path.join(outputDir, 'hero-family.png'));
  console.log('Created hero-family.png');

  // 2. BPS Kota Tangerang Logo (x=24..240, y=12..60)
  await sharp(homepageRef)
    .extract({ left: 24, top: 12, width: 220, height: 50 })
    .toFile(path.join(outputDir, 'bps-tangerang-logo.png'));
  console.log('Created bps-tangerang-logo.png');

  // 3. SIKS-NG Illustration (officer + resident)
  await sharp(homepageRef)
    .extract({ left: 105, top: 980, width: 115, height: 95 })
    .toFile(path.join(outputDir, 'channel-siks-ng.png'));
  console.log('Created channel-siks-ng.png');

  // 4. Cek Bansos Smartphone Illustration
  await sharp(homepageRef)
    .extract({ left: 110, top: 1080, width: 100, height: 95 })
    .toFile(path.join(outputDir, 'channel-cek-bansos.png'));
  console.log('Created channel-cek-bansos.png');

  // 5. Form BPS Laptop Illustration
  await sharp(homepageRef)
    .extract({ left: 110, top: 1180, width: 110, height: 85 })
    .toFile(path.join(outputDir, 'channel-form-bps.png'));
  console.log('Created channel-form-bps.png');

  // 6. Citizen Thumbs Up Character (x=805..940, y=1180..1305)
  await sharp(homepageRef)
    .extract({ left: 805, top: 1180, width: 140, height: 125 })
    .toFile(path.join(outputDir, 'citizen-thumbsup.png'));
  console.log('Created citizen-thumbsup.png');

  // 7. Data Analytics Monitor (x=825..945, y=770..865)
  await sharp(homepageRef)
    .extract({ left: 825, top: 770, width: 125, height: 100 })
    .toFile(path.join(outputDir, 'data-analytics.png'));
  console.log('Created data-analytics.png');

  console.log('All asset extractions complete!');
}

extractAssets().catch(err => {
  console.error('Error extracting assets:', err);
});
