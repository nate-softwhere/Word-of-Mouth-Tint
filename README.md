# Word-of-Mouth-Tint

## Getting Started

This project is set up for deployment on Vercel and version control with GitHub.

## Setup Instructions

### GitHub Setup

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new)
   - Name it `Word-of-Mouth-Tint` (or your preferred name)
   - Choose public or private
   - **Don't** initialize with README, .gitignore, or license (we already have these)

2. **Connect your local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Word-of-Mouth-Tint.git
   git branch -M main
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### Vercel Setup

1. **Install Vercel CLI (optional but recommended):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [Vercel](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository `Word-of-Mouth-Tint`
   - Vercel will auto-detect your framework settings
   - Click "Deploy"

3. **Or deploy via CLI:**
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

## Project Structure

Add your project files here. Vercel supports:
- Next.js
- React
- Vue
- Angular
- Static HTML
- And many more frameworks

## Environment Variables

If you need environment variables:
1. Add them in Vercel Dashboard → Project Settings → Environment Variables
2. Or create a `.env.local` file for local development (already in .gitignore)

## Continuous Deployment

Once connected, every push to the `main` branch will automatically deploy to Vercel!

