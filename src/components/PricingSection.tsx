import PricingList from '@/components/PricingList';
import prisma from '@/lib/prisma';

export default async function PricingSection() {
    const plans = await prisma.pricingPlan.findMany({
        orderBy: { order: 'asc' },
        include: { features: true },
    });

    return (
        <section id="pricing" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PricingList plans={plans} />
            </div>
        </section>
    );
}
