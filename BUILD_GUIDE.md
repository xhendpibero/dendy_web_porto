# Build Guide

## Development

Run the development server (no basePath):
```bash
npm run dev
```

## Production Builds

### Build for GitHub Pages / Subdirectory Deployment
This builds with `/Resume-Nextjs` as basePath:
```bash
npm run build
```

### Build for Root Deployment
This builds without basePath (for root domain deployment):
```bash
npm run build:root
```

## Preview Builds Locally

### Preview with basePath (GitHub Pages style)
```bash
npm run build
npm run start
```
Then visit: `http://localhost:3000/Resume-Nextjs`

### Preview without basePath (Root deployment)
```bash
npm run preview:root
```
Then visit: `http://localhost:3000`

## Environment Variables

You can also set `NEXT_PUBLIC_BASE_PATH` before building:

**For root deployment:**
```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH=""
npm run build

# Linux/Mac
NEXT_PUBLIC_BASE_PATH="" npm run build
```

**For subdirectory deployment:**
```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/your-subdirectory"
npm run build

# Linux/Mac
NEXT_PUBLIC_BASE_PATH="/your-subdirectory" npm run build
```

## Troubleshooting

### 404 Errors for JS/CSS Files

If you see 404 errors like `/Resume-Nextjs/_next/static/...`:

1. **For local preview**: Use `npm run preview:root` instead of `npm run build && npm run start`
2. **Clear the build**: Delete the `out` and `.next` folders, then rebuild
3. **Check environment**: Make sure `NEXT_PUBLIC_BASE_PATH` matches your deployment location

### Files Not Loading in Development

1. Stop the dev server
2. Delete `.next` folder
3. Run `npm run dev` again

