import ServiceForm from "@/components/admin/ServiceForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditServicePage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const service = await prisma.service.findUnique({
        where: { id },
    });

    if (!service) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Edit Service</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <ServiceForm service={service} />
            </div>
        </div>
    );
}
