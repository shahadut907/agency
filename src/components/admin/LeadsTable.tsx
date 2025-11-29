'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Eye, Mail, Phone, Clock, CheckCircle2, XCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateLeadStatus, deleteLead } from "@/app/actions/leads";
import { ContactSubmission } from "@prisma/client";

const STATUS_CONFIG = {
    NEW: {
        label: 'New',
        color: 'bg-blue-100 text-blue-800 border-blue-300',
        icon: Mail,
        description: 'Fresh lead, not yet contacted',
    },
    CONTACTED: {
        label: 'Contacted',
        color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        icon: Phone,
        description: 'Reached out, awaiting response',
    },
    IN_PROGRESS: {
        label: 'In Progress',
        color: 'bg-purple-100 text-purple-800 border-purple-300',
        icon: Clock,
        description: 'Actively working on this lead',
    },
    CONVERTED: {
        label: 'Converted',
        color: 'bg-green-100 text-green-800 border-green-300',
        icon: CheckCircle2,
        description: 'Successfully converted to client',
    },
    CLOSED: {
        label: 'Closed',
        color: 'bg-gray-100 text-gray-800 border-gray-300',
        icon: XCircle,
        description: 'Not interested or closed',
    },
} as const;

type LeadStatus = keyof typeof STATUS_CONFIG;

export default function LeadsTable({ leads }: { leads: ContactSubmission[] }) {
    const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);

    const handleStatusChange = async (leadId: string, newStatus: string) => {
        const formData = new FormData();
        await updateLeadStatus(leadId, newStatus);
        // The page will revalidate automatically due to server action
    };

    const getStatusBadge = (status: string) => {
        const statusKey = status as LeadStatus;
        const config = STATUS_CONFIG[statusKey] || STATUS_CONFIG.NEW;
        const Icon = config.icon;

        return (
            <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="font-medium">{config.label}</span>
            </div>
        );
    };

    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message Preview</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No leads yet. They will appear here when visitors submit the contact form.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead) => {
                                    const statusKey = lead.status as LeadStatus;
                                    const statusConfig = STATUS_CONFIG[statusKey] || STATUS_CONFIG.NEW;

                                    return (
                                        <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                                                    <span className="text-sm text-gray-500">{lead.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 max-w-md">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm text-gray-700 line-clamp-2 flex-1">
                                                        {lead.message}
                                                    </p>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => setSelectedLead(lead)}
                                                        className="shrink-0 h-8 w-8 p-0"
                                                        title="View full message"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Select
                                                    defaultValue={lead.status}
                                                    onValueChange={(value) => handleStatusChange(lead.id, value)}
                                                >
                                                    <SelectTrigger className={`w-40 ${statusConfig.color}`}>
                                                        <SelectValue>
                                                            {getStatusBadge(lead.status)}
                                                        </SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {Object.entries(STATUS_CONFIG).map(([key, config]) => {
                                                            const Icon = config.icon;
                                                            return (
                                                                <SelectItem key={key} value={key}>
                                                                    <div className="flex items-center gap-2">
                                                                        <Icon className="w-4 h-4" />
                                                                        <div className="flex flex-col">
                                                                            <span className="font-medium">{config.label}</span>
                                                                            <span className="text-xs text-gray-500">{config.description}</span>
                                                                        </div>
                                                                    </div>
                                                                </SelectItem>
                                                            );
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-900">
                                                        {new Date(lead.createdAt).toLocaleDateString()}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <form action={deleteLead.bind(null, lead.id)} className="inline">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="text-red-600 hover:text-red-800 hover:bg-red-50"
                                                        title="Delete lead"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </form>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Message Detail Dialog */}
            <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Lead Details</DialogTitle>
                        <DialogDescription>
                            Received on {selectedLead && new Date(selectedLead.createdAt).toLocaleString()}
                        </DialogDescription>
                    </DialogHeader>

                    {selectedLead && (
                        <div className="space-y-6">
                            {/* Contact Information */}
                            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase">Name</label>
                                    <p className="text-sm font-medium text-gray-900">{selectedLead.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 uppercase">Email</label>
                                    <p className="text-sm text-gray-900">{selectedLead.email}</p>
                                </div>
                                <div className="col-span-2">
                                    <label className="text-xs font-medium text-gray-500 uppercase">Current Status</label>
                                    <div className="mt-1">
                                        <Badge className={STATUS_CONFIG[selectedLead.status as LeadStatus]?.color || ''}>
                                            {getStatusBadge(selectedLead.status)}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                                <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto border border-gray-200">
                                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">{selectedLead.message}</p>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="border-t pt-4">
                                <label className="text-sm font-medium text-gray-700 mb-3 block">Quick Status Update</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <form action={updateLeadStatus.bind(null, selectedLead.id, 'CONTACTED')}>
                                        <Button type="submit" variant="outline" className="w-full">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Mark Contacted
                                        </Button>
                                    </form>
                                    <form action={updateLeadStatus.bind(null, selectedLead.id, 'IN_PROGRESS')}>
                                        <Button type="submit" variant="outline" className="w-full">
                                            <Clock className="w-4 h-4 mr-2" />
                                            In Progress
                                        </Button>
                                    </form>
                                    <form action={updateLeadStatus.bind(null, selectedLead.id, 'CONVERTED')}>
                                        <Button type="submit" variant="outline" className="w-full text-green-700 hover:bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 mr-2" />
                                            Mark Converted
                                        </Button>
                                    </form>
                                    <form action={updateLeadStatus.bind(null, selectedLead.id, 'CLOSED')}>
                                        <Button type="submit" variant="outline" className="w-full text-gray-700 hover:bg-gray-50">
                                            <XCircle className="w-4 h-4 mr-2" />
                                            Close Lead
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
