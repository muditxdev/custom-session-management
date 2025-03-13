"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export function UserAuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider basePath="/api/auth">{children}</SessionProvider>
  );
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider basePath="/api/admin-auth">{children}</SessionProvider>
  );
}