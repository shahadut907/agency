import PricingForm from "@/components/admin/PricingForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditPricingPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const plan = await prisma.pricingPlan.findUnique({
        where: { id },
        include: { features: true },
    });

    if (!plan) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Edit Pricing Plan</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <PricingForm plan={plan} />
            </div>
        </div>
    );
}
