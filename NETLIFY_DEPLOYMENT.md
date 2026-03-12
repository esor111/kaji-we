# 🚀 Deploy to Netlify - Complete Guide

## ✅ Pre-Deployment Checklist

Your project is ready for Netlify deployment:
- ✅ `netlify.toml` configured
- ✅ `.gitignore` excludes `.env.local`
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA redirects configured
- ✅ Supabase backend ready
- ✅ Admin panel tested and working

---

## 📋 What You Need

1. **GitHub Account** (to push code)
2. **Netlify Account** (free - sign up with GitHub)
3. **Supabase Credentials** (you already have these):
   - URL: `https://mnrusmljldbxlgtwchqc.supabase.co`
   - Anon Key: (in your `.env.local` file)

---

## 🚀 Step-by-Step Deployment

### Step 1: Push to GitHub (5 minutes)

#### 1.1 Check Git Status
```bash
git status
```

#### 1.2 Add All Files
```bash
git add .
```

#### 1.3 Commit Changes
```bash
git commit -m "Complete Supabase integration with admin panel"
```

#### 1.4 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `waterproofing-nepal` (or your choice)
3. Description: "Waterproofing services website with admin panel"
4. **Keep it Private** (recommended)
5. **Don't** initialize with README (you already have files)
6. Click "Create repository"

#### 1.5 Push to GitHub
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/waterproofing-nepal.git

# Push code
git branch -M main
git push -u origin main
```

**Verify:** Go to your GitHub repo URL and confirm files are there.

---

### Step 2: Deploy on Netlify (5 minutes)

#### 2.1 Sign Up / Login to Netlify
1. Go to https://app.netlify.com
2. Click "Sign up" or "Log in"
3. Choose "Sign up with GitHub" (easiest)
4. Authorize Netlify to access your GitHub

#### 2.2 Create New Site
1. Click "Add new site" button
2. Click "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify (if prompted)

#### 2.3 Select Repository
1. Find your repository: `waterproofing-nepal`
2. Click on it

#### 2.4 Configure Build Settings
**Netlify should auto-detect these from `netlify.toml`:**
- **Branch to deploy:** main
- **Build command:** `npm run build`
- **Publish directory:** `dist`

**If not auto-detected, enter them manually.**

#### 2.5 Add Environment Variables
**IMPORTANT:** Click "Show advanced" → "New variable"

Add these two variables:

**Variable 1:**
- Key: `VITE_SUPABASE_URL`
- Value: `https://mnrusmljldbxlgtwchqc.supabase.co`

**Variable 2:**
- Key: `VITE_SUPABASE_ANON_KEY`
- Value: (copy from your `.env.local` file)

To get your anon key:
```bash
cat .env.local
```
Copy the long string after `VITE_SUPABASE_ANON_KEY=`

#### 2.6 Deploy!
1. Click "Deploy site"
2. Wait 2-3 minutes for build to complete
3. You'll see "Site is live" when done

---

### Step 3: Get Your Site URL (1 minute)

After deployment completes:

1. You'll see a URL like: `https://random-name-123.netlify.app`
2. Click on it to view your live site!

**Optional:** Change the site name:
1. Go to "Site settings"
2. Click "Change site name"
3. Enter: `waterproofing-nepal` (or your choice)
4. New URL: `https://waterproofing-nepal.netlify.app`

---

### Step 4: Test Your Live Site (5 minutes)

#### 4.1 Test Homepage
Visit: `https://your-site.netlify.app`

**Verify:**
- ✅ Page loads
- ✅ Videos section shows (4 videos)
- ✅ Language toggle works
- ✅ WhatsApp button works
- ✅ All sections render

#### 4.2 Test Contact Form
1. Click "Book Now"
2. Fill out form
3. Submit
4. Should see success message

#### 4.3 Test Admin Panel
Visit: `https://your-site.netlify.app/admin`

**Login with:**
- Email: `admin@test.com`
- Password: `Admin123!`

**Verify:**
- ✅ Login works
- ✅ Videos tab shows all videos
- ✅ Bookings tab shows form submissions
- ✅ Can add new video
- ✅ New video appears on homepage

---

### Step 5: Custom Domain (Optional)

If you want your own domain (e.g., `waterproofingnepal.com`):

#### 5.1 Buy Domain
- Namecheap: https://www.namecheap.com (~$10/year)
- GoDaddy: https://www.godaddy.com (~$12/year)
- Porkbun: https://porkbun.com (~$8/year)

