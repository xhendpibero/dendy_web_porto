# Skill Icons Guide

## Current Implementation

The portfolio uses a hybrid approach for skill icons:
- **CDN Icons**: Most technology icons are loaded from `cdn.jsdelivr.net` (DevIcons)
- **Local Icons**: UI/UX tool icons (Figma, Photoshop, etc.) are stored locally

## Icon Sources

### CDN Icons (Current)
Icons are loaded from:
- **DevIcons CDN**: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/`
- **Simple Icons CDN**: `https://cdn.simpleicons.org/`

### Technologies with CDN Icons
- Angular
- React
- Nuxt
- NextJS
- SolidJS
- React Native
- Ionic
- Flutter
- Javascript
- Python
- PHP
- Scala
- Docker
- AWS
- Azure
- GitHub
- GitLab
- And more...

## Using Local Icons (Optional)

If you prefer to use local icons instead of CDN:

### Step 1: Download Icons
Download SVG icons from:
- [DevIcons GitHub](https://github.com/devicons/devicon/tree/master/icons)
- [Simple Icons](https://simpleicons.org/)
- [Iconify](https://iconify.design/)

### Step 2: Save Icons
Save icons to: `public/images/home/education-skill/`

Example:
```
public/images/home/education-skill/
  ├── angular-icon.svg
  ├── react-icon.svg
  ├── nextjs-icon.svg
  └── ...
```

### Step 3: Update Icon Mapping
Edit `src/utils/skill-icons.ts` and change CDN URLs to local paths:

```typescript
"Angular": "/images/home/education-skill/angular-icon.svg",
"React": "/images/home/education-skill/react-icon.svg",
// etc.
```

## Benefits of Current CDN Approach

✅ **No maintenance**: Icons are always up-to-date  
✅ **Smaller bundle**: Icons aren't included in build  
✅ **Fast loading**: CDN is optimized for delivery  
✅ **Easy updates**: Just update the mapping  

## Benefits of Local Icons

✅ **Offline support**: Works without internet  
✅ **Customization**: Can modify icons  
✅ **Privacy**: No external requests  
✅ **Performance**: No external DNS lookup  

## Current Icon Mapping

All icons are mapped in `src/utils/skill-icons.ts`. The function `getSkillIconPath()` handles:
- Direct name matching
- Case-insensitive matching
- Partial matching (e.g., "React Native" matches "React")
- Fallback to default icon

## Adding New Skills

To add a new skill icon:

1. Add the mapping to `src/utils/skill-icons.ts`:
```typescript
"NewSkill": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/newskill/newskill-original.svg",
```

2. Or use a local icon:
```typescript
"NewSkill": "/images/home/education-skill/newskill-icon.svg",
```

The component will automatically use the correct icon based on the skill name from your portfolio data.

