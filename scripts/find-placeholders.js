#!/usr/bin/env node

/**
 * Find Placeholders Script
 * 
 * Searches the codebase for placeholder content that needs to be replaced
 * before deployment.
 * 
 * Usage: node scripts/find-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const PLACEHOLDERS = [
  { pattern: /\[username\]/gi, description: 'Social media username placeholder' },
  { pattern: /hello@ishanmishra\.com/gi, description: 'Email placeholder' },
  { pattern: /ishanmishra\.com/gi, description: 'Domain placeholder' },
  { pattern: /TODO:/gi, description: 'TODO comment' },
  { pattern: /PLACEHOLDER/gi, description: 'Placeholder marker' },
];

const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build'];
const IGNORE_FILES = ['.md', 'find-placeholders.js', 'package-lock.json'];

function shouldIgnore(filePath) {
  return IGNORE_DIRS.some(dir => filePath.includes(dir)) ||
         IGNORE_FILES.some(ext => filePath.endsWith(ext));
}

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const results = [];

  PLACEHOLDERS.forEach(({ pattern, description }) => {
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        results.push({
          file: filePath,
          line: index + 1,
          content: line.trim(),
          description,
        });
      }
    });
  });

  return results;
}

function searchDirectory(dir) {
  let results = [];

  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    
    if (shouldIgnore(fullPath)) {
      return;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(searchDirectory(fullPath));
    } else if (stat.isFile()) {
      results = results.concat(searchFile(fullPath));
    }
  });

  return results;
}

function main() {
  console.log('🔍 Searching for placeholders...\n');

  const results = searchDirectory(process.cwd());

  if (results.length === 0) {
    console.log('✅ No placeholders found! Your site is ready to deploy.\n');
    return;
  }

  console.log(`⚠️  Found ${results.length} placeholder(s) that need attention:\n`);

  // Group by file
  const byFile = {};
  results.forEach(result => {
    if (!byFile[result.file]) {
      byFile[result.file] = [];
    }
    byFile[result.file].push(result);
  });

  // Print results
  Object.keys(byFile).forEach(file => {
    console.log(`📄 ${file}`);
    byFile[file].forEach(({ line, content, description }) => {
      console.log(`   Line ${line}: ${description}`);
      console.log(`   ${content.substring(0, 80)}${content.length > 80 ? '...' : ''}`);
      console.log('');
    });
  });

  console.log('📋 Action Required:');
  console.log('   1. Replace [username] with actual social media handles');
  console.log('   2. Replace hello@ishanmishra.com with your email');
  console.log('   3. Replace ishanmishra.com with your domain');
  console.log('   4. Address all TODO comments');
  console.log('   5. Replace PLACEHOLDER files (resume.pdf, og-image.png)');
  console.log('\n📚 See TODO.md for complete checklist\n');
}

main();
