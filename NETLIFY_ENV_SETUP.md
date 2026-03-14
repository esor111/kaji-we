# 🚀 Netlify Environment Variables Setup

## ⚡ Quick Setup (2 Minutes)

You need to add environment variables to Netlify **ONE TIME ONLY**.

### Step 1: Go to Netlify Dashboard
1. Open https://app.netlify.com
2. Click on your site
3. Go to **Site configuration** → **Environment variables**

### Step 2: Add Variables

Click "Add a variable" and add these TWO variables:

#### Variable 1:
- **Key:** `VITE_SUPABASE_URL`
- **Value:** `https://mnrusmljldbxlgtwchqc.supabase.co`
- **Scopes:** All (Production, Deploy Previews, Branch deploys)

#### Variable 2:
- **Key:** `VITE_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucnVzbWxqbGRieGxndHdjaHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MDMxNzMsImV4cCI6MjA4ODE3OTE3M30.tnefQwOMhHgU9awQzVoyeGflhWZWwWZSWmiDrQuNz7s`
- **Scopes:** All (Production, Deploy Previews, Branch deploys)

### Step 3: Redeploy
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait ~1 minute for build to complete
4. Done! ✅

---

## 📋 Copy-Paste Values

For easy copy-paste:

**VITE_SUPABASE_URL:**
```
https://mnrusmljldbxlgtwchqc.supabase.co
```

**VITE_SUPABASE_ANON_KEY:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucnVzbWxqbGRieGxndHdjaHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MDMxNzMsImV4cCI6MjA4ODE3OTE3M30.tnefQwOMhHgU9awQzVoyeGflhWZWwWZSWmiDrQuNz7s
```

---

## ❓ Why Manual?

Environment variables contain sensitive API keys and **cannot** be committed to git for security reasons. This is a one-time setup that takes 2 minutes.

---

## ✅ After Setup

Once you add the variables and redeploy:
- ✅ Website will load
- ✅ Videos will display
- ✅ Contact form will work
- ✅ Admin panel will work
- ✅ Everything functional!

---

## 🆘 Troubleshooting

### Still getting "Invalid supabaseUrl" error?
1. Make sure you clicked "Save" after adding variables
2. Make sure you triggered a new deploy
3. Clear your browser cache
4. Try incognito mode

### Variables not showing?
- Check you're in the right site
- Check the variable names are EXACTLY as shown (case-sensitive)
- Make sure there are no extra spaces

---

**This is a ONE-TIME setup. You'll never need to do this again!** 🎉
