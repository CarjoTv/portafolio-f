import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

async function copyAssets() {
  try {
    console.log('Copying assets to dist folder...');
    
    // Copy images folder
    const imagesSource = path.join(projectRoot, 'images');
    const imagesDest = path.join(distDir, 'images');
    if (fs.existsSync(imagesSource)) {
      fs.copySync(imagesSource, imagesDest);
      console.log('✓ Images copied');
    }
    
    // Copy icons folder
    const iconsSource = path.join(projectRoot, 'icons');
    const iconsDest = path.join(distDir, 'icons');
    if (fs.existsSync(iconsSource)) {
      fs.copySync(iconsSource, iconsDest);
      console.log('✓ Icons copied');
    }
    
    console.log('Assets copied successfully!');
  } catch (error) {
    console.error('Error copying assets:', error);
    process.exit(1);
  }
}

copyAssets();
