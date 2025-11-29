import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
    const servicesCount = await prisma.service.count();
    const pricingCount = await prisma.pricingPlan.count();
    const leadsCount = await prisma.contactSubmission.count();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Services</h3>
                    <p className="text-4xl font-bold text-blue-600">{servicesCount}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Pricing Plans</h3>
                    <p className="text-4xl font-bold text-green-600">{pricingCount}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Leads</h3>
                    <p className="text-4xl font-bold text-purple-600">{leadsCount}</p>
                </div>
            </div>
        </div>
    );
}
