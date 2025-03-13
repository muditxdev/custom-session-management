"use client";

import { useSession } from "next-auth/react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated" || !session) {
    return <div>Not signed in</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-indigo-600 dark:bg-indigo-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">User Dashboard</div>
          <div className="flex justify-center items-center">
            <div className="">Logged in as: {session.user.name}</div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-8 px-4">{children}</main>
    </div>
  );
}
