'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ServiceSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    icon: z.string().min(1, "Icon name is required"),
    link: z.string().nullable().optional(),
    order: z.coerce.number().default(0),
});

export async function createService(formData: FormData) {
    try {
        const rawData = {
            title: formData.get("title"),
            description: formData.get("description"),
            icon: formData.get("icon"),
            link: formData.get("link") || null,
            order: formData.get("order"),
        };

        const data = ServiceSchema.parse(rawData);

        await prisma.service.create({
            data,
        });

        revalidatePath("/admin/services");
        revalidatePath("/");
        redirect("/admin/services");
    } catch (error) {
        console.error("Create service error:", error);
        throw error;
    }
}

export async function updateService(id: string, formData: FormData) {
    try {
        const rawData = {
            title: formData.get("title"),
            description: formData.get("description"),
            icon: formData.get("icon"),
            link: formData.get("link") || null,
            order: formData.get("order"),
        };

        const data = ServiceSchema.parse(rawData);

        await prisma.service.update({
            where: { id },
            data,
        });

        revalidatePath("/admin/services");
        revalidatePath("/");
        redirect("/admin/services");
    } catch (error) {
        console.error("Update service error:", error);
        throw error;
    }
}

export async function deleteService(id: string) {
    try {
        await prisma.service.delete({
            where: { id },
        });

        revalidatePath("/admin/services");
        revalidatePath("/");
    } catch (error) {
        console.error("Delete service error:", error);
        throw error;
    }
}
