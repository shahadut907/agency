import ServicesList from '@/components/ServicesList';
import prisma from '@/lib/prisma';

export default async function ServicesSection() {
    const services = await prisma.service.findMany({
        orderBy: { order: 'asc' },
    });

    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ServicesList services={services} />
            </div>
        </section>
    );
}
