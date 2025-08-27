# Diviphet Marketing Site - Cloudflare Pages Deployment Guide

## Overview
Deploy the Diviphet marketing site using Cloudflare Pages with your existing Namecheap + Cloudflare DNS setup.

## Prerequisites

- ✅ Domain registered with Namecheap
- ✅ DNS managed by Cloudflare
- ✅ GitHub repository with marketing site code
- ✅ Cloudflare account (same as your DNS account)

## Step 1: Connect GitHub to Cloudflare Pages

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages" in left sidebar

2. **Create New Pages Project**
   - Click "Create application"
   - Choose "Pages" tab
   - Click "Connect to Git"

3. **Connect GitHub Repository**
   - Authorize Cloudflare to access your GitHub
   - Select the `diviphet-marketing` repository
   - Choose branch: `main` (or your primary branch)

## Step 2: Configure Build Settings

**Build Configuration:**
```
Build command: pnpm build
Build output directory: .next
Root directory: / (leave empty if deploying from repo root)
Environment variables: (none needed for marketing site)
```

**Build Settings:**
- Node.js version: 18+ (Cloudflare will auto-detect)
- Package manager: pnpm (auto-detected from pnpm-lock.yaml)

## Step 3: Domain Configuration

### Option A: Use Primary Domain (diviphet.com)
1. In Cloudflare Pages project settings, go to "Custom domains"
2. Add custom domain: `diviphet.com`
3. Add custom domain: `www.diviphet.com`
4. Cloudflare will automatically configure DNS records

### Option B: Use Subdomain (marketing.diviphet.com)
1. Add custom domain: `marketing.diviphet.com`
2. Cloudflare creates CNAME record automatically

**Recommended:** Use primary domain for marketing site since it's your main public face.

## Step 4: SSL/Security Configuration

Cloudflare automatically provides:
- ✅ SSL certificate (Let's Encrypt)
- ✅ CDN caching globally
- ✅ DDoS protection
- ✅ Security headers (configured in `_headers` file)

## Step 5: Verify Deployment

After setup, verify:
1. **Build Success**: Check build logs in Cloudflare Pages dashboard
2. **Site Loading**: Visit your domain - should show Diviphet marketing site
3. **Performance**: Test from different locations using [tools.pingdom.com](https://tools.pingdom.com)

## Ongoing Management

### Automatic Deployments
- Every push to `main` branch triggers automatic rebuild
- Build takes ~2-3 minutes
- Zero downtime deployments

### Manual Deployment
If needed, trigger manual rebuild in Cloudflare Pages dashboard.

### Monitoring
- Build status: Cloudflare Pages dashboard
- Analytics: Cloudflare Analytics (free tier)
- Uptime: Consider [UptimeRobot](https://uptimerobot.com) for external monitoring

## DNS Records (For Reference)

After setup, your Cloudflare DNS should show:
```
Type: CNAME
Name: www
Content: diviphet-marketing.pages.dev
Proxy: Enabled (orange cloud)

Type: CNAME
Name: @ (or diviphet.com)
Content: diviphet-marketing.pages.dev
Proxy: Enabled (orange cloud)
```

## Performance Optimizations Included

- **Caching Headers**: Configured in `_headers` file
- **Static Asset Optimization**: Next.js build optimization
- **CDN**: Global Cloudflare edge network
- **Compression**: Automatic gzip/brotli compression

## Cost Estimate
- **Cloudflare Pages**: Free (up to 20,000 requests/month, 500 builds/month)
- **Cloudflare DNS**: Free
- **Bandwidth**: Free (unlimited on Pages free plan)

**Total monthly cost: $0** (well within free tier limits for marketing site)

## Troubleshooting

### Build Fails
- Check Node.js version (needs 18+)
- Verify `pnpm-lock.yaml` is committed
- Check build logs in Cloudflare dashboard

### Domain Not Working
- Verify DNS records in Cloudflare DNS tab
- Check SSL certificate status (can take 15+ minutes)
- Try incognito browser (cache issues)

### Need Help?
- Cloudflare Community: [community.cloudflare.com](https://community.cloudflare.com)
- Build logs show detailed error information

---

## Next Steps After Deployment

1. **Test all email CTAs** - verify mailto links work properly
2. **Set up analytics** (optional) - Cloudflare Analytics or Google Analytics
3. **Create staging environment** (optional) - use preview deployments for testing
4. **Monitor performance** - check site speed and uptime

**Estimated setup time: 15-30 minutes**