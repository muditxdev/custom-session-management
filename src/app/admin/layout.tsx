'use client';

import AdminLayout from "@/components/admin";
import { SessionProvider } from "next-auth/react";

export default function AdmiRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider basePath="/api/auth">
      <AdminLayout>{children}</AdminLayout>
    </SessionProvider>
  );
}
