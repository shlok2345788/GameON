const { execSync } = require('child_process');
const path = require('path');

// Change to the frontend directory
process.chdir(path.join(__dirname, 'gameon-website'));

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');