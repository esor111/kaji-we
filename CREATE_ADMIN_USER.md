# 👤 Create Admin User - Simple Guide

## ⚠️ Important Note

The Supabase MCP server cannot create authentication users - this must be done through the Supabase Dashboard. It only takes 2 minutes!

## 🚀 Quick Steps

### Method 1: Supabase Dashboard (Recommended - 2 minutes)

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Login with your account

2. **Open Your Project**
   - Click on "ishwor56's Project"
   - Or go directly to: https://supabase.com/dashboard/project/mnrusmljldbxlgtwchqc

3. **Navigate to Authentication**
   - Click "Authentication" in the left sidebar
   - Click "Users" tab

4. **Add New User**
   - Click "Add user" button (top right)
   - Select "Create new user"

5. **Fill in Details**
   - **Email:** your-email@example.com (use your real email)
   - **Password:** (create a strong password - save it!)
   - **Auto Confirm User:** ✓ CHECK THIS BOX! (very important)
   - Leave other fields as default

6. **Create User**
   - Click "Create user" button
   - Done! User is created instantly

### Method 2: Using Supabase SQL (Alternative)

If you prefer SQL, you can run this in the Supabase SQL Editor:

```sql
-- This creates a user in the auth.users table
-- Replace with your email and password
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'your-email@example.com', -- CHANGE THIS
  crypt('your-password-here', gen_salt('bf')), -- CHANGE THIS
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

**Note:** Method 1 (Dashboard) is much easier and recommended!

## ✅ After Creating User

### Test Login

1. **Go to Admin Panel**
   - Visit: http://localhost:5173/admin

2. **Login**
   - Email: (the one you just created)
   - Password: (the one you just set)

3. **Success!**
   - You should see the admin dashboard
   - Two tabs: Videos and Bookings

### What You Can Do

**Videos Tab:**
- View all videos (3 sample videos already added)
- Add new videos (YouTube IDs)
- Delete videos
- Mark as featured

**Bookings Tab:**
- View all contact form submissions
- Delete old bookings
- See customer details

## 🎬 Replace Sample Videos

The database has 3 sample videos with YouTube ID `dQw4w9WgXcQ`. Replace them with your real videos:

1. **Upload your videos to YouTube**
   - Make them Public or Unlisted
   - Copy the video ID from URL

2. **In Admin Panel**
   - Go to Videos tab
   - Delete sample videos
   - Add your real videos with real YouTube IDs

3. **Done!**
   - Videos appear on homepage instantly

## 🔑 Your Credentials

**Supabase Project:**
- URL: https://mnrusmljldbxlgtwchqc.supabase.co
- Project ID: mnrusmljldbxlgtwchqc
- Region: Singapore (ap-southeast-1)

**Admin Panel:**
- URL: http://localhost:5173/admin
- Email: (the one you create)
- Password: (the one you set)

**Production Admin:**
- URL: https://yourdomain.com/admin (after deployment)

## 🆘 Troubleshooting

### Can't Login?

**Check:**
1. Did you check "Auto Confirm User"?
2. Are you using the correct email/password?
3. Did you restart the dev server?

**Fix:**
- Go back to Supabase Dashboard
- Authentication → Users
- Find your user
- Make sure "Email Confirmed" shows a date
- If not, click the user and confirm manually

### "Invalid Credentials" Error?

**Fix:**
- Double-check email spelling
- Make sure password is correct
- Try resetting password in Supabase Dashboard

### User Created But Can't See Videos?

**Fix:**
- Check browser console (F12) for errors
- Verify .env.local has correct credentials
- Restart dev server

## 📚 Next Steps

After creating admin user:

1. ✅ Login to admin panel
2. ✅ Delete sample videos
3. ✅ Add your real YouTube videos
4. ✅ Test contact form submission
5. ✅ Deploy to production!

## 🎉 Summary

**What's Done:**
- ✅ Database tables created
- ✅ Security policies optimized
- ✅ Sample data added
- ✅ TypeScript types generated
- ✅ Credentials configured

**What You Need:**
- ⏳ Create admin user (2 minutes)
- ⏳ Login to admin panel
- ⏳ Add real videos

**Just create the admin user and you're ready to go!** 🚀

---

**Dashboard Link:** https://supabase.com/dashboard/project/mnrusmljldbxlgtwchqc/auth/users


vanancy componet for individual hotel