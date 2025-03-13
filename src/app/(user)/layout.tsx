'use client';

import UserLayout from "@/components/user";
import { SessionProvider } from "next-auth/react";

export default function UserRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider basePath="/api/auth">
      <UserLayout>{children}</UserLayout>
    </SessionProvider>
  );
}
