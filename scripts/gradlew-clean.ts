#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

// Load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const androidDir = path.resolve(process.cwd(), 'android');
const localPropertiesPath = path.join(androidDir, 'local.properties');

if (!process.env.ANDROID_HOME) {
  console.error('ANDROID_HOME is not set in .env');
  process.exit(1);
}

// Update or create local.properties
// Update or create local.properties
let localProperties = '';
const sdkPath = process.env.ANDROID_HOME.replace(/\\/g, '/'); // <-- convert backslashes
const sdkLine = `sdk.dir=${sdkPath}`;

if (fs.existsSync(localPropertiesPath)) {
  localProperties = fs.readFileSync(localPropertiesPath, 'utf-8');
  if (localProperties.match(/^sdk\.dir=.*$/m)) {
    localProperties = localProperties.replace(/^sdk\.dir=.*$/m, sdkLine);
  } else {
    localProperties += `\n${sdkLine}\n`;
  }
} else {
  localProperties = `${sdkLine}\n`;
}

fs.writeFileSync(localPropertiesPath, localProperties, 'utf-8');
console.log(
  `Updated local.properties with sdk.dir=${process.env.ANDROID_HOME}`,
);

// Run gradlew clean
try {
  console.log('Running gradlew clean...');
  execSync('.\\gradlew clean', { cwd: androidDir, stdio: 'inherit' });
  console.log('Gradle clean finished.');
} catch (err) {
  console.error('Gradle clean failed:', err);
  process.exit(1);
}