#### 5.2 Connect to Netlify
1. Netlify → Domain settings
2. Click "Add custom domain"
3. Enter your domain
4. Follow Netlify's instructions to:
   - Update nameservers at your registrar, OR
   - Add DNS records

**See `DOMAIN_DEPLOYMENT_GUIDE.md` for detailed instructions.**

---

## 🔧 Troubleshooting

### Build Failed?

**Check build log for errors:**
1. Netlify dashboard → Deploys
2. Click failed deploy
3. Read error message

**Common fixes:**
- Missing environment variables → Add them in Site settings
- Node version issue → Add `NODE_VERSION=18` environment variable
- Build command wrong → Check `netlify.toml`

### Site Loads But Videos Don't Show?

**Check:**
1. Environment variables are set correctly
2. Supabase project is active (not paused)
3. Browser console for errors (F12)

**Fix:**
```bash
# Verify environment variables in Netlify
Site settings → Environment variables
```

### Admin Login Doesn't Work?

**Check:**
1. Environment variables are correct
2. Supabase URL and key match your project
3. Admin user exists in Supabase

**Fix:**
- Go to Supabase dashboard
- Authentication → Users
- Verify admin@test.com exists

### Form Submissions Not Saving?

**Check:**
1. Supabase credentials correct
2. Database tables exist
3. RLS policies allow inserts

**Fix:**
```bash
# Test database connection
# Go to Supabase SQL Editor and run:
SELECT COUNT(*) FROM bookings;
```

---

## 📊 Post-Deployment Checklist

After successful deployment:

- [ ] Homepage loads correctly
- [ ] Videos section displays all videos
- [ ] Contact form submits successfully
- [ ] Admin login works
- [ ] Can add videos through admin
- [ ] New videos appear on homepage
- [ ] Bookings visible in admin
- [ ] Language toggle works
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] All links work

---

## 🔄 Future Updates

### How to Update Your Site:

**Method 1: Through Admin Panel**
1. Go to `/admin`
2. Add/edit videos
3. Changes appear immediately

**Method 2: Code Changes**
```bash
# Make changes to code
git add .
git commit -m "Update homepage design"
git push

# Netlify auto-deploys in 2-3 minutes!
```

### Automatic Deployments:
- ✅ Every push to `main` branch triggers auto-deploy
- ✅ Build takes 2-3 minutes
- ✅ No manual action needed

---

## 💰 Costs

### Netlify Free Tier (More than enough):
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS included
- ✅ CDN included
- ✅ Form submissions: 100/month

### Supabase Free Tier:
- ✅ 500MB database
- ✅ 1GB file storage
- ✅ 2GB bandwidth
- ✅ 50,000 monthly active users

**Total Cost: $0/month** 🎉

---

## 🎯 Quick Reference

### Your URLs:
- **Live Site:** `https://your-site.netlify.app`
- **Admin Panel:** `https://your-site.netlify.app/admin`
- **Netlify Dashboard:** https://app.netlify.com
- **Supabase Dashboard:** https://supabase.com/dashboard

### Admin Credentials:
- **Email:** admin@test.com
- **Password:** Admin123!

### Supabase Project:
- **Project:** ishwor56's Project
- **ID:** mnrusmljldbxlgtwchqc
- **Region:** Singapore

### Environment Variables:
```
VITE_SUPABASE_URL=https://mnrusmljldbxlgtwchqc.supabase.co
VITE_SUPABASE_ANON_KEY=[your-key-from-.env.local]
```

---

## 📞 Support

### Netlify Issues:
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://netlifystatus.com

### Supabase Issues:
- Docs: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions
- Status: https://status.supabase.com

---

## 🎉 You're Live!

After following these steps, your site will be:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ HTTPS secured
- ✅ Fast (CDN)
- ✅ Auto-deploying on updates
- ✅ Admin panel working
- ✅ Forms saving to database
- ✅ 100% FREE

**Share your site:**
- WhatsApp: Send link to customers
- Facebook: Post your URL
- Google: Will index automatically

---

## 🚀 Ready to Deploy?

**Run these commands now:**

```bash
# 1. Check status
git status

# 2. Add all files
git add .

# 3. Commit
git commit -m "Ready for production deployment"

# 4. Create GitHub repo (do this on github.com/new)

# 5. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/waterproofing-nepal.git
git branch -M main
git push -u origin main

# 6. Go to netlify.com and deploy!
```

**Then:**
1. Go to https://app.netlify.com
2. Import your GitHub repo
3. Add environment variables
4. Deploy!

**Your site will be live in 5 minutes!** 🎉

---

**Need help? Just ask!** I can guide you through any step.
