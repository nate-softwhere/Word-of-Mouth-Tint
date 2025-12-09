# Quick Setup Guide for GitHub & Vercel

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `Word-of-Mouth-Tint`
3. Choose Public or Private
4. **Important:** Do NOT check "Add a README file" (we already have one)
5. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/Word-of-Mouth-Tint.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Step 3: Connect to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Find and select your `Word-of-Mouth-Tint` repository
5. Vercel will auto-detect your project settings
6. Click "Deploy"

### Option B: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to link your project

## Step 4: Enable Automatic Deployments

Once connected, Vercel will automatically deploy:
- Every push to `main` branch → Production deployment
- Every push to other branches → Preview deployment
- Every pull request → Preview deployment

## Troubleshooting

- **If you get authentication errors:** Make sure you're logged into GitHub CLI or have credentials configured
- **If Vercel can't detect your framework:** Update `vercel.json` with your specific framework settings
- **If build fails:** Check your build command in `package.json` and update `vercel.json` accordingly

