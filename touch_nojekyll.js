const shell = require('shelljs');
const path = require('path');
// Define the build directory. Update this to your actual build directory if different.
const buildDir = path.resolve(__dirname, 'docs');

// Create the .nojekyll file in the build directory
shell.touch(path.join(buildDir, '.nojekyll'));

console.log('.nojekyll file created in build directory.');
