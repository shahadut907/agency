import ServiceForm from "@/components/admin/ServiceForm";

export default function NewServicePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Add New Service</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <ServiceForm />
            </div>
        </div>
    );
}
