# ⚡ Quick Start - Admin Panel with Supabase

## What You Have Now:

✅ **Admin Panel** at `/admin` - Works on localhost!
✅ **Email/Password Login** - Secure authentication
✅ **Video Management** - Add YouTube videos
✅ **Booking Management** - View contact form submissions
✅ **Real Database** - Supabase (not just files)

## 🚀 Setup in 10 Minutes

### 1. Create Supabase Project (2 min)
- Go to https://supabase.com
- Sign up with GitHub
- Create new project: "waterproofing-nepal"
- Choose Singapore region
- Wait for project to be ready

### 2. Get API Keys (1 min)
- Settings → API
- Copy **Project URL** and **anon public** key

### 3. Add to Your Project (1 min)
Edit `.env.local`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Restart dev server:
```bash
npm run dev
```

### 4. Create Database Tables (3 min)
- Supabase → SQL Editor → New query
- Copy SQL from `SUPABASE_SETUP.md` (Step 4)
- Run it

### 5. Create Admin User (2 min)
- Supabase → Authentication → Users
- Add user with your email/password
- ✓ Check "Auto Confirm User"

### 6. Login! (1 min)
- Go to http://localhost:5173/admin
- Login with your email/password
- Start adding videos!

## 📍 Where is Everything?

### Admin Panel:
**URL:** http://localhost:5173/admin

**Features:**
- Videos tab: Add/delete YouTube videos
- Bookings tab: View contact form submissions

### Contact Form:
- On homepage: "Book Now" button
- Saves to Supabase automatically
- View submissions in admin panel

### Videos Section:
- On homepage: Between "About" and "FAQ"
- Shows videos from Supabase
- Click to play inline

## 🎬 Add Your First Video

1. Upload video to YouTube
2. Copy video ID from URL (e.g., `dQw4w9WgXcQ`)
3. Go to `/admin` → Videos → Add Video
4. Fill in details and submit
5. Video appears on homepage instantly!

## 📊 View Bookings

1. Go to `/admin` → Bookings tab
2. See all contact form submissions
3. Delete old ones if needed

## 🌐 Deploy to Production

### Push to GitHub:
```bash
git add .
git commit -m "Add Supabase backend"
git push
```

### Deploy on Netlify:
1. Go to https://app.netlify.com
2. Import your GitHub repo
3. Add environment variables (same as .env.local)
4. Deploy!

Your admin will work at: `https://yoursite.netlify.app/admin`

## 📚 Full Documentation

- **SUPABASE_SETUP.md** - Complete setup guide with SQL and troubleshooting
- **DOMAIN_DEPLOYMENT_GUIDE.md** - Deploy on your own domain
- **ADMIN_SETUP_GUIDE.md** - Old Netlify CMS guide (ignore this)

## 🆘 Troubleshooting

### Can't login?
- Did you create user in Supabase?
- Did you check "Auto Confirm User"?
- Did you restart dev server after adding .env.local?

### Videos not showing?
- Did you run the SQL to create tables?
- Did you add videos in admin panel?
- Check browser console (F12) for errors

### Form not submitting?
- Did you create bookings table?
- Are API keys correct in .env.local?
- Check browser console for errors

## 🎉 You're Ready!

**Admin:** http://localhost:5173/admin
**Website:** http://localhost:5173

Start adding your real YouTube videos and watch bookings come in!
