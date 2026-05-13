import { AdminSidebar } from "@/components/admin-sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white md:flex">
      <AdminSidebar />
      <main className="container-main flex-1 py-8">{children}</main>
    </div>
  );
}
