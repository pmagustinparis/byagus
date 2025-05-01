import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = [
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 96, height: 96, name: 'favicon-96x96.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
  { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  { width: 512, height: 512, name: 'android-chrome-512x512.png' },
];

async function generateIcons() {
  const inputImage = 'public/avatar.png';
  
  // Ensure the avatar exists
  try {
    await fs.access(inputImage);
  } catch (error) {
    console.error('Avatar image not found:', inputImage);
    process.exit(1);
  }

  // Generate PNG icons
  for (const size of sizes) {
    await sharp(inputImage)
      .resize(size.width, size.height)
      .png()
      .toFile(`public/${size.name}`);
    
    console.log(`Generated ${size.name}`);
  }

  // Generate ICO file (16x16 and 32x32)
  const icoSizes = [16, 32];
  const icoBuffers = await Promise.all(
    icoSizes.map(size => 
      sharp(inputImage)
        .resize(size, size)
        .toFormat('png')
        .toBuffer()
    )
  );

  // Combine buffers into ICO file
  const icoFile = 'public/favicon.ico';
  await fs.writeFile(icoFile, Buffer.concat(icoBuffers));
  console.log('Generated favicon.ico');
}

generateIcons().catch(console.error); 