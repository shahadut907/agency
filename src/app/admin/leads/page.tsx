import prisma from "@/lib/prisma";
import LeadsTable from "@/components/admin/LeadsTable";

export default async function LeadsPage() {
    const leads = await prisma.contactSubmission.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Contact Leads</h1>
            <LeadsTable leads={leads} />
        </div>
    );
}
