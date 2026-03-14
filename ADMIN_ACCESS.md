# 🔐 Admin Access Information

## 🌐 Your Website URLs

### Production Site
**URL:** `https://[your-site-name].netlify.app`

To find your exact URL:
1. Go to https://app.netlify.com
2. Click on your site
3. The URL is shown at the top

### Admin Panel
**URL:** `https://[your-site-name].netlify.app/admin`

---

## 👤 Admin Login Credentials

### Test Account (Created During Testing)
- **Email:** `admin@test.com`
- **Password:** `Admin123!`

### Original Account
- **Email:** `kaji@gmail.com`
- **Password:** (Your password from Supabase setup)

---

## 🚀 How to Access Admin Panel

### Step 1: Get Your Site URL
1. Go to https://app.netlify.com
2. Login with your account
3. Click on your site (probably named `kaji-we` or similar)
4. Copy the site URL (e.g., `https://amazing-site-123.netlify.app`)

### Step 2: Go to Admin
1. Add `/admin` to your site URL
2. Example: `https://your-site.netlify.app/admin`

### Step 3: Login
1. Enter email: `admin@test.com`
2. Enter password: `Admin123!`
3. Click "Login"

---

## 📊 What You Can Do in Admin

### Videos Tab
- ✅ View all project videos
- ✅ Add new videos (YouTube IDs)
- ✅ Delete videos
- ✅ Mark videos as featured

### Bookings Tab
- ✅ View all contact form submissions
- ✅ See customer details (name, email, phone, message)
- ✅ Delete old bookings

---

## 🔄 First Time Setup Checklist

Before you can access admin, make sure:

- [ ] Environment variables added to Netlify
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- [ ] Site deployed successfully (no build errors)
- [ ] Site is accessible (homepage loads)
- [ ] Admin panel loads (shows login page)

If any of these fail, check `NETLIFY_ENV_SETUP.md` for setup instructions.

---

## 🆘 Troubleshooting

### Can't Find Site URL?
1. Go to https://app.netlify.com
2. Look for site named `kaji-we` or similar
3. Click on it
4. URL is at the top of the page

### Can't Login?
**Error: "Invalid login credentials"**
- Make sure you're using: `admin@test.com` / `Admin123!`
- Check for typos (case-sensitive)
- Try the other account: `kaji@gmail.com`

**Error: "Invalid supabaseUrl"**
- Environment variables not set in Netlify
- Follow `NETLIFY_ENV_SETUP.md` to add them
- Redeploy after adding variables

### Admin Page Not Loading?
- Make sure site deployed successfully
- Check Netlify deploy logs for errors
- Clear browser cache
- Try incognito mode

---

## 📱 Quick Reference

**Netlify Dashboard:** https://app.netlify.com  
**Supabase Dashboard:** https://supabase.com/dashboard  
**GitHub Repo:** https://github.com/esor111/kaji-we

**Admin Email:** admin@test.com  
**Admin Password:** Admin123!

---

## 🔒 Security Notes

- ✅ Admin credentials are secure (hashed in database)
- ✅ Only authenticated users can access admin panel
- ✅ Only authenticated users can view bookings
- ✅ Public can only view videos and submit forms

---

## 📝 Creating New Admin Users

If you want to create more admin accounts:

1. Go to https://supabase.com/dashboard
2. Open your project: "ishwor56's Project"
3. Click "Authentication" → "Users"
4. Click "Add user" → "Create new user"
5. Enter email and password
6. ✓ Check "Auto Confirm User"
7. Click "Create user"
8. New user can now login at `/admin`

---

**Need help? Check the other documentation files:**
- `NETLIFY_ENV_SETUP.md` - Environment variables setup
- `ADMIN_TEST_COMPLETE.md` - Complete testing results
- `SETUP_COMPLETE.md` - Full setup guide
