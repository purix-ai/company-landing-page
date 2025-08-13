# GitHub Secrets Setup for Contentful

## Required Secrets

You need to add these secrets to your GitHub repository for the blog to work in production:

### 1. Go to GitHub Repository Settings
- Navigate to your repository on GitHub
- Click on **Settings** tab
- Go to **Secrets and variables** → **Actions**

### 2. Add Repository Secrets

Click **New repository secret** and add these two secrets:

**Secret 1:**
- Name: `VITE_CONTENTFUL_SPACE_ID`
- Value: `2itxhj3ivc14`

**Secret 2:**  
- Name: `VITE_CONTENTFUL_ACCESS_TOKEN`
- Value: `wUPewv49Cfwr0QM-xWyb_f8S_INVWygZ1nbThe_ZidM`

### 3. Verify Setup
- The secrets should show up in the list (values will be hidden)
- The GitHub Actions workflow will now have access to these environment variables during build

### 4. Deploy
After adding the secrets:
- Push any change to the main branch, or
- Go to **Actions** tab and manually trigger "Deploy to GitHub Pages"

## Security Notes
- These secrets are only accessible during GitHub Actions builds
- They are not visible in the repository code
- The `.env.local` file remains gitignored for local development
- Production builds will use the GitHub Secrets instead of local env files

## Troubleshooting
If the blog shows "Loading..." or no content after deployment:
1. Check that both secrets are added with correct names
2. Verify the Contentful Space ID and Access Token are correct
3. Check the Actions log for any build errors