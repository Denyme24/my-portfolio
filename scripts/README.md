# Scripts Directory

This directory contains utility scripts for the portfolio project.

## Available Scripts

### `inspect-tailwind.js`

A comprehensive Tailwind CSS configuration inspector that analyzes and displays:

- 📁 Configuration file locations
- 📦 Package versions and dependencies
- ⚙️ Full configuration details
- 🔍 Quick analysis and recommendations

**Usage:**

```bash
# Using npm script (recommended)
npm run inspect:tailwind

# Or directly with node
node scripts/inspect-tailwind.js
```

**What it shows:**
- Current Tailwind CSS version
- Configuration file contents (tailwind.config.ts, postcss.config.mjs, globals.css)
- Content path analysis
- Plugin detection
- Theme extension analysis
- CSS variables integration status

This script is particularly useful for:
- Understanding your current Tailwind setup
- Debugging configuration issues
- Documenting your configuration for team members
- Quick configuration audits

For a detailed written analysis, see `TAILWIND_CONFIGURATION_ANALYSIS.md` in the project root.