# Deployment Guide

This guide covers deploying the Nebula AI Automation website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering the best performance and developer experience.

### Method 1: Deploy via GitHub

1. **Push your code to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/nebula-website.git
git push -u origin main
```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all variables from `ENVIRONMENT.md`
   - Redeploy if needed

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📦 Other Deployment Options

### Netlify

1. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

2. **Deploy**:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

### AWS Amplify

1. **Connect repository** in AWS Amplify Console
2. **Build settings** (auto-detected):
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t nebula-website .
docker run -p 3000:3000 nebula-website
```

### Self-Hosted (VPS/DigitalOcean)

1. **Install Node.js** on your server:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clone and build**:
```bash
git clone https://github.com/yourusername/nebula-website.git
cd nebula-website
npm install
npm run build
```

3. **Use PM2 for process management**:
```bash
npm install -g pm2
pm2 start npm --name "nebula" -- start
pm2 save
pm2 startup
```

4. **Set up Nginx reverse proxy**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔐 Pre-Deployment Checklist

### Code Review
- [ ] Remove all console.logs and debug code
- [ ] Test all forms and interactions
- [ ] Verify all links work correctly
- [ ] Check responsive design on all breakpoints
- [ ] Run `npm run build` locally to check for errors

### Environment Variables
- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Use production Stripe keys
- [ ] Configure production database
- [ ] Set up production email service
- [ ] Add Google Analytics ID

### Security
- [ ] Enable HTTPS/SSL
- [ ] Set secure headers in `next.config.ts`
- [ ] Implement rate limiting on API routes
- [ ] Set up CORS policies
- [ ] Configure CSP (Content Security Policy)

### Performance
- [ ] Optimize images (use WebP format)
- [ ] Enable caching headers
- [ ] Set up CDN for static assets
- [ ] Configure database connection pooling
- [ ] Enable gzip/brotli compression

### SEO
- [ ] Verify meta tags on all pages
- [ ] Submit sitemap to Google Search Console
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD)
- [ ] Test Core Web Vitals

## 🔧 Production Configuration

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
```

## 📊 Monitoring

### Set up monitoring services:

1. **Vercel Analytics** (if using Vercel)
   - Automatically enabled for all deployments

2. **Sentry** for error tracking:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

3. **Google Analytics**:
   - Add tracking ID to environment variables
   - Implement in `layout.tsx`

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🎯 Post-Deployment

1. **Test the production site**:
   - Browse all pages
   - Test forms
   - Check mobile responsiveness
   - Verify API integrations

2. **Set up uptime monitoring**:
   - Use services like UptimeRobot or Pingdom
   - Configure alerts for downtime

3. **Performance testing**:
   - Run Lighthouse audit
   - Check PageSpeed Insights
   - Monitor Core Web Vitals

4. **Set up backups**:
   - Database backups (daily/weekly)
   - Code repository backups
   - Media/asset backups

## 🆘 Troubleshooting

### Build Failures
- Check Node version (use v18+)
- Verify all environment variables are set
- Review build logs for specific errors

### Runtime Errors
- Check server logs
- Verify database connection
- Ensure all API keys are valid

### Performance Issues
- Enable caching
- Optimize images
- Review database queries
- Check for memory leaks

## 📞 Support

For deployment issues:
- Check [Next.js Deployment docs](https://nextjs.org/docs/deployment)
- Review [Vercel documentation](https://vercel.com/docs)
- Join [Next.js Discord](https://nextjs.org/discord)

---

**Happy Deploying! 🚀**
