import Link from "next/link";
import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { deletePricingPlan } from "@/app/actions/pricing";

export default async function PricingPage() {
    const plans = await prisma.pricingPlan.findMany({
        orderBy: { order: 'asc' },
        include: { features: true },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Pricing Plans</h1>
                <Link href="/admin/pricing/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Pricing Plan
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div key={plan.id} className="bg-white shadow-md rounded-lg p-6 relative">
                        {plan.popular && (
                            <span className="absolute -top-3 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                Popular
                            </span>
                        )}
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="mb-4">
                            {plan.priceMonthly !== null ? (
                                <div>
                                    <span className="text-3xl font-bold">${plan.priceMonthly}</span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                            ) : (
                                <span className="text-3xl font-bold">Custom</span>
                            )}
                        </div>
                        <ul className="space-y-2 mb-6">
                            {plan.features.slice(0, 3).map((feature) => (
                                <li key={feature.id} className="text-sm text-gray-600">✓ {feature.text}</li>
                            ))}
                            {plan.features.length > 3 && (
                                <li className="text-sm text-gray-400">+ {plan.features.length - 3} more</li>
                            )}
                        </ul>
                        <div className="flex gap-2">
                            <Link href={`/admin/pricing/${plan.id}`} className="flex-1">
                                <Button variant="outline" size="sm" className="w-full">
                                    <Pencil className="w-4 h-4 mr-2" />
                                    Edit
                                </Button>
                            </Link>
                            <form action={deletePricingPlan.bind(null, plan.id)}>
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800 hover:bg-red-50">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
