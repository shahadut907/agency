# 🚀 Quick Reference Guide

## 🔗 Important URLs

| Purpose | URL |
|---------|-----|
| **Homepage** | http://localhost:3000 |
| **Admin Login** | http://localhost:3000/auth/signin |
| **Admin Dashboard** | http://localhost:3000/admin |
| **Manage Services** | http://localhost:3000/admin/services |
| **Manage Pricing** | http://localhost:3000/admin/pricing |
| **View Leads** | http://localhost:3000/admin/leads |

---

## 🔐 Admin Credentials

```
Email: admin@agency.com
Password: admin123
```

**⚠️ IMPORTANT:** Change this password in production!

---

## 💻 Commands

### Start Development Server:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Run Production Build:
```bash
npm start
```

### Database Commands:
```bash
# Push schema changes to database
npx prisma db push

# Seed database with sample data
npx tsx prisma/seed.ts

# Open Prisma Studio (database GUI)
npx prisma studio
```

---

## 📝 Common Tasks

### Add New Service:
1. Go to: `/admin/services`
2. Click "Add Service"
3. Fill form (title, description, icon name)
4. Submit → appears on homepage

### Add New Pricing Plan:
1. Go to: `/admin/pricing`
2. Click "Add Pricing Plan"
3. Fill details, add features
4. Submit → appears on homepage

### Check Leads:
1. Go to: `/admin/leads`
2. View all contact submissions
3. Click eye icon for full message
4. Update status via dropdown
5. Delete spam/old leads

---

## 🐛 Troubleshooting

### Can't Login?
1. Make sure `.env.local` file exists
2. Restart dev server: Stop (Ctrl+C) and `npm run dev`
3. Try clearing browser cookies
4. Re-run seed script: `npx tsx prisma/seed.ts`

### Database Errors?
```bash
# Reset database
del prisma\dev.db
npx prisma db push
npx tsx prisma/seed.ts
```

### Build Errors?
1. Delete `.next` folder
2. Run `npm run dev` again

### Missing Components?
```bash
# Install missing shadcn components
npx shadcn@latest add [component-name]
```

---

## 📚 Documentation Files

| File | What's Inside |
|------|---------------|
| `IMPLEMENTATION_COMPLETE.md` | **Full overview of everything built** |
| `BACKEND_GUIDE.md` | Backend architecture & setup |
| `LEAD_STATUS_SYSTEM.md` | How to use lead management |
| `CRUD_TESTING.md` | Testing guide for all CRUD operations |
| `LOGIN_FIX.md` | Login troubleshooting |
| `HYDRATION_ERROR_FIX.md` | Hydration error explanation |

---

## 🎨 Customization

### Change Colors:
Edit: `src/app/globals.css`

### Change Site Name:
Edit: `src/app/layout.tsx`

### Add New Admin Section:
1. Create folder in `src/app/admin/[new-section]/`
2. Add `page.tsx`
3. Update sidebar in `src/app/admin/layout.tsx`

### Modify Homepage Sections:
Edit components in: `src/components/`

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Change admin password in database
- [ ] Update `NEXTAUTH_SECRET` in `.env`
- [ ] Switch to PostgreSQL database
- [ ] Add real content through admin panel
- [ ] Test all CRUD operations
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Add Google Analytics (optional)

---

## 🎯 Features Overview

✅ **Frontend:**
- Animated homepage with all sections
- Dynamic services from database
- Dynamic pricing from database
- Working contact form

✅ **Backend:**
- SQLite database (Prisma)
- NextAuth authentication
- Server actions for CRUD
- API routes

✅ **Admin Panel:**
- Dashboard with stats
- Services management
- Pricing management
- Lead management with 5 status levels
- Secure login required

---

## 📞 Support

If you encounter issues:
1. Check terminal for error messages
2. Check browser console (F12)
3. Review documentation files
4. Check database with `npx prisma studio`

---

**Everything is working and ready to use!** 🎉

Start by:
1. Testing the admin panel
2. Adding your real content
3. Customizing colors/branding
4. Preparing for deployment
