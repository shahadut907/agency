# Environment Variables Setup

This document describes all environment variables needed for the Nebula AI Automation website.

## Creating Your Environment File

Create a `.env.local` file in the root directory with the following variables:

## Database Configuration

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/nebula_db"
```

Replace with your PostgreSQL connection string. For development, you can use a local PostgreSQL instance or a cloud provider like Supabase, Neon, or Railway.

## Authentication (NextAuth.js)

```bash
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"
```

To generate a secure `NEXTAUTH_SECRET`, run:
```bash
openssl rand -base64 32
```

In production, set `NEXTAUTH_URL` to your actual domain.

## Stripe Payment Integration

```bash
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

Get these from your [Stripe Dashboard](https://dashboard.stripe.com/apikeys):
- Use test keys (starting with `pk_test_` and `sk_test_`) for development
- Use live keys (starting with `pk_live_` and `sk_live_`) for production
- Webhook secret is obtained when setting up webhook endpoints

## Email Service

### Option 1: SendGrid
```bash
SENDGRID_API_KEY="SG..."
EMAIL_FROM="noreply@yourdomain.com"
```

### Option 2: Resend
```bash
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@yourdomain.com"
```

Choose one email provider and get an API key from their dashboard.

## File Uploads (Optional - AWS S3)

```bash
AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="your-bucket-name"
```

Required only if you implement file upload functionality. Alternatively, you can use Cloudinary or Vercel Blob.

## Analytics (Optional)

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

Get this from [Google Analytics](https://analytics.google.com/).

## General App Configuration

```bash
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

In production, set:
- `NEXT_PUBLIC_APP_URL` to your actual domain
- `NODE_ENV="production"` (usually set automatically)

## Complete Example `.env.local`

```bash
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/nebula_db"

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-this-with-openssl-rand-base64-32"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_51..."
STRIPE_SECRET_KEY="sk_test_51..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
SENDGRID_API_KEY="SG.xxxx"
EMAIL_FROM="noreply@nebula.com"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Security Notes

⚠️ **IMPORTANT**:
- Never commit `.env.local` or any `.env` files to version control
- These files are already excluded in `.gitignore`
- Use different API keys for development and production
- Rotate secrets regularly
- Use environment-specific secrets in CI/CD pipelines

## Vercel Deployment

When deploying to Vercel:
1. Go to Project Settings → Environment Variables
2. Add all variables listed above
3. Set appropriate values for production
4. Vercel will automatically inject these at build and runtime

## Testing Without External Services

The website will run without these environment variables, but certain features will be unavailable:
- ✅ All UI components and pages work without env vars
- ❌ Database operations require `DATABASE_URL`
- ❌ Authentication requires `NEXTAUTH_` variables
- ❌ Payments require `STRIPE_` variables
- ❌ Email sending requires email service API keys

You can develop and test the frontend completely without setting up these services initially.
