# Nebula - AI Automation Agency Website

A modern, full-stack website for an AI automation and agentic AI service agency built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme**: Sleek dark design with vibrant orange (#FF6B35) accents
- **Smooth Animations**: Powered by Framer Motion for all micro-interactions and page transitions
- **Responsive Design**: Fully responsive across all device sizes
- **shadcn/ui Components**: Beautiful, accessible UI components
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Inter font and dark mode
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Navigation.tsx      # Header navigation with mobile menu
│   ├── HeroSection.tsx     # Hero section with animated background
│   ├── ServicesSection.tsx # Services grid with cards
│   ├── StatusDashboard.tsx # API status dashboard
│   ├── FeaturesShowcase.tsx# Features with phone mockup
│   ├── PricingSection.tsx  # Pricing tiers with billing toggle
│   ├── CTASection.tsx      # Contact form section
│   └── Footer.tsx          # Footer with links and newsletter
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Forms & Validation
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **State Management**: Zustand (installed, ready to use)

### Backend Ready
- **Database ORM**: Prisma (installed, configured)
- **Authentication**: NextAuth.js (installed, ready to configure)
- **Payments**: Stripe (installed, ready to integrate)

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` (Deep black)
- **Card**: `#111111`
- **Border**: `#262626`
- **Primary**: `#FF6B35` (Vibrant orange)
- **Foreground**: `#ededed` (Light text)
- **Muted**: `#a1a1aa` (Gray text)

### Typography
- **Font**: Inter (Google Fonts)
- **Heading Sizes**: text-4xl to text-7xl
- **Body**: text-base to text-lg

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Pages & Sections

### Homepage (/)
1. **Hero Section** - Eye-catching headline with CTA buttons and animated background
2. **Services Section** - Grid of 4 service offerings with hover effects
3. **Status Dashboard** - Live API status with metrics
4. **Features Showcase** - Phone mockup with feature cards and animated counters
5. **Pricing Section** - Three pricing tiers with monthly/yearly toggle
6. **CTA Section** - Contact form with validation
7. **Footer** - Multi-column footer with social links

## 🎭 Animations

All sections include sophisticated animations:
- **Hero**: Floating particles, staggered text reveal
- **Services**: Scroll-triggered card entrance with stagger
- **Status**: Pulsing status indicators, progress bars
- **Features**: Phone mockup parallax, count-up animations
- **Pricing**: Card hover effects with glow
- **CTA**: Form field focus animations
- **Global**: Smooth scroll, navigation transitions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for sensitive data:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# Stripe
STRIPE_PUBLIC_KEY="pk_..."
STRIPE_SECRET_KEY="sk_..."

# Email
SENDGRID_API_KEY="..."
```

### Database Setup (When Ready)

1. **Initialize Prisma**:
```bash
npx prisma init
```

2. **Create your schema** in `prisma/schema.prisma`

3. **Run migrations**:
```bash
npx prisma migrate dev
```

4. **Generate Prisma Client**:
```bash
npx prisma generate
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Next Steps

### Phase 1: Complete (Frontend)
✅ Project setup
✅ Design system implementation
✅ All main sections built
✅ Animations implemented
✅ Responsive design

### Phase 2: Backend Integration (To Do)
- [ ] Set up PostgreSQL database
- [ ] Configure Prisma schema
- [ ] Implement authentication with NextAuth.js
- [ ] Create API routes for forms
- [ ] Integrate Stripe for payments
- [ ] Set up email notifications

### Phase 3: Advanced Features (To Do)
- [ ] User dashboard
- [ ] Admin panel
- [ ] Blog/Documentation
- [ ] Case studies page
- [ ] Analytics integration

## 🔐 Security Notes

- All form inputs should be validated server-side
- Environment variables should never be committed
- Implement rate limiting on API routes
- Use HTTPS in production
- Regular dependency updates

## 📝 Customization

### Update Colors
Edit `src/app/globals.css` and modify CSS variables in `:root`.

### Change Content
Each component is self-contained. Update text directly in component files.

### Add New Sections
Create new components in `src/components/` and import them in `src/app/page.tsx`.

## 🐛 Troubleshooting

### CSS Warnings
The warnings about `@custom-variant`, `@theme`, and `@apply` are expected with Tailwind CSS v4 and can be safely ignored.

### Port Already in Use
If port 3000 is occupied, Next.js will automatically use port 3001.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/docs)

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email support@yourcompany.com or join our Slack channel.

---

Built with ❤️ using Next.js and modern web technologies.
