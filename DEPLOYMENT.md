# Deploying SmartCare Dashboard to Vercel

## Quick Start

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `smartcare_dashboard_bitcode` from your repositories
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist/public` (should auto-detect from vercel.json)
   - **Install Command**: `npm install` (should auto-detect)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd c:\Users\M BHUVANESWAR\Downloads\Repl-Image-Design\Repl-Image-Design
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `smartcare-dashboard` (or your choice)
   - In which directory is your code located? `./`
   - Want to override settings? **N**

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Configuration Files

### vercel.json
Already created with:
- Build command: `npm run build`
- Output directory: `dist/public`
- API routing to serverless functions
- SPA routing for client-side navigation

### .vercelignore
Excludes unnecessary files to optimize deployment size.

## What Happens During Deployment

1. **Install Dependencies**
   - Vercel runs `npm install`
   - Installs all production dependencies

2. **Build Process**
   - Runs `npm run build`
   - Vite builds the frontend to `dist/public`
   - Express server is bundled to `dist/index.cjs`

3. **Deploy**
   - Static files served from Vercel CDN
   - API routes handled by serverless functions
   - Automatic HTTPS and global CDN

## Post-Deployment

### Testing Your Deployment

1. **Visit Your URL**
   - Open `https://your-project-name.vercel.app`
   - Should redirect to login page

2. **Test Login**
   - Enter any email/password
   - Should redirect to dashboard

3. **Test Navigation**
   - Click through different pages
   - Verify all routes work

4. **Test Logout**
   - Click avatar → Log out
   - Should return to login

### Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

For demo mode, no environment variables are needed. For production with database:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `SESSION_SECRET` - Random secret for sessions
   - `NODE_ENV` - Set to `production`

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Verify `npm run build` works locally

### API Routes Not Working
- Check `vercel.json` routing configuration
- Verify API endpoints in browser DevTools
- Check serverless function logs in Vercel Dashboard

### Login Not Persisting
- Check browser localStorage
- Verify HTTPS is enabled (Vercel provides this automatically)

### 404 on Page Refresh
- Ensure `vercel.json` has SPA routing configured (already included)

## Continuous Deployment

Once deployed, Vercel automatically:
- Deploys every push to `main` branch
- Creates preview deployments for pull requests
- Provides deployment URLs for testing

To trigger a new deployment:
```bash
git add .
git commit -m "Update application"
git push origin main
```

Vercel will automatically detect the push and deploy!

## Monitoring

- **Deployment Logs**: Vercel Dashboard → Deployments → Click deployment
- **Runtime Logs**: Vercel Dashboard → Your Project → Logs
- **Analytics**: Vercel Dashboard → Your Project → Analytics

## Next Steps After Deployment

1. ✅ Test all functionality on live URL
2. ✅ Share URL with team/stakeholders
3. ✅ Set up custom domain (optional)
4. ✅ Configure environment variables for production database
5. ✅ Enable Vercel Analytics (optional)
6. ✅ Set up monitoring and alerts

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Community: https://github.com/vercel/vercel/discussions
- Project Repository: https://github.com/BHUVI-SHIP-IT/smartcare_dashboard_bitcode

---

**Your SmartCare Dashboard is ready to deploy! 🚀**
