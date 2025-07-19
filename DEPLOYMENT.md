# Deployment Guide - GitHub Pages

This guide covers GitHub Pages deployment for the Cosmic Core Website.

## Quick Start

### Using the Deployment Script

The easiest way to deploy is using our deployment script:

```bash
# Deploy to GitHub Pages (default)
./scripts/deploy.sh

# Or explicitly
./scripts/deploy.sh deploy

# Build project only
./scripts/deploy.sh build
```

## GitHub Pages Deployment

GitHub Pages is free and integrates well with GitHub repositories.

### Prerequisites
- GitHub repository
- Repository must be public (or you need GitHub Pro for private repos)

### Setup

1. **Install gh-pages package** (already added to package.json):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**:
   ```bash
   ./scripts/deploy.sh
   ```

3. **Configure GitHub Pages** in your repository settings:
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

### Manual Deployment
```bash
npm run build
npx gh-pages -d build
```

### Custom Domain (Optional)
1. Go to your repository Settings > Pages
2. Under "Custom domain", enter your domain
3. Click Save
4. Add a CNAME file to your repository with your domain

### Your Live URL
Your website is available at: **https://vamsi.github.io/cosmic-core-website**

## Environment Configuration

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Testing
```bash
npm test
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Type Checking
```bash
npm run type-check
```

## Build Verification

Test your production build locally before deploying:

```bash
./scripts/verify-build.sh serve
```

This will:
1. Build the project
2. Verify build files
3. Serve locally at http://localhost:3000

## Troubleshooting

### Common Issues

#### Build Fails
1. Check Node.js version (requires 14+)
2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

#### Deployment Issues
1. Ensure repository is public (or you have GitHub Pro)
2. Check if gh-pages branch was created
3. Verify GitHub Pages is enabled in repository settings

#### Routing Issues
- GitHub Pages automatically handles SPA routing
- All routes will redirect to index.html

### Getting Help

1. Check the build logs: `npm run build`
2. Verify TypeScript: `npm run type-check`
3. Check linting: `npm run lint`
4. Test locally: `./scripts/verify-build.sh serve`

## Performance Optimization

### Build Optimization
- The build process automatically optimizes:
  - Code splitting
  - Tree shaking
  - Minification
  - Asset compression

### Caching
- Static assets are cached appropriately
- GitHub Pages provides CDN distribution

## Monitoring

### Performance Monitoring
- Use browser dev tools to check performance
- Monitor Core Web Vitals
- Check bundle size in build output

### Error Tracking
- Monitor browser console for errors
- Check GitHub Pages deployment logs

## Backup and Recovery

### Code Backup
- Use Git for version control
- Regular commits and pushes
- Branch protection rules for main branch

### Data Backup
- Content is stored in TypeScript files
- Images should be backed up separately
- Consider using a CDN for images

## Scaling Considerations

### Traffic Scaling
- GitHub Pages automatically handles traffic
- CDN distribution is included
- No additional scaling needed

### Content Scaling
- Implement CMS for dynamic content
- Use headless CMS like Strapi or Contentful
- Consider database for user-generated content 