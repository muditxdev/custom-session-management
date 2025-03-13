"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AdminAuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Admin Authentication Error</h2>
        <div className="p-4 text-sm text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 rounded-lg">
          {error || "An error occurred during admin authentication"}
        </div>
        <Link href="/admin/auth/signin" className="inline-block font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300">
          Back to admin login
        </Link>
      </div>
    </div>
  );
}