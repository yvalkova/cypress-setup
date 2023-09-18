#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Check if current directory is NPM project.
if (!fs.existsSync('package.json')) {
  // Otherwise, initialize NPM project.
  console.log('Directory is not an NPM project. Initializing...');
  execSync('npm init -y');
}

console.log('Installing Cypress...');
execSync('npm install cypress', { stdio: 'inherit' });

console.log('Setting up files...');
fs.cpSync(path.join(__dirname, '../template'), '.', {
  recursive: true,
});
