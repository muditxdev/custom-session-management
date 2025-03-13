export default function AdminDashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">
          Haan bhai chotu This content is only visible to authenticated admins.
        </p>
        <div className="mt-8 p-4 bg-red-50 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Admin Controls</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manage users</li>
            <li>Review system logs</li>
            <li>Configure system settings</li>
            <li>Access admin-only features</li>
          </ul>
        </div>
      </div>
    );
  }