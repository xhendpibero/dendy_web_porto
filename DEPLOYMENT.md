# Deployment Guide

## Production Build Issues Fixed

The portfolio website has been updated to work correctly in production static exports. Here are the key fixes:

### Issues Fixed

1. **Data Loading in Static Export**: The portfolio data now imports directly at build time, ensuring it's available in static exports
2. **Path Resolution**: Improved path resolution for both root and subdirectory deployments
3. **Error Handling**: Added fallback data to prevent the app from breaking if data fails to load
4. **Build Scripts**: Updated package.json to use correct serve command for static exports

### Building for Production

```bash
# Build the static export
npm run build

# Preview the build locally
npm run preview
# or
npx serve@latest out
```

### Deployment Options

#### Option 1: Root Deployment (e.g., yourdomain.com)

Set environment variable before building:
```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH=""
npm run build

# Linux/Mac
NEXT_PUBLIC_BASE_PATH="" npm run build
```

Or update `next.config.ts` to set `basePath` to empty string or undefined.

#### Option 2: Subdirectory Deployment (e.g., yourdomain.com/portfolio)

Set environment variable before building:
```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm run build

# Linux/Mac
NEXT_PUBLIC_BASE_PATH="/portfolio" npm run build
```

### How It Works

1. **Build Time**: The portfolio data JSON is imported directly in `src/data/portfolio-data.ts`, which gets bundled into the JavaScript bundle
2. **Runtime**: The `usePortfolioData()` hook tries to import the bundled data first, then falls back to fetching from the public folder if needed
3. **Fallback**: If all loading methods fail, the app uses fallback data to prevent breaking

### Testing Production Build Locally

```bash
# Build
npm run build

# Serve the out directory
npm run preview
```

Then open http://localhost:3000 (or the port shown by serve)

### Troubleshooting

If you still see "Loading..." in production:

1. Check browser console for errors
2. Verify the JSON file exists at `public/data/portfolio-data.json`
3. Check that the build completed successfully
4. Verify the basePath matches your deployment location
5. Clear browser cache and hard refresh (Ctrl+Shift+R)

### File Structure

```
out/                          # Production build output
├── index.html
├── _next/
│   └── static/
├── data/
│   └── portfolio-data.json   # Should be here
└── images/
    └── ...
```

The `out` folder contains everything needed for static hosting.

