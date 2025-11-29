'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createService, updateService } from "@/app/actions/services";
import { Service } from "@prisma/client";
import { useState } from "react";
import * as Icons from "lucide-react";

interface ServiceFormProps {
    service?: Service;
}

export default function ServiceForm({ service }: ServiceFormProps) {
    const [iconPreview, setIconPreview] = useState(service?.icon || "Bot");

    // @ts-ignore
    const IconComponent = (Icons[iconPreview as keyof typeof Icons] || Icons.HelpCircle) as any;

    return (
        <form action={service ? updateService.bind(null, service.id) : createService} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" defaultValue={service?.title} required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="order">Order</Label>
                    <Input id="order" name="order" type="number" defaultValue={service?.order ?? 0} required />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="icon">Icon (Lucide React Name)</Label>
                <div className="flex gap-4 items-center">
                    <Input
                        id="icon"
                        name="icon"
                        value={iconPreview}
                        onChange={(e) => setIconPreview(e.target.value)}
                        required
                    />
                    <div className="p-2 bg-gray-100 rounded-md">
                        <IconComponent className="w-6 h-6" />
                    </div>
                </div>
                <p className="text-xs text-muted-foreground">
                    Enter a valid <a href="https://lucide.dev/icons" target="_blank" rel="noreferrer" className="underline">Lucide icon name</a> (e.g., Bot, Workflow, Code, Sparkles)
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" defaultValue={service?.description} required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="link">Link (Optional)</Label>
                <Input id="link" name="link" defaultValue={service?.link || ""} />
            </div>

            <div className="flex gap-4">
                <Button type="submit">
                    {service ? "Update Service" : "Create Service"}
                </Button>
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}
