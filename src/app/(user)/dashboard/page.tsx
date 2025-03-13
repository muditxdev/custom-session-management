import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        User Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to your user dashboard. This content is only visible to logged
        in users.
      </p>
      <Link href="/admin/auth/signin" target="_blank">
        <button
          type="button"
          className="mr-2 bg-red-600 text-white mt-4 py-2 px-3 rounded cursor-pointer"
        >
          Admin Login
        </button>
      </Link>
    </div>
  );
}
