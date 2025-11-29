'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPricingPlan, updatePricingPlan } from "@/app/actions/pricing";
import { PricingPlan, PricingFeature } from "@prisma/client";
import { useState } from "react";
import { X, Plus } from "lucide-react";

interface PricingFormProps {
    plan?: PricingPlan & { features: PricingFeature[] };
}

export default function PricingForm({ plan }: PricingFormProps) {
    const [features, setFeatures] = useState<string[]>(
        plan?.features.map(f => f.text) || ['']
    );

    const addFeature = () => {
        setFeatures([...features, '']);
    };

    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    return (
        <form action={plan ? updatePricingPlan.bind(null, plan.id) : createPricingPlan} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Plan Name</Label>
                    <Input id="name" name="name" defaultValue={plan?.name} required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="order">Display Order</Label>
                    <Input id="order" name="order" type="number" defaultValue={plan?.order ?? 0} required />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" defaultValue={plan?.description} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="priceMonthly">Monthly Price (leave empty for "Custom")</Label>
                    <Input
                        id="priceMonthly"
                        name="priceMonthly"
                        type="number"
                        step="0.01"
                        defaultValue={plan?.priceMonthly ?? undefined}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="priceYearly">Yearly Price (leave empty for "Custom")</Label>
                    <Input
                        id="priceYearly"
                        name="priceYearly"
                        type="number"
                        step="0.01"
                        defaultValue={plan?.priceYearly ?? undefined}
                    />
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="popular"
                    name="popular"
                    defaultChecked={plan?.popular}
                    className="w-4 h-4"
                />
                <Label htmlFor="popular" className="cursor-pointer">Mark as Popular</Label>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <Label>Features</Label>
                    <Button type="button" onClick={addFeature} size="sm" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Feature
                    </Button>
                </div>

                {features.map((feature, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <Input
                            name="features"
                            value={feature}
                            onChange={(e) => updateFeature(index, e.target.value)}
                            placeholder="Feature description"
                        />
                        {features.length > 1 && (
                            <Button
                                type="button"
                                onClick={() => removeFeature(index)}
                                size="icon"
                                variant="ghost"
                                className="text-red-600 hover:text-red-800"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex gap-4">
                <Button type="submit">
                    {plan ? "Update Plan" : "Create Plan"}
                </Button>
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}
