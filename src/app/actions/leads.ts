'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const VALID_STATUSES = ['NEW', 'CONTACTED', 'IN_PROGRESS', 'CONVERTED', 'CLOSED'] as const;

export async function updateLeadStatus(id: string, status: string) {
    // Validate status
    if (!VALID_STATUSES.includes(status as any)) {
        throw new Error('Invalid status');
    }

    try {
        await prisma.contactSubmission.update({
            where: { id },
            data: { status },
        });

        revalidatePath("/admin/leads");
    } catch (error) {
        console.error("Update lead status error:", error);
        throw error;
    }
}

export async function deleteLead(id: string) {
    try {
        await prisma.contactSubmission.delete({
            where: { id },
        });

        revalidatePath("/admin/leads");
    } catch (error) {
        console.error("Delete lead error:", error);
        throw error;
    }
}
