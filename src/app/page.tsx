import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatusDashboard from '@/components/StatusDashboard';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import PricingSection from '@/components/PricingSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatusDashboard />
      <FeaturesShowcase />
      <PricingSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
