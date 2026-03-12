# 🚀 Supabase Backend Setup Guide

## What You'll Have:
- ✅ Admin panel at `/admin` (works on localhost!)
- ✅ Email/password login
- ✅ Upload YouTube videos
- ✅ View all booking submissions
- ✅ Real database (not just files)
- ✅ Works everywhere (localhost + production)

## ⚡ Quick Setup (10 Minutes)

### Step 1: Create Supabase Account (2 minutes)

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (easiest)
4. Create a new project:
   - **Name:** waterproofing-nepal
   - **Database Password:** (create a strong password - save it!)
   - **Region:** Singapore (closest to Nepal)
5. Wait 2 minutes for project to be ready

### Step 2: Get Your API Keys (1 minute)

1. In Supabase dashboard, click "Settings" (gear icon)
2. Click "API" in sidebar
3. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### Step 3: Add Keys to Your Project (1 minute)

1. Open `.env.local` file in your project
2. Replace with your actual values:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Save the file
4. Restart your dev server:
```bash
npm run dev
```

### Step 4: Create Database Tables (3 minutes)

1. In Supabase dashboard, click "SQL Editor"
2. Click "New query"
3. Copy and paste this SQL:

```sql
-- Create videos table
CREATE TABLE videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  youtube_id TEXT NOT NULL,
  description TEXT NOT NULL,
  project_type TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read videos (for public website)
CREATE POLICY "Anyone can view videos"
  ON videos FOR SELECT
  USING (true);

-- Allow authenticated users to manage videos
CREATE POLICY "Authenticated users can insert videos"
  ON videos FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update videos"
  ON videos FOR UPDATE
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete videos"
  ON videos FOR DELETE
  USING (auth.role() = 'authenticated');

-- Allow anyone to submit bookings (for contact form)
CREATE POLICY "Anyone can submit bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can view bookings
CREATE POLICY "Authenticated users can view bookings"
  ON bookings FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete bookings"
  ON bookings FOR DELETE
  USING (auth.role() = 'authenticated');
```

4. Click "Run" button
5. You should see "Success. No rows returned"

### Step 5: Create Admin User (2 minutes)

1. In Supabase dashboard, click "Authentication"
2. Click "Users" tab
3. Click "Add user" → "Create new user"
4. Fill in:
   - **Email:** your-email@example.com
   - **Password:** (create a strong password)
   - **Auto Confirm User:** ✓ (check this!)
5. Click "Create user"

### Step 6: Test Admin Panel (1 minute)

1. Go to http://localhost:5173/admin
2. Login with your email and password
3. You should see the admin dashboard!
4. Try adding a video:
   - Title: "Test Project"
   - YouTube ID: `dQw4w9WgXcQ` (example)
   - Description: "Test description"
   - Project Type: Basement
   - Click "Add Video"

## ✅ You're Done!

### What You Can Do Now:

**Admin Panel:** http://localhost:5173/admin

**Features:**
- ✅ Add/delete YouTube videos
- ✅ View all booking submissions
- ✅ Works on localhost
- ✅ Works on production (after deploy)

### Test the Contact Form:

1. Go to http://localhost:5173
2. Click "Book Now"
3. Fill the form and submit
4. Go to `/admin` → Bookings tab
5. You should see your submission!

## 🎬 How to Add Videos

### Step 1: Upload to YouTube
1. Upload your waterproofing project video to YouTube
2. Make sure video is "Public" or "Unlisted"
3. Copy the video ID from URL

**Example:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ` ← Copy this part

### Step 2: Add in Admin
1. Go to `/admin`
2. Click "Videos" tab
3. Click "Add Video"
4. Fill in:
   - **Title:** "Basement Waterproofing - Kathmandu"
   - **YouTube Video ID:** `dQw4w9WgXcQ`
   - **Description:** "Complete basement waterproofing project in Kathmandu"
   - **Project Type:** Basement
   - **Featured:** Check if you want "Featured" badge
5. Click "Add Video"

Done! Video appears on your website instantly!

## 📊 View Bookings

1. Go to `/admin`
2. Click "Bookings" tab
3. See all contact form submissions
4. Delete old ones if needed

## 🌐 Deploy to Production

### Option 1: Netlify (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Add Supabase backend"
git push
```

2. Deploy on Netlify:
   - Go to https://app.netlify.com
   - Import your GitHub repo
   - Add environment variables:
     - `VITE_SUPABASE_URL` = your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your anon key
   - Deploy!

3. Your admin will work at: `https://yoursite.netlify.app/admin`

### Option 2: Vercel

1. Push to GitHub
2. Go to https://vercel.com
3. Import your repo
4. Add environment variables (same as above)
5. Deploy!

## 🔒 Security Notes

### What's Secure:
- ✅ Admin login required to view bookings
- ✅ Admin login required to add/delete videos
- ✅ Passwords are hashed
- ✅ API keys are safe (anon key is public-safe)
- ✅ Row Level Security enabled

### What's Public:
- ✅ Anyone can view videos (needed for website)
- ✅ Anyone can submit contact form (needed for bookings)

### Admin Access:
- Only users you create in Supabase can login to `/admin`
- No one else can access admin panel
- No one else can view bookings

## 💰 Costs

### Free Tier (More than enough for you):
- ✅ 500MB database
- ✅ 1GB file storage
- ✅ 2GB bandwidth
- ✅ 50,000 monthly active users
- ✅ Unlimited API requests

**You won't need to pay anything!**

## 🆘 Troubleshooting

### Can't Login to Admin?

**Check:**
1. Did you create a user in Supabase Authentication?
2. Did you check "Auto Confirm User"?
3. Are you using the correct email/password?
4. Did you restart dev server after adding .env.local?

**Fix:**
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### Videos Not Showing?

**Check:**
1. Did you run the SQL to create tables?
2. Did you add .env.local with correct keys?
3. Did you restart dev server?
4. Check browser console for errors (F12)

### Form Not Submitting?

**Check:**
1. Did you create the bookings table?
2. Are the API keys correct in .env.local?
3. Check browser console for errors (F12)

### "Invalid API key" Error?

**Fix:**
1. Go to Supabase → Settings → API
2. Copy the **anon public** key (not service_role!)
3. Update .env.local
4. Restart dev server

## 📞 Need Help?

### Supabase Docs:
- https://supabase.com/docs
- https://supabase.com/docs/guides/auth
- https://supabase.com/docs/guides/database

### Common Issues:
- **Row Level Security:** Make sure you ran all the SQL policies
- **Authentication:** Make sure you created a user and checked "Auto Confirm"
- **Environment Variables:** Make sure .env.local is in root folder (not src/)

## 🎉 You're All Set!

### What You Have:
- ✅ Admin panel at `/admin`
- ✅ Email/password login
- ✅ Add/delete videos
- ✅ View bookings
- ✅ Works on localhost
- ✅ Ready for production
- ✅ 100% FREE

### Next Steps:
1. Add your real YouTube videos
2. Test the contact form
3. Deploy to production
4. Share with customers!

**Admin URL (localhost):** http://localhost:5173/admin

**Admin URL (production):** https://yourdomain.com/admin

**Start managing your content!** 🚀
