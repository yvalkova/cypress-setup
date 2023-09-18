#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import appendPackageJson from './appendPackageJson';
import appendGitIgnore from './appendGitIgnore';

// Check if current directory is NPM project.
if (!fs.existsSync('package.json')) {
  // Otherwise, initialize NPM project.
  console.log('Directory is not an NPM project. Initializing...');
  execSync('npm init -y');
}

try {
  // Check if TypeScript is installed.
  // This will throw an error if it is not.
  execSync('npm list typescript', { stdio: 'ignore' });
} catch (e) {
  console.log('Installing TypeScript...');
  execSync('npm install typescript --save-dev', {
    stdio: 'inherit',
  });
}

console.log('Installing Cypress...');
execSync('npm install cypress', { stdio: 'inherit' });

console.log('Setting up files...');
fs.cpSync(path.join(__dirname, '../template'), '.', {
  recursive: true,
});

console.log('Appending to package.json...');
appendPackageJson();

console.log('Appending to .gitignore...');
appendGitIgnore();
