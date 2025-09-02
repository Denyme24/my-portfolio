#!/usr/bin/env node

/**
 * Tailwind Configuration Inspector
 * 
 * This script analyzes and displays the current Tailwind CSS configuration
 * for your project, including theme details, plugins, and content paths.
 */

const fs = require('fs');
const path = require('path');

async function inspectTailwindConfig() {
  console.log('🎨 Tailwind CSS Configuration Inspector\n');
  
  try {
    // Check if Tailwind config exists
    const configPath = path.join(process.cwd(), 'tailwind.config.ts');
    const configExists = fs.existsSync(configPath);
    
    if (!configExists) {
      console.log('❌ No tailwind.config.ts found in current directory');
      return;
    }

    console.log('📁 Configuration Files Found:');
    console.log(`   ✅ tailwind.config.ts`);
    
    // Check PostCSS config
    const postcssPath = path.join(process.cwd(), 'postcss.config.mjs');
    if (fs.existsSync(postcssPath)) {
      console.log(`   ✅ postcss.config.mjs`);
    }
    
    // Check global CSS
    const globalCssPath = path.join(process.cwd(), 'app/globals.css');
    if (fs.existsSync(globalCssPath)) {
      console.log(`   ✅ app/globals.css`);
    }
    
    console.log('\n📦 Package Information:');
    
    // Read package.json for Tailwind version
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const tailwindVersion = packageJson.devDependencies?.tailwindcss || 
                             packageJson.dependencies?.tailwindcss || 
                             'Not found';
      
      console.log(`   Tailwind CSS: ${tailwindVersion}`);
      
      // Check for related packages
      const relatedPackages = [
        'autoprefixer',
        'postcss',
        'tailwind-merge',
        'class-variance-authority',
        'clsx',
        'prettier-plugin-tailwindcss'
      ];
      
      relatedPackages.forEach(pkg => {
        const version = packageJson.devDependencies?.[pkg] || 
                       packageJson.dependencies?.[pkg];
        if (version) {
          console.log(`   ${pkg}: ${version}`);
        }
      });
    }
    
    console.log('\n⚙️  Configuration Details:');
    
    // Read and display config content
    const configContent = fs.readFileSync(configPath, 'utf8');
    console.log('\n📝 Current tailwind.config.ts:');
    console.log('─'.repeat(50));
    console.log(configContent);
    console.log('─'.repeat(50));
    
    // Read PostCSS config if exists
    if (fs.existsSync(postcssPath)) {
      const postcssContent = fs.readFileSync(postcssPath, 'utf8');
      console.log('\n📝 PostCSS Configuration:');
      console.log('─'.repeat(30));
      console.log(postcssContent);
      console.log('─'.repeat(30));
    }
    
    // Analyze global CSS
    if (fs.existsSync(globalCssPath)) {
      const globalCssContent = fs.readFileSync(globalCssPath, 'utf8');
      console.log('\n🎨 Global CSS (globals.css):');
      console.log('─'.repeat(35));
      console.log(globalCssContent);
      console.log('─'.repeat(35));
    }
    
    console.log('\n🔍 Quick Analysis:');
    
    // Analyze content paths
    if (configContent.includes('./pages/')) {
      console.log('   ✅ Pages directory scanning enabled');
    }
    if (configContent.includes('./components/')) {
      console.log('   ✅ Components directory scanning enabled');
    }
    if (configContent.includes('./app/')) {
      console.log('   ✅ App directory scanning enabled (Next.js 13+)');
    }
    
    // Check for plugins
    if (configContent.includes('plugins: []')) {
      console.log('   ⚠️  No plugins currently installed');
    } else if (configContent.includes('plugins:')) {
      console.log('   ✅ Plugins configured');
    }
    
    // Check for theme extensions
    if (configContent.includes('extend:')) {
      console.log('   ✅ Theme extensions configured');
    }
    
    // Check for CSS variables
    if (configContent.includes('var(--')) {
      console.log('   ✅ CSS variables integration detected');
    }
    
    console.log('\n✨ Configuration analysis complete!\n');
    console.log('💡 For detailed analysis, see TAILWIND_CONFIGURATION_ANALYSIS.md');
    
  } catch (error) {
    console.error('❌ Error analyzing Tailwind configuration:', error.message);
  }
}

// Run the inspector
inspectTailwindConfig();