# 🌐 Deploy on Your Own Domain - Complete Guide

## 🎯 Overview

You'll deploy your site on a custom domain (e.g., `waterproofingnepal.com`)

**Steps:**
1. Buy a domain (if you don't have one)
2. Deploy to Netlify
3. Connect your domain
4. Enable HTTPS
5. Set up admin panel

**Time:** 15-20 minutes
**Cost:** Domain only (~$10-15/year)

## 📋 Prerequisites

- [ ] Domain name (buy or use existing)
- [ ] GitHub account
- [ ] Netlify account (free)
- [ ] Your code pushed to GitHub

## 🛒 Step 1: Buy a Domain (If Needed)

### Recommended Registrars for Nepal:

#### Option 1: Namecheap (Recommended)
- **Website:** https://www.namecheap.com
- **Price:** $8-12/year
- **Payment:** Credit card, PayPal
- **Why:** Cheap, reliable, easy DNS

#### Option 2: GoDaddy
- **Website:** https://www.godaddy.com
- **Price:** $10-15/year
- **Payment:** Credit card, PayPal
- **Why:** Popular, good support

#### Option 3: Porkbun
- **Website:** https://porkbun.com
- **Price:** $7-10/year
- **Payment:** Credit card, PayPal
- **Why:** Cheapest, includes free WHOIS privacy

#### Option 4: Nepal Domain (.np)
- **Website:** https://register.com.np
- **Price:** NPR 1,000-2,000/year
- **Why:** Local .np domain
- **Note:** Slower process, requires documents

### Domain Name Ideas:
- `waterproofingnepal.com`
- `nepalwaterproofing.com`
- `waterproofnepal.com`
- `waterproofingktm.com`
- `yourcompanyname.com`

### How to Buy:
1. Go to registrar website
2. Search for your domain
3. Add to cart
4. Create account
5. Pay
6. Done! (You own the domain)

## 🚀 Step 2: Deploy to Netlify

### A. Push Code to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Waterproofing Nepal site"

# Create repo on GitHub (github.com/new)
# Then connect and push:
git remote add origin https://github.com/yourusername/waterproofing-nepal.git
git branch -M main
git push -u origin main
```

### B. Deploy on Netlify

1. **Go to Netlify:**
   - Visit https://app.netlify.com
   - Sign up/Login (use GitHub)

2. **Add New Site:**
   - Click "Add new site"
   - Click "Import an existing project"

3. **Connect GitHub:**
   - Click "GitHub"
   - Authorize Netlify
   - Select your repository

4. **Configure Build:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

5. **Wait for Deploy:**
   - Takes 1-2 minutes
   - You'll get a URL like: `random-name-123.netlify.app`

6. **Test Site:**
   - Click the URL
   - Make sure everything works

## 🔗 Step 3: Connect Your Domain

### Option A: Domain from Namecheap/GoDaddy/Porkbun

#### In Netlify:

1. **Go to Domain Settings:**
   - Netlify dashboard → Your site
   - Click "Domain settings"
   - Click "Add custom domain"

2. **Add Your Domain:**
   - Enter: `yourdomain.com`
   - Click "Verify"
   - Click "Add domain"

3. **Get Netlify Nameservers:**
   - Netlify will show you nameservers like:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Copy these!

#### In Your Domain Registrar:

**For Namecheap:**
1. Login to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to your domain
4. Find "Nameservers" section
5. Select "Custom DNS"
6. Paste Netlify nameservers
7. Click "Save"

**For GoDaddy:**
1. Login to GoDaddy
2. Go to "My Products"
3. Click "DNS" next to your domain
4. Scroll to "Nameservers"
5. Click "Change"
6. Select "Custom"
7. Paste Netlify nameservers
8. Click "Save"

**For Porkbun:**
1. Login to Porkbun
2. Go to "Domain Management"
3. Click your domain
4. Find "Authoritative Nameservers"
5. Paste Netlify nameservers
6. Click "Update"

#### Wait for DNS Propagation:
- **Time:** 1-24 hours (usually 1-2 hours)
- **Check:** Visit your domain
- **Status:** Netlify shows "Awaiting DNS propagation"

### Option B: Keep Domain Registrar DNS (Alternative)

If you don't want to change nameservers:

#### In Netlify:
1. Domain settings → Add custom domain
2. Add your domain
3. Click "Set up Netlify DNS" → Skip this
4. Note the IP address shown (e.g., `75.2.60.5`)

#### In Your Domain Registrar:
1. Go to DNS settings
2. Add A Record:
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** Netlify IP address
   - **TTL:** Automatic or 3600
3. Add CNAME Record:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `your-site.netlify.app`
   - **TTL:** Automatic or 3600
4. Save

## 🔒 Step 4: Enable HTTPS (SSL)

**Good news:** Netlify does this automatically!

1. **Wait for DNS:**
   - Domain must be connected first
   - DNS propagation complete

2. **Auto-SSL:**
   - Netlify → Domain settings
   - "HTTPS" section
   - Should say "Certificate provisioning"
   - Wait 1-2 minutes

3. **Force HTTPS:**
   - Once certificate is ready
   - Enable "Force HTTPS"
   - All traffic redirected to HTTPS

4. **Done!**
   - Your site now has 🔒 padlock
   - Secure connection

## 👤 Step 5: Set Up Admin Panel

### A. Enable Netlify Identity

1. **In Netlify Dashboard:**
   - Your site → Identity
   - Click "Enable Identity"

2. **Configure Settings:**
   - Identity → Settings
   - Registration: "Invite only"
   - External providers: Disable (or keep GitHub if you want)

3. **Enable Git Gateway:**
   - Identity → Settings
   - Services → Git Gateway
   - Click "Enable Git Gateway"

### B. Invite Yourself

1. **Invite User:**
   - Identity → "Invite users"
   - Enter your email
   - Click "Send"

2. **Accept Invitation:**
   - Check your email
   - Click "Accept the invite"
   - Set your password
   - Confirm

3. **Done!**
   - You can now login to `/admin`

### C. Access Admin Panel

Visit: `https://yourdomain.com/admin`

Login with your email + password

## 🎯 Step 6: Configure Domain in Code (Optional)

Update `netlify.toml` if you have custom redirects:

```toml
[[redirects]]
  from = "https://www.yourdomain.com/*"
  to = "https://yourdomain.com/:splat"
  status = 301
  force = true

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## ✅ Verification Checklist

After setup, verify:

- [ ] Domain loads: `https://yourdomain.com`
- [ ] WWW redirects: `https://www.yourdomain.com` → `https://yourdomain.com`
- [ ] HTTPS works: 🔒 padlock shows
- [ ] Admin works: `https://yourdomain.com/admin`
- [ ] Forms work: Test contact form
- [ ] WhatsApp button works
- [ ] Language toggle works
- [ ] Videos section shows
- [ ] Mobile responsive

## 🔄 Future Updates

### How to Update Your Site:

```bash
# Make changes to code
# Then:
git add .
git commit -m "Update content"
git push

# Netlify auto-deploys in 30 seconds!
```

### Through Admin Panel:
- Go to `/admin`
- Make changes
- Click "Publish"
- Live in 30 seconds!

## 💰 Costs Breakdown

### One-Time:
- Domain: $8-15/year
- Everything else: FREE

### Monthly:
- Hosting: FREE (Netlify)
- SSL: FREE (Netlify)
- Forms: FREE (100/month)
- Identity: FREE (1000 users)
- Bandwidth: FREE (100GB/month)
- Builds: FREE (300 min/month)

**Total:** ~$1/month (just domain)

## 🌍 Domain Examples for Nepal

### .com Domains:
- `waterproofingnepal.com`
- `nepalwaterproofing.com`
- `waterproofktm.com`
- `ktmwaterproofing.com`

### .np Domains:
- `waterproofing.com.np`
- `yourcompany.com.np`
- `waterproof.com.np`

### .net/.org:
- `waterproofingnepal.net`
- `nepalwaterproofing.org`

## 🆘 Troubleshooting

### Domain Not Working?

**Check:**
1. DNS propagation (use https://dnschecker.org)
2. Nameservers correct in registrar
3. Wait 24 hours max
4. Clear browser cache

### HTTPS Not Working?

**Fix:**
1. Wait for DNS propagation first
2. Netlify → Domain settings → HTTPS
3. Click "Verify DNS configuration"
4. Wait 5 minutes
5. Refresh

### Admin Not Working?

**Fix:**
1. Make sure Identity is enabled
2. Check email for invitation
3. Set password from email link
4. Clear browser cache
5. Try incognito mode

### Form Not Submitting?

**Fix:**
1. Check Netlify Forms is enabled
2. Form has `data-netlify="true"`
3. Form has `name="contact"`
4. Deploy is complete
5. Test on live site (not localhost)

## 📞 Support

### Netlify Support:
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://netlifystatus.com

### Domain Support:
- Namecheap: Live chat 24/7
- GoDaddy: Phone support
- Porkbun: Email support

## 🎉 You're Live!

### What You Have:
- ✅ Custom domain (yourdomain.com)
- ✅ HTTPS/SSL (secure 🔒)
- ✅ Admin panel (/admin)
- ✅ Auto-deploy (push to update)
- ✅ Form submissions
- ✅ Free hosting
- ✅ Fast CDN

### Share Your Site:
- `https://yourdomain.com`
- WhatsApp: Share link
- Facebook: Post link
- Google: Will index automatically

### Next Steps:
1. Add real content through admin
2. Upload YouTube videos
3. Add customer reviews
4. Share with customers!

## 🚀 Quick Reference

### Your URLs:
- **Website:** `https://yourdomain.com`
- **Admin:** `https://yourdomain.com/admin`
- **Netlify:** `https://app.netlify.com`

### Login:
- **Admin:** Your email + password
- **Netlify:** GitHub account

### Update Site:
- **Code:** Push to GitHub
- **Content:** Edit in `/admin`

---

**Congratulations! Your site is live on your own domain!** 🎉
