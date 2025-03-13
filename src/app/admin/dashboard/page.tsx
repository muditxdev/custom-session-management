export default function AdminDashboard() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Admin Dashboard
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to your admin dashboard. This content is only visible to
        authenticated admins.
      </p>
   
    </div>
  );
}
