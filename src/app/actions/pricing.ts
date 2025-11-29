'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const PricingPlanSchema = z.object({
    name: z.string().min(1, "Name is required"),
    priceMonthly: z.coerce.number().nullable(),
    priceYearly: z.coerce.number().nullable(),
    description: z.string().min(1, "Description is required"),
    popular: z.coerce.boolean().default(false),
    order: z.coerce.number().default(0),
});

export async function createPricingPlan(formData: FormData) {
    try {
        const features = formData.getAll("features") as string[];

        const rawData = {
            name: formData.get("name"),
            priceMonthly: formData.get("priceMonthly") || null,
            priceYearly: formData.get("priceYearly") || null,
            description: formData.get("description"),
            popular: formData.get("popular") === "on",
            order: formData.get("order"),
        };

        const data = PricingPlanSchema.parse(rawData);

        await prisma.pricingPlan.create({
            data: {
                ...data,
                features: {
                    create: features.filter(f => f.trim()).map(text => ({ text })),
                },
            },
        });

        revalidatePath("/admin/pricing");
        revalidatePath("/");
        redirect("/admin/pricing");
    } catch (error) {
        console.error("Create pricing plan error:", error);
        throw error;
    }
}

export async function updatePricingPlan(id: string, formData: FormData) {
    try {
        const features = formData.getAll("features") as string[];

        const rawData = {
            name: formData.get("name"),
            priceMonthly: formData.get("priceMonthly") || null,
            priceYearly: formData.get("priceYearly") || null,
            description: formData.get("description"),
            popular: formData.get("popular") === "on",
            order: formData.get("order"),
        };

        const data = PricingPlanSchema.parse(rawData);

        await prisma.pricingPlan.update({
            where: { id },
            data: {
                ...data,
                features: {
                    deleteMany: {},
                    create: features.filter(f => f.trim()).map(text => ({ text })),
                },
            },
        });

        revalidatePath("/admin/pricing");
        revalidatePath("/");
        redirect("/admin/pricing");
    } catch (error) {
        console.error("Update pricing plan error:", error);
        throw error;
    }
}

export async function deletePricingPlan(id: string) {
    try {
        await prisma.pricingPlan.delete({
            where: { id },
        });

        revalidatePath("/admin/pricing");
        revalidatePath("/");
    } catch (error) {
        console.error("Delete pricing plan error:", error);
        throw error;
    }
}
