import {readdirSync, existsSync, unlinkSync, rmdirSync, lstatSync} from 'fs';
const fs = require('fs');
const path = require('path');

const itemsToRemove = [
  'README.md',
  '.env',
  '.env.production',
  '.git',
  'template.config.js',
  'node_modules',
  'package-lock.json',
  '.idea',
  // add more files to remove
];


// Function to recursively remove a directory
const removeDirectory = dirPath => {
  if (existsSync(dirPath)) {
    const files = readdirSync(dirPath);

    files.forEach(file => {
      const curPath = path.join(dirPath, file);
      if (lstatSync(curPath).isDirectory()) {
        // Recursive case: directory
        removeDirectory(curPath);
      } else {
        // Base case: file
        unlinkSync(curPath);
      }
    });

    // Remove the directory itself
    rmdirSync(dirPath);
    console.log(`Removed directory: ${dirPath}`);
  } else {
    console.log(`Directory does not exist: ${dirPath}`);
  }
};

// Define the path to the package.json file
const packageJsonPath = path.join(__dirname, 'package.json');

// Read the package.json file into a JavaScript object
const packageJson = require(packageJsonPath);

// Split the name at the '/' character and take the last part
const newName = packageJson.name.split('/').pop();

// Update the name in the package.json object
packageJson.name = newName;

// Write the updated package.json object back to the package.json file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

itemsToRemove.forEach(itemPath => {
  const fullPath = path.join(process.cwd(), itemPath);
  if (existsSync(fullPath)) {
    if (lstatSync(fullPath).isDirectory()) {
      removeDirectory(fullPath);
    } else {
      unlinkSync(fullPath);
      console.log(`Removed file: ${fullPath}`);
    }
  } else {
    console.log(`Item does not exist: ${fullPath}`);
  }
});

//
// // Remove the script itself
// const scriptPath = path.join(process.cwd(), 'removeFiles.js');
// if (existsSync(scriptPath)) {
//   unlinkSync(scriptPath);
//   console.log(`Removed post-init script: ${scriptPath}`);
// } else {
//   console.log(`Post-init script does not exist: ${scriptPath}`);
// }
