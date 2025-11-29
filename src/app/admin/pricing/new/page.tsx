import PricingForm from "@/components/admin/PricingForm";

export default function NewPricingPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Add New Pricing Plan</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <PricingForm />
            </div>
        </div>
    );
}
