// Simple manual font copier for Android assets.
// Ensures all TTFs in assets/fonts exist in android/app/src/main/assets/fonts.

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, 'assets', 'fonts');
const targetDir = path.join(
  projectRoot,
  'android',
  'app',
  'src',
  'main',
  'assets',
  'fonts',
);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFonts() {
  if (!fs.existsSync(sourceDir)) {
    console.error('Source font directory missing:', sourceDir);
    process.exit(1);
  }
  ensureDir(targetDir);
  const files = fs
    .readdirSync(sourceDir)
    .filter(f => f.toLowerCase().endsWith('.ttf'));
  if (!files.length) {
    console.error('No .ttf files found in', sourceDir);
    process.exit(1);
  }
  files.forEach(file => {
    const src = path.join(sourceDir, file);
    const dest = path.join(targetDir, file.replace(/Coiny-Regular/i, 'Coiny'));
    fs.copyFileSync(src, dest);
  });
  console.log(`Copied ${files.length} font files to ${targetDir}`);
}

copyFonts();
