import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "ADMIN") {
        redirect("/api/auth/signin");
    }

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-slate-900 text-white p-6 fixed h-full">
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
                <nav className="space-y-4">
                    <Link href="/admin" className="block hover:text-blue-400 transition-colors">Dashboard</Link>
                    <Link href="/admin/services" className="block hover:text-blue-400 transition-colors">Services</Link>
                    <Link href="/admin/pricing" className="block hover:text-blue-400 transition-colors">Pricing</Link>
                    <Link href="/admin/leads" className="block hover:text-blue-400 transition-colors">Leads</Link>
                    <Link href="/" className="block hover:text-blue-400 transition-colors mt-8 pt-8 border-t border-slate-700">Back to Site</Link>
                </nav>
            </aside>
            <main className="flex-1 ml-64 p-8 bg-slate-50 text-slate-900 min-h-screen">
                {children}
            </main>
        </div>
    );
}
