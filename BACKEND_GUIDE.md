# Backend and Admin Panel Implementation Guide

## Overview
This AI automation agency website now has a complete backend with database, authentication, and a secure admin panel.

## Admin Access

### Login Credentials
- **URL**: http://localhost:3000/auth/signin
- **Email**: admin@agency.com
- **Password**: admin123

### Admin Panel URL
After logging in, you'll be redirected to: http://localhost:3000/admin

## Environment Variables Setup

Create a `.env.local` file in the root directory with:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="supersecretkey123"
NEXTAUTH_URL="http://localhost:3000"
```

**Important**: Change `NEXTAUTH_SECRET` to a secure random string for production.

## Database Structure

### Models
1. **User** - Admin users with role-based authentication
2. **Service** - Manageable services shown on the homepage
3. **PricingPlan** - Dynamic pricing plans with features
4. **PricingFeature** - Individual features for each plan
5. **ContactSubmission** - Contact form leads

### Seed Data
Run the seed script to populate initial data:
```bash
npx tsx prisma/seed.ts
```

This creates:
- Admin user
- 4 sample services (AI Agent Development, Business Process Automation, etc.)
- 3 pricing tiers (Starter, Professional, Enterprise)

## Admin Panel Features

### Dashboard (`/admin`)
- Overview with counts of services, pricing plans, and leads
- Quick navigation to all sections

### Services Management (`/admin/services`)
- **List View**: See all services with edit/delete options
- **Add New**: Create new services with custom Lucide icons
- **Edit**: Update existing services
- **Delete**: Remove services
- Features sync automatically to the homepage

### Pricing Management (`/admin/pricing`)
- **List View**: Visual cards showing all pricing plans
- **Add New**: Create new pricing tiers
- **Edit**: Update plans and features dynamically
- **Delete**: Remove pricing plans
- Popular badge management
- Monthly/yearly pricing support
- Changes reflect immediately on the homepage

### Leads Management (`/admin/leads`)
- View all contact form submissions
- Status tracking (NEW → CONTACTED → CLOSED)
- Delete spam/old leads
- Sortable by date

## Frontend Integration

### Dynamic Sections
Both `ServicesSection` and `PricingSection` now fetch data from the database:
- **Server Components**: Data fetching happens on the server
- **Client Components**: Animations and interactivity with Framer Motion
- **Automatic Updates**: Changes in admin panel reflect immediately

### Contact Form
The CTA section contact form now saves submissions to the database:
- API endpoint: `/api/contact`
- Form validation with Zod
- Submissions appear in Admin > Leads

## Authentication Flow

1. User visits `/admin`
2. Middleware checks for authentication
3. If not authenticated, redirects to `/auth/signin`
4. After login, checks for ADMIN role
5. Only ADMIN users can access admin panel

## API Routes

### `/api/auth/[...nextauth]`
- Handles NextAuth authentication
- Credentials provider for email/password login
- JWT session strategy

### `/api/contact` (POST)
- Accepts: `{ name, email, message }`
- Validates with Zod schema
- Saves to ContactSubmission table

## Server Actions

### Services (`/app/actions/services.ts`)
- `createService(formData)`
- `updateService(id, formData)`
- `deleteService(id)`

### Pricing (`/app/actions/pricing.ts`)
- `createPricingPlan(formData)`
- `updatePricingPlan(id, formData)`
- `deletePricingPlan(id)`

### Leads (`/app/actions/leads.ts`)
- `updateLeadStatus(id, status)`
- `deleteLead(id)`

## Next Steps for Production

1. **Replace SQLite with PostgreSQL**
   - Update `DATABASE_URL` in `.env`
   - Run `npx prisma db push`

2. **Secure NextAuth Secret**
   - Generate: `openssl rand -base64 32`
   - Update in `.env.local`

3. **Add User Management**
   - Create multiple admin accounts
   - Add user roles (ADMIN, EDITOR, VIEWER)

4. **Add More Features**
   - Case Studies management
   - Blog/News section
   - Analytics dashboard
   - Email notifications for new leads

5. **Deploy**
   - Use Vercel, Railway, or similar
   - Set environment variables on platform
   - Run migrations automatically

## Testing

1. Start dev server: `npm run dev`
2. Visit: http://localhost:3000
3. Test contact form submission
4. Login to admin panel
5. Create/edit services and pricing
6. Verify changes appear on homepage

## Troubleshooting

### Database Issues
If you see database errors, reset it:
```bash
del prisma/dev.db
npx prisma db push
npx tsx prisma/seed.ts
```

### Auth Issues
If login doesn't work:
1. Ensure `.env.local` exists with NEXTAUTH_SECRET
2. Restart dev server
3. Clear browser cookies
4. Try seed script again

## File Structure

```
src/
├── app/
│   ├── actions/          # Server actions
│   ├── admin/            # Admin panel pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services/
│   │   ├── pricing/
│   │   └── leads/
│   ├── api/
│   │   ├── auth/
│   │   └── contact/
│   └── auth/
│       └── signin/
├── components/
│   ├── admin/            # Admin-specific components
│   ├── ui/               # Shadcn UI components
│   ├── ServicesList.tsx  # Client component for services
│   └── PricingList.tsx   # Client component for pricing
├── lib/
│   ├── prisma.ts         # Prisma singleton
│   └── auth.ts           # NextAuth config
└── types/
    └── next-auth.d.ts    # Type extensions

prisma/
├── schema.prisma         # Database schema
└── seed.ts              # Seed script
```
