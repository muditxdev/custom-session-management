// import { getUserSession } from "@/lib/auth";
// import { redirect } from "next/navigation";
import { UserAuthProvider } from "@/components/auth-providers";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const session = await getUserSession();
  
  // Protect user routes
//   if (!session) {
//     redirect("/auth/signin");
//   }

  return (
    <UserAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-indigo-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">User Dashboard</div>
            {/* <div>Logged in as: {session.user.name}</div> */}
          </div>
        </nav>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
      </div>
    </UserAuthProvider>
  );
}