// import { getAdminSession } from "@/lib/auth";
// import { redirect } from "next/navigation";
import { AdminAuthProvider } from "@/components/auth-providers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const session = await getAdminSession();
  
  // Protect admin routes
//   if (!session) {
//     redirect("/admin/auth/signin");
//   }

  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-red-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">Admin Dashboard</div>
            {/* <div>Admin: {session.user.name}</div> */}
          </div>
        </nav>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
      </div>
    </AdminAuthProvider>
  );
}